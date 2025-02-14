import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-navigation-bar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
  animations: [
    trigger('slide', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0%)',
        })
      ),
      state(
        'out',
        style({
          opacity: 0,
          transform: 'translateX(100%)',
        })
      ),
      transition('in <=> out', [animate('300ms ease')]),
    ]),
    trigger('rotate', [
      state('up', style({ transform: 'rotate(180deg)' })),
      state('down', style({ transform: 'rotate(0deg)' })),
      transition('up <=> down', [animate('150ms linear')]),
    ]),
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class NavigationBarComponent {
  isScrolled: boolean = false;
  isMenuOpen: boolean = false;
  dropdownMenu: boolean = false;

  constructor() {}
  
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 10;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutsideDropdown(event: Event): void {
    const target = event.target as HTMLElement;

    if (!target.closest('.menu-navbar') && !target.closest('.dropdown-menu')) {
      this.dropdownMenu = false;
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.noScroll();
  }

  toggleDropdownMenu(): void {
    this.dropdownMenu = !this.dropdownMenu;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.dropdownMenu = false;
    this.noScroll();
  }

  noScroll(): void {
    if (this.isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }
}
