import { Component, OnInit } from '@angular/core';
import { PlanService } from '../service/plan.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})

export class PackagesComponent implements OnInit {


  planDetails: any[] = [];
  loading = true;
  constructor(public planService: PlanService) { };
  ngOnInit(): void {

    this.planService.getPlan().subscribe((data: any) => {
      setTimeout(() => {
        this.loading = false
      }, 2000);
      this.planDetails = data;
    });
  }

}
