import { Component, OnInit } from '@angular/core';
import { ServiceprovidercategoryService } from '../service/serviceprovidercategory.service';

@Component({
  selector: 'app-hometoplocations',
  templateUrl: './hometoplocations.component.html',
  styleUrls: ['./hometoplocations.component.css']
})
export class HometoplocationsComponent implements OnInit {


  category: any[] = [];
  constructor(public _categoryService: ServiceprovidercategoryService) { }

  ngOnInit(): void {
    this._categoryService.getServiceprovidercategories().subscribe((data: any) => {
      this.category = data;
    });
  }

}
