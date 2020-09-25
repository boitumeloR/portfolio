import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {DOCUMENT} from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  opened = false;
  loggedIn = false;
  socialLogin = false;
  itineraryCount = 0;
  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) { }

  @ViewChild('menu', { static: true }) menu: ElementRef<HTMLDivElement>;
  ngOnInit(): void {
    this.initAnimations();
    this.observeNav();
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    this.observeNav();
  }

  observeNav() {
    const header = document.querySelector('.sticky');
    const intro = document.querySelector('.image');

    const sectionOneObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          console.log('Im intersecting');
          header.classList.add('nav-white');
        } else {
          console.log('im not');
          header.classList.remove('nav-white');
        }
      });
    }, { rootMargin: '-100px 0px 0px 0px'});

    sectionOneObserver.observe(intro);
  }

  toggleBurger() {
    this.opened = !this.opened;
  }
  Scroll($element: HTMLElement) {
    console.log($element);
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  initAnimations() {
    gsap.from(document.querySelector('.text'), {
      duration: 2.2,
      opacity: 0,
      y: -60,
      delay: 0.5,
    });

    gsap.from(this.menu.nativeElement , {
      duration: 2,
      opacity: 0,
      y: -20,
      delay: 0.5,
      stagger: 0.3
    });

    gsap.from(document.querySelector('.back') , {
      duration: 2,
      opacity: 0,
      x: -30,
      delay: 0.5,
      stagger: 0.3
    });
  }

}
