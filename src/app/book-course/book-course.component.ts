import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'pear-book-course',
  templateUrl: './book-course.component.html',
  styleUrls: ['./book-course.component.css']
})
export class BookCourseComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  show: boolean;
  titles = [
    { value: 'Dr', viewValue: 'Dr' },
    { value: 'Mr', viewValue: 'Mr' },
    { value: 'Mrs', viewValue: 'Mrs' },
    { value: 'Ms', viewValue: 'Ms' },
    { value: 'Miss', viewValue: 'Miss' }
  ];
  sexes = [
    { value: 'M', viewValue: 'Male' },
    { value: 'F', viewValue: 'Female' }
  ];

  countries = [
    { value: 'In', viewValue: 'India' },
    { value: 'Aus', viewValue: 'Australia' }
  ];

  testtypes = [
    { value: 'IELTS', viewValue: 'IELTS' },
    { value: 'TOFEL', viewValue: 'TOFEL' },
    { value: 'PTE', viewValue: 'PTE' }
  ];

  occupations = [
    { value: 'Pharmacist', viewValue: 'Pharmacist' },
    { value: 'General Physcian', viewValue: 'General Physcian' }
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

}
