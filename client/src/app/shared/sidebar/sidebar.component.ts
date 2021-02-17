import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu-options';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public links: MenuItem[] = [
    { label: 'Recipe list', icon: 'library_books', href: '/recipe' },
    { label: 'Add new recipe', icon: 'bookmark_add', href: '/recipe' },
  ];

  constructor() {}
}
