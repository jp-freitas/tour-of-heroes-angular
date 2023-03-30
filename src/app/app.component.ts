import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  navbarCollapse = true;
  sidebarData = [
    {
      id: 1,
      icon: 'dashboard',
      title: 'Dashboard',
      path: '/dashboard',
    },
    {
      id: 2,
      icon: 'group',
      title: 'Heroes',
      path: '/heroes',
    },
    {
      id: 3,
      icon: 'group_add',
      title: 'Add Hero',
      path: '/heroes/new',
    },
    {
      id: 4,
      icon: 'list',
      title: 'Logs',
      path: '/logs',
    },
  ]

  toggleNavbar() {
    this.navbarCollapse = !this.navbarCollapse;
  }
}
