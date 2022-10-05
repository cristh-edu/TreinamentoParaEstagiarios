import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { HttpClient } from "@angular/common/http";

export class BaseRequestService {
  constructor(protected url, protected http: HttpClient) {}

  public post(data, query = ""): Observable<any> {
    return this.http
      .post<any>(this.url + (query ? "?" + query : ""), data)
      .catch(this.errorHandler);
  }

  public postDashboard(data, query = ""): Observable<any> {
    return this.http
      .post<any>(this.url + "/dashboard" + (query ? "?" + query : ""), data)
      .catch(this.errorHandler);
  }

  public upsert(data): Observable<any> {
    return this.http
      .post<any>(this.url + "/upsert", data)
      .catch(this.errorHandler);
  }

  public putByUser(id, data): Observable<any> {
    if (id) {
      return this.http
        .put<any>(this.url + "/user/" + id, data)
        .catch(this.errorHandler);
    } else {
      return this.http.put<any>(this.url, data).catch(this.errorHandler);
    }
  }

  public put(id, data): Observable<any> {
    if (id) {
      return this.http
        .put<any>(this.url + "/" + id, data)
        .catch(this.errorHandler);
    } else {
      return this.http.put<any>(this.url, data).catch(this.errorHandler);
    }
  }

  public get(query?): Observable<any> {
    return this.http.get<any>(this.url + "?" + query).catch(this.errorHandler);
  }

  public getUser(query?): Observable<any> {
    return this.http.get<any>(this.url + "/users").catch(this.errorHandler);
  }

  public getWithManagement(query?): Observable<any> {
    return this.http
      .get<any>(this.url + "/hr?" + query)
      .catch(this.errorHandler);
  }

  public getOne(id, query?): Observable<any> {
    return this.http
      .get<any>(this.url + "/" + id + "?" + query)
      .catch(this.errorHandler);
  }

  public getByUser(id): Observable<any> {
    return this.http
      .get<any>(this.url + "/user/" + id)
      .catch(this.errorHandler);
  }

  public associates(query?): Observable<any> {
    return this.http
      .get<any>(this.url + "/associates?" + query)
      .catch(this.errorHandler);
  }

  public delete(id, query?): Observable<any> {
    if (id) {
      return this.http
        .delete<any>(this.url + "/" + id)
        .catch(this.errorHandler);
    } else {
      return this.http
        .delete<any>(this.url + "?" + query)
        .catch(this.errorHandler);
    }
  }

  protected errorHandler = (err) => {
    if (err.status === 401) {
      console.error("Erro na api \n", err);
      // this.ionicEvents.publish('user:shouldLogout')
    }

    return Observable.throw(err.error.message || err.message);
  };

  public vality(ids): Observable<any> {
    return this.http
      .get<any>(this.url + "/vality/" + ids)
      .catch(this.errorHandler);
  }
}
