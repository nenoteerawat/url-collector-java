import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/url-collect/url', title: 'URL',  icon: 'dashboard', class: '' },
    { path: '/url-collect/user-company', title: 'User Company',  icon:'content_paste', class: '' },
    { path: '/url-collect/user-bank', title: 'User Bank',  icon:'content_paste', class: '' },
    { path: '/url-collect/database', title: 'Database',  icon:'library_books', class: '' },
    { path: '/url-collect/sftp', title: 'SFTP',  icon:'bubble_chart', class: '' },
    { path: '/url-collect/ldap', title: 'LDAP',  icon:'location_on', class: '' },
    { path: '/url-collect/localhost', title: 'LocalHost',  icon:'notifications', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
