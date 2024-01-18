import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
declare const $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mahanidhi_project';
  constructor(private router: Router) {

  }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) { return; }
      window.scrollTo(0, 0);
    });
  }
  // onActivate(event: any) {
  //   window.scroll({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth'
  //   });

  //or document.body.scrollTop = 0;
  //or document.querySelector('body').scrollTo(0,0)

}


