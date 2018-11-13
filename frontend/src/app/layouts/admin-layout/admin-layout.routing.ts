import {Routes} from '@angular/router';
import {UrlComponent} from "../../url/url.component";
import {LocalhostComponent} from "../../localhost/localhost.component";
import {UserCompanyComponent} from "../../user-company/user-company.component";
import {UserBankComponent} from "../../user-bank/user-bank.component";
import {SftpComponent} from "../../sftp/sftp.component";
import {LdapComponent} from "../../ldap/ldap.component";
import {DatabaseComponent} from "../../database/database.component";

export const AdminLayoutRoutes: Routes = [
  {path: 'url', component: UrlComponent},
  {path: 'user-company', component: UserCompanyComponent},
  {path: 'user-bank', component: UserBankComponent},
  {path: 'localhost', component: LocalhostComponent},
  {path: 'sftp', component: SftpComponent},
  {path: 'ldap', component: LdapComponent},
  {path: 'database', component: DatabaseComponent},
];
