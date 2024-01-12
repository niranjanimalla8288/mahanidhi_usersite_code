import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-mainnavbar',
  templateUrl: './mainnavbar.component.html',
  styleUrls: ['./mainnavbar.component.css']
})
export class MainnavbarComponent {
  // constructor(private router: Router) { }
  // clearRouteParamsAndNavigate() {
  //   const navigationExtras: NavigationExtras = {
  //     replaceUrl: true,
  //     queryParams: {}
  //   };
  //   this.router.navigate(['/alloffers'], navigationExtras);

  // }

  // navigateToNewPage() {
  //   this.router.navigate(['/alloffers'], { replaceUrl: true });
  // }
}
