import { Component, OnInit } from '@angular/core';
import { PlanService } from '../service/plan.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})

export class PackagesComponent implements OnInit {


  planDetails: any[] = [];
  constructor(public planService: PlanService) { };
  ngOnInit(): void {

    this.planService.getPlan().subscribe((data: any) => {
      this.planDetails = data;
    });
  }

}
