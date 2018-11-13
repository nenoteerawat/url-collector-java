import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, of, throwError} from "rxjs";
import {delay, dematerialize, materialize, mergeMap} from "rxjs/operators";

declare interface UrlInterface {
  path: string;
  title: string;
}

@Injectable()
export class FakeBackendDatabaseInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let urlItems: any[] = [];

    const URL_BIG_GROWING: UrlInterface[] = [
      {path: 'http://10.1.253.14:33110/corporate/', title: 'BizGrowing SIT'},
      {path: 'http://10.9.168.69:33110/corporate/', title: 'BizGrowing UAT'}
    ];

    const URL_PORTAL_ADMIN: UrlInterface[] = [
      {path: 'http://10.1.253.14:33410/portalAdmin/', title: 'Portal Admin SIT'},
      {path: 'https://10.2.15.29:31441/portalAdmin/', title: 'Portal Admin UAT'}
    ];

    const URL_CB_PROJECT: UrlInterface[] = [
      {path: 'http://10.2.154.145:8980/CBProject/', title: 'JBoss Company SIT'},
      {path: 'http://10.2.154.145:8880/CBProject/', title: 'JBoss Company UAT'}
    ];

    console.log("FakeBackendDatabaseInterceptor : "+request.url);

    return of(null).pipe(mergeMap(() => {

      if (request.url.endsWith('/api/database/url') && request.method === 'GET') {

        urlItems.push(URL_BIG_GROWING);
        urlItems.push(URL_PORTAL_ADMIN);
        urlItems.push(URL_CB_PROJECT);

        return of(new HttpResponse({status: 200, body: urlItems}));
      } else {
        return throwError({error: {message: 'bad request'}});
      }
    }))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}

export let fakeBackendDatabaseInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendDatabaseInterceptor,
  multi: true
};
