import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { properties as mockProperties } from "./properties.mock";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  template: `
    <h1
    class="font-black uppercase text-6xl md:text-8xl text-center py-8 px-4"
    >
    Houses for
    <span class="block text-[36px] md:text-[58px]">sale</span>
  </h1>
  @defer(when properties) {
    <ul class="grid grid-cols-2 md:grid-cols-3 gap-3 px-4">
      @for(property of properties; track property.id) {
        <li>
          <a class="hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl"
          [routerLink]="['/property', property.id]">
          <img
          alt={{property.name}}
          class="aspect-[389/500] h-full object-cover w-full max-w-full rounded"
          [ngSrc]="property.photo"
          height="500"
          width="389"
          [style]="property.viewTransitionName"
          />
        </a>
      </li>
      }
      @empty {
        <span>No properties for sell</span>
      }
  </ul>
  }
  @placeholder {
  <span>Placeholder</span>
  }
  @error {
    <span>Error</span>
  }
  @loading(minimum 1s) {
    <span>Loading...</span>
  }
  `,
  styles: []
})
export class PropertiesComponent {
  properties = mockProperties;
}
