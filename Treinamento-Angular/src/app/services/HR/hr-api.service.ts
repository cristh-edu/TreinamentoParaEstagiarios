import { Observable } from "rxjs/Observable";

import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { HttpClient } from "@angular/common/http";
import { BaseRequestService } from "src/app/services/base-request/base-request.service";
import { environment } from "src/environments/environment";
import { Response } from "src/app/models/response";

export class HrService<T> extends BaseRequestService {
  constructor(router: string, protected http: HttpClient) {
    super(environment.apis.hr.url + router, http);
  }

  public post(data): Observable<Response<T>> {
    return super.post(data);
  }

  public get(query?): Observable<Response<T[]>> {
    return super.get(query);
  }

  public put(id, data): Observable<Response<T[]>> {
    return super.put(id, data);
  }

  public delete(id): Observable<Response<Number>> {
    return super.delete(id);
  }
}
