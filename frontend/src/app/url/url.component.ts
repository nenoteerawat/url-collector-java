import {Component, OnInit} from '@angular/core';
import {MongoDBService} from "../service/mongoDB/mongo-db.service";

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent implements OnInit {
  urlItems :any[] = [];

  constructor(private mongoDBService : MongoDBService) { }

  ngOnInit() {
    this.getAllUrl();
  }

  getAllUrl(){
    this.mongoDBService.getURL().subscribe(response => {
      this.urlItems = response;
    });
  }

}
