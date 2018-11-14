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

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let urlItems: any[] = [];

    //------------------- Big Growing
    const BIZ_HOST_SIT = '10.1.253.14';
    const BIZ_PORT_SIT = '33110';
    const BIZ_PORT_CONSOLE_SIT = '30001';

    const BIZ_HOST_UAT = '10.9.168.69';
    const BIZ_PORT_UAT = '33110';
    const BIZ_PORT_CONSOLE_UAT = '30001';

    //------------------- Portal Admin
    const PORTAL_HOST_SIT = '10.1.253.14';
    const PORTAL_PORT_SIT = '33410';

    const PORTAL_HOST_UAT = '10.2.15.29';
    const PORTAL_PORT_UAT = '31441';

    //------------------- Jboss CBProj and CBBank
    const JBOSS_HOST_SIT = '10.2.154.145';
    const JBOSS_PORT_SIT = '8980';

    const JBOSS_HOST_UAT = '10.2.154.145';
    const JBOSS_PORT_UAT = '8880';

    //------------------- BPEL
    const BPEL_HOST_SIT = '10.9.212.28';
    const BPEL_PORT_SIT = '9080';
    const BPEL_PORT_CONSOLE_SIT = '9043';

    const BPEL_HOST_UAT = '10.9.104.11';
    const BPEL_PORT_UAT = '9080';
    const BPEL_PORT_CONSOLE_UAT = '9043';

    //------------------- BPGS
    const BPGS_HOST_UAT = '10.9.212.242';
    const BPGS_PORT_CONSOLE_UAT = '30001';

    //------------------- Other
    const BUG_ZILLA_HOST = '10.2.154.76';

    return of(null).pipe(mergeMap(() => {


      if (request.method === 'GET') {
        if (request.url.endsWith('/api/database/urlWebApp')) {
          const URL_BIG_GROWING: UrlInterface[] = [
            {path: `http://${BIZ_HOST_SIT}:${BIZ_PORT_SIT}/corporate/`, title: 'BizGrowing SIT'},
            {path: `http://${BIZ_HOST_UAT}:${BIZ_PORT_UAT}/corporate/`, title: 'BizGrowing UAT'}
          ];

          const URL_PORTAL_ADMIN: UrlInterface[] = [
            {path: `http://${PORTAL_HOST_SIT}:${PORTAL_PORT_SIT}/portalAdmin/`, title: 'Portal Admin SIT'},
            {path: `https://${PORTAL_HOST_UAT}:${PORTAL_PORT_UAT}/portalAdmin/`, title: 'Portal Admin UAT'}
          ];

          const URL_CB_PROJECT: UrlInterface[] = [
            {path: `http://${JBOSS_HOST_SIT}:${JBOSS_PORT_SIT}/CBProject/`, title: 'JBoss Company SIT'},
            {path: `http://${JBOSS_HOST_UAT}:${JBOSS_PORT_UAT}/CBProject/`, title: 'JBoss Company UAT'}
          ];

          const URL_CB_BANK: UrlInterface[] = [
            {path: `http://${JBOSS_HOST_SIT}:${JBOSS_PORT_SIT}/CBBankProj/`, title: 'JBoss Company SIT'},
            {path: `http://${JBOSS_HOST_UAT}:${JBOSS_PORT_UAT}/CBBankProj/`, title: 'JBoss Company UAT'}
          ];

          urlItems.push(URL_BIG_GROWING);
          urlItems.push(URL_PORTAL_ADMIN);
          urlItems.push(URL_CB_PROJECT);
          urlItems.push(URL_CB_BANK);

          return of(new HttpResponse({status: 200, body: urlItems}));

        } else  if (request.url.endsWith('/api/database/urlReloadConfig')) {

          const URL_BIG_GROWING: UrlInterface[] = [
            {path: `http://${BIZ_HOST_SIT}:${BIZ_PORT_SIT}/corporate/loginConfig/`, title: 'BizGrowing SIT'},
            {path: `http://${BIZ_HOST_UAT}:${BIZ_PORT_UAT}/corporate/loginConfig/`, title: 'BizGrowing UAT'}
          ];

          const URL_PORTAL_ADMIN: UrlInterface[] = [
            {path: `http://${PORTAL_HOST_SIT}:${PORTAL_PORT_SIT}/portalAdmin/reload/PortalAdminSystemConfig/`, title: 'Portal Admin SIT'},
            {path: `https://${PORTAL_HOST_UAT}:${PORTAL_PORT_UAT}/portalAdmin/reload/PortalAdminSystemConfig/`, title: 'Portal Admin UAT'}
          ];

          const URL_BPEL_SERVICE: UrlInterface[] = [
            {path: `http://${BPEL_HOST_SIT}:${BPEL_PORT_SIT}/CTFServiceProcessWeb/ClearConfigServlet`, title: 'BPEL Service SIT'},
            {path: `https://${BPEL_HOST_UAT}:${BPEL_PORT_UAT}/CTFServiceProcessWeb/ClearConfigServlet`, title: 'BPEL Service UAT'}
          ];

          const URL_BPEL_BATCH: UrlInterface[] = [
            {path: `http://${BPEL_HOST_SIT}:${BPEL_PORT_SIT}/CTFSchedulerWeb/ClearConfigServlet`, title: 'BPEL Batch SIT'},
            {path: `https://${BPEL_HOST_UAT}:${BPEL_PORT_UAT}/CTFSchedulerWeb/ClearConfigServlet`, title: 'BPEL Batch UAT'}
          ];

          urlItems.push(URL_BIG_GROWING);
          urlItems.push(URL_PORTAL_ADMIN);
          urlItems.push(URL_BPEL_SERVICE);
          urlItems.push(URL_BPEL_BATCH);

          return of(new HttpResponse({status: 200, body: urlItems}));

        } else  if (request.url.endsWith('/api/database/urlConsole')) {

          const URL_BIG_GROWING_CONSOLE: UrlInterface[] = [
            {path: `http://${BIZ_HOST_SIT}:${BIZ_PORT_CONSOLE_SIT}/ibm/console/logon.jsp`, title: 'BizGrowing SIT'},
            {path: `http://${BIZ_HOST_UAT}:${BIZ_PORT_CONSOLE_UAT}/ibm/console/logon.jsp`, title: 'BizGrowing UAT'}
          ];

          const URL_BPEL_CONSOLE: UrlInterface[] = [
            {path: `http://${BPEL_HOST_SIT}:${BPEL_PORT_CONSOLE_SIT}/ibm/console/logon.jsp`, title: 'BPEL SIT'},
            {path: `https://${BPEL_HOST_UAT}:${BPEL_PORT_CONSOLE_UAT}/ibm/console/login.do`, title: 'BPEL UAT'}
          ];

          const URL_BPGS_CONSOLE: UrlInterface[] = [
            {path: ``, title: ''},
            {path: `https://${BPGS_HOST_UAT}:${BPGS_PORT_CONSOLE_UAT}/CTFServiceProcessWeb/ClearConfigServlet`, title: 'BPGS UAT'}
          ];

          urlItems.push(URL_BIG_GROWING_CONSOLE);
          urlItems.push(URL_BPEL_CONSOLE);
          urlItems.push(URL_BPGS_CONSOLE);

          return of(new HttpResponse({status: 200, body: urlItems}));

        } else  if (request.url.endsWith('/api/database/urlBatch')) {

          const URL_BPEL_BATCH: UrlInterface[] = [
            {path: `http://${BPEL_HOST_SIT}:${BPEL_PORT_SIT}/CTFSchedulerWeb/index.jsp`, title: 'BPEL Batch SIT'},
            {path: `https://${BPEL_HOST_UAT}:${BPEL_PORT_UAT}/CTFSchedulerWeb/index.jsp`, title: 'BPEL Batch UAT'}
          ];

          urlItems.push(URL_BPEL_BATCH);

          return of(new HttpResponse({status: 200, body: urlItems}));

        } else  if (request.url.endsWith('/api/database/urlBugzilla')) {

          const URL_BUG_ZILLA: UrlInterface[] = [
            {path: `http://${BUG_ZILLA_HOST}/index.cgi`, title: 'Bugzilla'},
          ];

          urlItems.push(URL_BUG_ZILLA);

          return of(new HttpResponse({status: 200, body: urlItems}));

        } else  if (request.url.endsWith('/api/database/urlWebService')) {

          const URL_LGPN_UPDATE_STATUS: UrlInterface[] = [
            {path: `http://${BPEL_HOST_SIT}:${BPEL_PORT_SIT}/CTFLGPNUpdateStatus/LGPNService`, title: 'LGPN UpdateStatus SIT'},
            {path: `https://${BPEL_HOST_UAT}:${BPEL_PORT_UAT}/CTFLGPNUpdateStatus/LGPNService`, title: 'LGPN UpdateStatus UAT'}
          ];

          const URL_LG_INTER: UrlInterface[] = [
            {path: `http://${BPEL_HOST_SIT}:${BPEL_PORT_SIT}/ILGEGP/WSInter`, title: 'LGInter SIT'},
            {path: `https://${BPEL_HOST_UAT}:${BPEL_PORT_UAT}/ILGEGP/WSInter`, title: 'LGInter UAT'}
          ];

          const URL_CUSTODIAN_WS: UrlInterface[] = [
            {path: `http://${BPEL_HOST_SIT}:${BPEL_PORT_SIT}/CustodianWS/CTDUpdService`, title: 'CustodianWS SIT'},
            {path: `https://${BPEL_HOST_UAT}:${BPEL_PORT_UAT}/CustodianWS/CTDUpdService`, title: 'CustodianWS UAT'}
          ];

          urlItems.push(URL_LGPN_UPDATE_STATUS);
          urlItems.push(URL_LG_INTER);
          urlItems.push(URL_CUSTODIAN_WS);

          return of(new HttpResponse({status: 200, body: urlItems}));

        }

      }else {
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
