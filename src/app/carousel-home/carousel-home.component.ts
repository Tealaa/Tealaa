import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-home',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './carousel-home.component.html',
  styleUrl: './carousel-home.component.scss'
})
export class CarouselHomeComponent {

}
