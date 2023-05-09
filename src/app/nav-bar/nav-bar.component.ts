import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatTabNavPanel } from '@angular/material/tabs';
import { Router, RouterState, ActivatedRoute, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  event$;

  links = [
    { id: '1', label: 'HOME', link: '/home', active: 'HOME' },
    { id: '2', label: 'SERVICES', link: '/service', active: 'SERVICES' },
    { id: '3', label: 'ABOUT', link: '/about', active: 'ABOUT' },
    { id: '4', label: 'CLIENT GALLERY', link: '/gallery', active: 'CLIENT GALLERY' },
    { id: '5', label: 'BOOK NOW', link: '/reservation', active: 'BOOK NOW' },
  ];

  activeLink = this.links[0];
  background: ThemePalette = 'primary';
  tabPanel: MatTabNavPanel = this.activeLink;

  constructor(router: Router) {
    this.event$
      = router.events
        .subscribe(
          (event: NavigationEvent) => {
            if (event instanceof NavigationStart) {
              this.links.forEach((link) => {
                if (event.url === link.link) {
                  this.activeLink = link;
                }
              })
            }
          });
  }

}
