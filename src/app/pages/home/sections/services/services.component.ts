import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SLIDES, Slide } from './data';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule, NgIconsModule],
  templateUrl: './services.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServicesComponent {
  slides: Slide[] = SLIDES;
  @ViewChild('swiperRef', { static: false }) swiperRef?: ElementRef;

  swiperParams = {
    loop: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    spaceBetween: 60,
    pagination: {
      el: '.swiper-pagination_service',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next_service',
      prevEl: '.swiper-button-prev_service',
    },
  };

  ngAfterViewInit() {
    const swiper = this.swiperRef?.nativeElement;
    if (swiper) {
      Object.assign(swiper, this.swiperParams);
      // usar un microtask para dar tiempo a que el custom element cargue
      setTimeout(() => {
        swiper.initialize?.();
      }, 0);
    }
  }
}
