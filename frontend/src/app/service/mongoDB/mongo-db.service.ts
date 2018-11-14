import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MongoDBService {

  constructor(private http: HttpClient) { }

  getURLWebApp(){
    return this.http.get<any[]>('http://localhost:4200/api/database/urlWebApp');
  }

  getURLReloadConfig(){
    return this.http.get<any[]>('http://localhost:4200/api/database/urlReloadConfig');
  }

  getURLConsole(){
    return this.http.get<any[]>('http://localhost:4200/api/database/urlConsole');
  }

  getURLBatch(){
    return this.http.get<any[]>('http://localhost:4200/api/database/urlBatch');
  }

  getURLWebService(){
    return this.http.get<any[]>('http://localhost:4200/api/database/urlWebService');
  }

  getURLBugZilla(){
    return this.http.get<any[]>('http://localhost:4200/api/database/urlBugzilla');
  }
}
