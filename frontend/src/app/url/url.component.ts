import {Component, OnInit} from '@angular/core';
import {MongoDBService} from "../service/mongoDB/mongo-db.service";

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent implements OnInit {
  urlWebApps :any[] = [];
  urlReloadConfigs :any[] = [];
  urlConsoles :any[] = [];
  urlBatchs :any[] = [];
  urlBugzilla :any[] = [];
  urlWebServices :any[] = [];

  constructor(private mongoDBService : MongoDBService) { }

  ngOnInit() {
    this.getAllUrl();
  }

  getAllUrl(){
    this.mongoDBService.getURLWebApp().subscribe(response => {
      this.urlWebApps = response;
    });
    this.mongoDBService.getURLBatch().subscribe(response => {
      this.urlBatchs = response;
    });
    this.mongoDBService.getURLBugZilla().subscribe(response => {
      this.urlBugzilla = response;
    });
    this.mongoDBService.getURLConsole().subscribe(response => {
      this.urlConsoles = response;
    });
    this.mongoDBService.getURLReloadConfig().subscribe(response => {
      this.urlReloadConfigs = response;
    });
    this.mongoDBService.getURLWebService().subscribe(response => {
      this.urlWebServices = response;
    });
  }

}
