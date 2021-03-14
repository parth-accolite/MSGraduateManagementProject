import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Graduate } from 'src/app/Entities/Graduate';
import { Institute } from 'src/app/Entities/Institute';
import { Location } from 'src/app/Entities/Location';
import { Skill } from 'src/app/Entities/Skill';
import { GraduateService } from 'src/app/Services/graduate.service';
import { InstituteService } from 'src/app/Services/institute.service';
import { LocationService } from 'src/app/Services/location.service';
import { SkillService } from 'src/app/Services/skill.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newGraduate = new Graduate();
  @Output() selectedTab = new EventEmitter<number>();

  addGraduateForm!: FormGroup;
  instituteList: Institute[] = [];
  locationList: Location[] = [];
  skillList: Skill[] = [];

  name = new FormControl("");
  age = new FormControl(0);
  gender = new FormControl("");

  emailId = new FormControl("");
  address = new FormControl("");
  locationId = new FormControl(0);
  phoneNumber = new FormControl("+91");

  rollNumber = new FormControl("");
  instituteId = new FormControl(0);

  biography = new FormControl("");

  joiningDate = new FormControl("");
  skillId = new FormControl(0);

  constructor(fb: FormBuilder, private graduateService: GraduateService, private instituteService: InstituteService, private locationService: LocationService, private skillService: SkillService) {

    this.instituteService.getAll().subscribe((resp) => {
      this.instituteList = resp;
    });

    this.locationService.getAll().subscribe((resp) => {
      console.log("LOCATION", resp);
      this.locationList = resp;
    });

    this.skillService.getAll().subscribe((resp) => {
      console.log("SKILLS:", resp);
      this.skillList = resp;
    });

    this.addGraduateForm = fb.group({
      name: this.name,
      age: this.age,
      gender: this.gender,
      emailId: this.emailId,
      address: this.address,
      phoneNumber: this.phoneNumber,
      joiningDate: this.joiningDate,
      rollNumber: this.rollNumber,
      biography: this.biography,
      instituteId: this.instituteId,
      locationId: this.locationId,
      skillId: this.skillId,
    })


  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.addGraduateForm.value);
    let skills = Array<Skill>();
    skills.push(new Skill(1));
    skills.push(new Skill(3));

    this.newGraduate.name = this.addGraduateForm.value.name;
    this.newGraduate.age = this.addGraduateForm.value.age;
    this.newGraduate.gender = this.addGraduateForm.value.gender;
    this.newGraduate.emailId = this.addGraduateForm.value.emailId;
    this.newGraduate.address = this.addGraduateForm.value.address;
    this.newGraduate.phoneNumber = this.addGraduateForm.value.phoneNumber;
    this.newGraduate.joiningDate = this.addGraduateForm.value.joiningDate;
    this.newGraduate.rollNumber = this.addGraduateForm.value.rollNumber;
    this.newGraduate.biography = this.addGraduateForm.value.biography;
    this.newGraduate.instituteId = this.addGraduateForm.value.instituteId;
    this.newGraduate.locationId = this.addGraduateForm.value.locationId;
    this.newGraduate.skills = [new Skill(this.addGraduateForm.value.skillId)];

    console.log(this.newGraduate);

    this.graduateService.addOrEditGraduate(this.newGraduate).subscribe((resp) => {
      console.log(resp);
      this.selectedTab.emit(1);
    });

  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
