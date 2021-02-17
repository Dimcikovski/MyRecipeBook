import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from '../models/menu-options';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Output() closeSidebar: EventEmitter<void> = new EventEmitter<void>();

  public links: MenuItem[] = [
    { label: 'Recipe list', icon: 'library_books', href: '/recipe/list' },
    { label: 'Add new recipe', icon: 'bookmark_add', href: '/recipe' },
  ];

  constructor() {}

  CloseSidebar() {
    this.closeSidebar.emit();
  }
}
