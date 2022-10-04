import {
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/catch";
import { LocalStorageService } from "src/app/services/local-storage/local-storage.service";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

@Injectable()
export class HttpInterceptorsService implements HttpInterceptor {
  hostSaia;
  localStorage: LocalStorageService = new LocalStorageService();

  constructor(public _router: Router) {
    this.hostSaia = environment.apis.saia.url;
  }

  not_allow_authorization = ["/authenticate/login"];

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const _unit = localStorage.getItem("_unit");

    let isAuthorization = true;

    // localStorage.setItem('unit',

    if (!req.headers.has("Content-Type")) {
      req = req.clone({
        headers: req.headers.set(
          "Content-Type",
          "application/json;charset=UTF-8"
        ),
      });
    }

    this.not_allow_authorization.forEach((element) => {
      if (req.url.indexOf(element) !== -1) {
        isAuthorization = false;
      }
    });

    if (isAuthorization) {
      /**
       * Se tiver autorização insere o campo token no headers.
       */
      if (this.localStorage.getItem("token")) {
        req = req.clone({
          headers: req.headers.set(
            "Authorization",
            this.localStorage.getItem("token")
          ),
        });

        if (
          req.url.includes(this.hostSaia) ||
          this.hostSaia.includes(req.url)
        ) {
          const _unit =
            localStorage.getItem("_unit") == null
              ? "-1"
              : localStorage.getItem("_unit");
          req = req.clone({ headers: req.headers.set("Unit", _unit) });
        }
      }

      req = req.clone({
        headers: req.headers.set(
          "Executable",
          environment.application.executable
        ),
      });
    }

    let reqw = null;
    if (req.url.includes("where")) {
      try {
      } catch (e) {}
    }

    // console.log('uelo', req.url);
    // console.log('req', req);
    // console.info('****************************** ENDLOG ******************************');
    // console.log('\n\n\n');

    return next
      .handle(reqw == null ? req : reqw)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // console.log('event', JSON.stringify(event));
            if (event.url.includes(this.hostSaia)) {
              event = event.clone({ body: this.modifyBody(event.body) });
            }
          }
          return event;
        })
      )
      .catch((err: any) => {
        if (err.status === 401) {
          // this.localStorage.clear();
          // if (window.parent.location.href)
          //   window.parent.location.href = window.location.origin + '/login'
          // else
          //   window.location.href = window.location.origin + '/login'

          console.error("error in http-interceptor", err);
        }

        return next.handle(req);
      });
  }

  private modifyBody(body: any) {
    // console.log('modifyBody', body);
    const _unit = localStorage.getItem("_unit");

    // alert(_unit);

    let localData = body.data;

    // if('token' in body.data){

    // }
    // else{
    //   // console.log(localData);

    //   if(_unit == '-1'){

    //   }
    //   else{
    //     if(Array.isArray(localData)){
    //       localData = localData.filter((i)=>{
    //         if('unit' in i ){
    //           return i.unit == _unit;
    //         }
    //         if('cod_ident_unidade' in i){
    //           return i.cod_ident_unidade == _unit;
    //         }
    //         else{
    //           return i;
    //         }
    //       });
    //     }
    //     else{

    //     }
    //   }
    // }

    body.data = localData;

    return body;
  }
}
