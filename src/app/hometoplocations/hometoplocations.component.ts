import { Component, OnInit } from '@angular/core';
import { ServiceprovidercategoryService } from '../service/serviceprovidercategory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hometoplocations',
  templateUrl: './hometoplocations.component.html',
  styleUrls: ['./hometoplocations.component.css']
})
export class HometoplocationsComponent implements OnInit {


  category: any[] = [];
  paginatedCategoryData: any[] = []; // Data for the current page
  itemsPerPage: number = 5; // Number of items per page
  currentPage: number = 0;
  totalPages: number = 0;
  constructor(public _categoryService: ServiceprovidercategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._categoryService.getServiceprovidercategories().subscribe((data: any) => {
      this.category = data;
    });
    this.updatePaginatedData();
  }
  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePaginatedData();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updatePaginatedData();
    }
  }

  private updatePaginatedData(): void {
    const startIndex = this.currentPage * this.itemsPerPage;
    this.paginatedCategoryData = this.category.slice(startIndex, startIndex + this.itemsPerPage);
    this.totalPages = Math.ceil(this.category.length / this.itemsPerPage);
  }
}
