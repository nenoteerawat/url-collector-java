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
import {dematerialize, materialize, mergeMap,delay} from "rxjs/operators";

@Injectable()
export class FakeBackendAuthenInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let adminUser = {
      username : 'admin',
      password : 'admin',
      firstName : 'nattachai',
      lastName : 'summart'
    };

    let users: any[] = [adminUser];

    console.log("FakeBackendAuthenInterceptor : "+request.url);

    return of(null).pipe(mergeMap(() => {
      // authenticate
      if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
        // find if any user matches login credentials
        let filteredUsers = users.filter(user => {
          return user.username === request.body.username && user.password === request.body.password;
        });

        if (filteredUsers.length) {
          // if login details are valid return 200 OK with user details and fake jwt token
          let user = filteredUsers[0];
          let body = {
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token: 'fake-jwt-token'
          };

          return of(new HttpResponse({ status: 200, body: body }));
        } else {
          // else return 400 bad request
          return throwError({ error: { message: 'Username or password is incorrect' } });
        }
      }
    }))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }


}

export let fakeBackendAuthenInterceptorProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendAuthenInterceptor,
  multi: true
};
