import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { Feedback } from 'src/app/Entities/Feedback';
import { Graduate } from 'src/app/Entities/Graduate';
import { Institute } from 'src/app/Entities/Institute';
import { Location } from 'src/app/Entities/Location';
import { FeedbackService } from 'src/app/Services/feedback.service';
import { GraduateService } from 'src/app/Services/graduate.service';
import { InstituteService } from 'src/app/Services/institute.service';
import { LocationService } from 'src/app/Services/location.service';

@Component({
  selector: 'app-view-graduate-details',
  templateUrl: './view-graduate-details.component.html',
  styleUrls: ['./view-graduate-details.component.css']
})
export class ViewGraduateDetailsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  instituteDetails !: Institute;
  instituteLocationDetails !: Location;
  graduateLocationDetails !: Location;
  instituteList !: Institute[];
  locationList !: Location[];

  editPersonalDetailsForm !: FormGroup;
  showPersonalDetailsForm: Boolean = false;
  editContactDetailsForm !: FormGroup;
  showContactDetailsForm: Boolean = false;
  editCollegeDetailsForm !: FormGroup;
  showCollegeDetailsForm: Boolean = false;
  editOtherDetailsForm !: FormGroup;
  showOtherDetailsForm: Boolean = false;
  feedbackForm !: FormGroup;
  showFeedbackForm: Boolean = false;


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

  feedbackTitle = new FormControl("");
  feedbackDescription = new FormControl("");


  constructor(fb: FormBuilder, private graduateService: GraduateService, private instituteService: InstituteService, private locationService: LocationService, private feedbackService: FeedbackService) {
    this.editPersonalDetailsForm = fb.group({
      name: this.name,
      age: this.age,
      gender: this.gender,
    });
    this.editContactDetailsForm = fb.group({
      emailId: this.emailId,
      address: this.address,
      locationId: this.locationId,
      phoneNumber: this.phoneNumber,
    });
    this.editCollegeDetailsForm = fb.group({
      rollNumber: this.rollNumber,
      instituteId: this.instituteId,
    });
    this.editOtherDetailsForm = fb.group({
      biography: this.biography,
      joiningDate: this.joiningDate,
      skillId: this.skillId,
    });
    this.feedbackForm = fb.group({
      feedbackTitle: this.feedbackTitle,
      feedbackDescription: this.feedbackDescription
    })
  }


  @Input() selectedGraduate !: Graduate
  ngOnInit(): void {
    this.instituteService.getById(this.selectedGraduate.instituteId).subscribe((resp) => {
      this.instituteDetails = resp;
      this.locationService.getById(this.instituteDetails.locationId).subscribe((resp => {
        this.instituteLocationDetails = resp;
      }))
    })
    this.locationService.getById(this.selectedGraduate.locationId).subscribe((resp) => {
      this.graduateLocationDetails = resp;
    })

    this.locationService.getAll().subscribe((resp) => {
      this.locationList = resp;
    })
    this.instituteService.getAll().subscribe((resp) => {
      this.instituteList = resp;
    })

    this.name.setValue(this.selectedGraduate.name);
    this.age.setValue(this.selectedGraduate.age);
    this.gender.setValue(this.selectedGraduate.gender);

    this.emailId.setValue(this.selectedGraduate.emailId);
    this.address.setValue(this.selectedGraduate.address);
    this.locationId.setValue(this.selectedGraduate.locationId);
    this.phoneNumber.setValue(this.selectedGraduate.phoneNumber);

    this.rollNumber.setValue(this.selectedGraduate.rollNumber);
    this.instituteId.setValue(this.selectedGraduate.instituteId);

    this.biography.setValue(this.selectedGraduate.biography);
    this.joiningDate.setValue(this.selectedGraduate.joiningDate);
    // this.skillId.setValue(this.selectedGraduate.skills[0].id);
  }

  editPersonalDetails() {
    this.showPersonalDetailsForm = !this.showPersonalDetailsForm;
    if (!this.showPersonalDetailsForm) {
      console.log(this.editPersonalDetailsForm.value);
      this.selectedGraduate.name = this.editPersonalDetailsForm.value.name;
      this.selectedGraduate.age = this.editPersonalDetailsForm.value.age;
      this.selectedGraduate.gender = this.editPersonalDetailsForm.value.gender;
      console.log(this.selectedGraduate);

      this.graduateService.addOrEditGraduate(this.selectedGraduate).subscribe((resp) => {
        console.log(resp);
      })
    }
  }

  editContactDetails() {
    this.showContactDetailsForm = !this.showContactDetailsForm;
    if (!this.showContactDetailsForm) {
      console.log(this.editPersonalDetailsForm.value);
      this.selectedGraduate.emailId = this.editContactDetailsForm.value.emailId;
      this.selectedGraduate.address = this.editContactDetailsForm.value.address;
      this.selectedGraduate.locationId = this.editContactDetailsForm.value.locationId;
      this.selectedGraduate.phoneNumber = this.editContactDetailsForm.value.phoneNumber;
      console.log(this.selectedGraduate);

      this.graduateService.addOrEditGraduate(this.selectedGraduate).subscribe((resp) => {
        console.log(resp);
      })
    }
  }

  editCollegeDetails() {
    this.showCollegeDetailsForm = !this.showCollegeDetailsForm;
    if (!this.showCollegeDetailsForm) {
      console.log(this.editPersonalDetailsForm.value);
      this.selectedGraduate.rollNumber = this.editCollegeDetailsForm.value.rollNumber;
      this.selectedGraduate.instituteId = this.editCollegeDetailsForm.value.instituteId;
      console.log(this.selectedGraduate);

      // this.graduateService.addOrEditGraduate(this.selectedGraduate).subscribe((resp) => {
      //   console.log(resp);
      // })
    }
  }

  editOtherDetails() {
    this.showOtherDetailsForm = !this.showOtherDetailsForm;
    if (!this.showOtherDetailsForm) {
      console.log(this.editPersonalDetailsForm.value);
      this.selectedGraduate.biography = this.editOtherDetailsForm.value.biography;
      this.selectedGraduate.joiningDate = this.editOtherDetailsForm.value.joiningDate;
      // this.selectedGraduate.skillId = this.editOtherDetailsForm.value.skillId;
      console.log(this.selectedGraduate);

      // this.graduateService.addOrEditGraduate(this.selectedGraduate).subscribe((resp) => {
      //   console.log(resp);
      // })
    }
  }

  deleteSelectedGraduate() {
    console.log("delete", this.selectedGraduate.id);
  }

  showFeedback() {
    this.showFeedbackForm = true;
    this.accordion.closeAll();
  }

  submitFeedback() {
    this.showFeedbackForm = false;
    console.log(this.feedbackForm.value);
    let feedback = new Feedback();
    feedback.graduateId = this.selectedGraduate.id
    feedback.title = this.feedbackForm.value.feedbackTitle;
    feedback.description = this.feedbackForm.value.feedbackDescription;
    feedback.createdAt = new Date();
    this.feedbackService.save(feedback).subscribe((resp) => {
      console.log(resp);
    })
  }
}

