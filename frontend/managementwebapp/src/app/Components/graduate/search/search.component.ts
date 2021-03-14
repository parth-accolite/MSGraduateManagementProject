import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Institute } from 'src/app/Entities/Institute';
import { Skill } from 'src/app/Entities/Skill';
import { Location } from 'src/app/Entities/Location';
import { GraduateService } from 'src/app/Services/graduate.service';
import { InstituteService } from 'src/app/Services/institute.service';
import { LocationService } from 'src/app/Services/location.service';
import { SkillService } from 'src/app/Services/skill.service';
import { Graduate } from 'src/app/Entities/Graduate';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  searchValue = new FormControl("");
  searchCategory = new FormControl('Name');

  searchedGraduates: Graduate[] = [];
  @Output() graduatesList = new EventEmitter<Graduate[]>();

  instituteList: Institute[] = [];
  locationList: Location[] = [];
  skillList: Skill[] = [];

  constructor(fb: FormBuilder, private graduateService: GraduateService, private instituteService: InstituteService, private locationService: LocationService, private skillService: SkillService) {
    this.searchForm = fb.group({
      searchValue: this.searchValue,
      searchCategory: this.searchCategory,
    });
    this.instituteService.getAll().subscribe((resp) => {
      this.instituteList = resp;
    });

    this.locationService.getAll().subscribe((resp) => {
      console.log("SEARCH LOCATION", resp);
      this.locationList = resp;
    });

    this.skillService.getAll().subscribe((resp) => {
      console.log("SEARCH SKILLS:", resp);
      this.skillList = resp;
    });
  }

  ngOnInit(): void {
  }

  emitValue(): void {
    this.searchForm.value.searchCategory = 'Name';
    this.searchForm.value.searchValue = '';
    this.graduatesList.emit(this.searchedGraduates);
  }

  submitForm(): void {
    console.log(this.searchForm.value);
    switch (this.searchForm.value.searchCategory) {
      case "Name":
        console.log("Name", this.searchForm.value.searchValue);
        this.graduateService.searchByName(this.searchForm.value.searchValue).subscribe((resp)=>{
          console.log(resp);
          this.searchedGraduates = resp;
          this.emitValue();
        })

        break;
      case "Institute":
        console.log("Institute", this.searchForm.value.searchValue);
        this.instituteService.getById(this.searchForm.value.searchValue).subscribe((resp) => {
          console.log(resp);
          this.searchedGraduates = resp.graduates;
          this.emitValue();
        })
        break;
      case "Skill":
        console.log("Skill", this.searchForm.value.searchValue);
        this.skillService.getById(this.searchForm.value.searchValue).subscribe((resp) => {
          console.log(resp);
          this.searchedGraduates.length = 0;
          resp.forEach((element: any) => {
            // console.log(element[0]);
            let temp = new Graduate();
            temp.id = element[0]
            temp.address = element[1]
            temp.age = element[2]
            temp.emailId = element[3]
            temp.gender = element[4]
            temp.joiningDate = element[5]
            temp.name = element[6]
            temp.phoneNumber = element[7]
            temp.rollNumber = element[8]
            temp.biography = element[9]
            temp.instituteId = element[10]
            temp.locationId = element[11]
            temp.isDeleted = element[12]
            this.searchedGraduates.push(temp);
            console.log(this.searchedGraduates.length)
          });
          console.log(this.searchedGraduates);
          this.emitValue();
        })
        break;
      case "Location":
        console.log("Location", this.searchForm.value.searchValue);
        this.locationService.getById(this.searchForm.value.searchValue).subscribe((resp) => {
          console.log(resp);
          this.searchedGraduates = resp.graduates;
          console.log(this.searchedGraduates);
          this.emitValue();
        })
        break;
    }
  }

}
