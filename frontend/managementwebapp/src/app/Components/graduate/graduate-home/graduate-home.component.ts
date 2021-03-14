import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Graduate } from 'src/app/Entities/Graduate';
import { GraduateService } from 'src/app/Services/graduate.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-graduate-home',
  templateUrl: './graduate-home.component.html',
  styleUrls: ['./graduate-home.component.css']
})
export class GraduateHomeComponent implements OnInit {
  selectedTab = new FormControl(1);

  graduatesList = [];
  selectedGraduate!: Graduate;

  constructor(private graduateService: GraduateService) { }

  ngOnInit() {
    this.graduateService.getAll().subscribe((resp) => {
      console.log("before", this.graduatesList.length);
      this.graduatesList = resp;
      console.log(typeof (resp[0].joiningDate));
      console.log(this.graduatesList.length);
    })
  }

  getGraduate(grad: Graduate) {
    this.selectedGraduate = grad;
    console.log(this.selectedGraduate);
  }

  getGraduatesList(graduatesList: any) {
    this.graduatesList = graduatesList;
  }

  getSelectedTab(tab: number) {
    this.graduateService.getAll().subscribe((resp) => {
      this.graduatesList = resp;
      this.selectedTab = new FormControl(1);
    })
  }
}
