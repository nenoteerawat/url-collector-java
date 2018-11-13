import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';

import {MatButtonModule, MatInputModule, MatRippleModule, MatTooltipModule,} from '@angular/material';
import {UrlComponent} from "../../url/url.component";
import {UserBankComponent} from "../../user-bank/user-bank.component";
import {UserCompanyComponent} from "../../user-company/user-company.component";
import {LdapComponent} from "../../ldap/ldap.component";
import {DatabaseComponent} from "../../database/database.component";
import {SftpComponent} from "../../sftp/sftp.component";
import {LocalhostComponent} from "../../localhost/localhost.component";
import {MongoDBService} from "../../service/mongoDB/mongo-db.service";
import {fakeBackendDatabaseInterceptorProvider} from "../../backend/fake-database";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule
  ],
  declarations: [
    UrlComponent,
    UserBankComponent,
    UserCompanyComponent,
    LdapComponent,
    DatabaseComponent,
    SftpComponent,
    LocalhostComponent
  ],
   providers : [
     MongoDBService ,
     fakeBackendDatabaseInterceptorProvider
   ]

})

export class AdminLayoutModule {}
