import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
<h1
  class="font-black uppercase text-6xl md:text-8xl text-center py-8 px-4"
>
  Home
</h1>
  `
})
export class HomeComponent {
}
