import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MongoDBService {

  constructor(private http: HttpClient) { }

  getURL(){
    return this.http.get<any[]>('http://localhost:4200/api/database/url');
  }
}
