import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <header>
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-sky-500 mb-3">
      <div class="container px-4 mx-auto flex flex-row flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          >
          Sell your property APP
          </a>
        </div>
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              routerLink="/home">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              routerLink="/properties">
              Properties
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>`
})
export class HeaderComponent {
}
