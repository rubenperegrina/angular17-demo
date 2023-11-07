import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { properties as mockProperties } from "../../components/properties/properties.mock";


@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
<div class="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-x-12 mt-4 md:mt-20 px-8">

<div class="flex flex-col mb-10">
  <picture class="mb-8 w-full relative">
    <img
      class="aspect-[389/500] h-full object-cover w-full max-w-full rounded"
      [ngSrc]="property.photo"
      width="389"
      height="500"
      [style]="property.viewTransitionName"
    />
  </picture>

  <a
     class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center">
    <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
         viewBox="0 0 18 21">
      <path
        d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
    </svg>
    More info
  </a>
</div>

<aside class="mt-10 md:mt-0">
  <h1 class="text-5xl font-black mb-4">
    {{property?.name}}
  </h1>
  <p class="text-4xl mb-4">{{property?.city}}</p>
  <p>
    <strong>State:</strong>
    <span class="font-semibold text-gray-800">
             {{property?.state}}
    </span>
  </p>
</aside>
</div>
  `,
  styles: []
})
export class PropertyDetailComponent {
  public property: any;

  @Input() set id(value: string) {
    this.property = mockProperties.find((property) => property.id === value);
  }
}
