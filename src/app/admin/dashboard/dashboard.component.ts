import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'pear-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  displayedColumns = ['no', 'name', 'email', 'course', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface PearStudents {
  name: string;
  no: number;
  email: string;
  course: string;
  status: string;
}

const ELEMENT_DATA: PearStudents[] = [
  { no: 1, name: 'David Cap', email: 'david@pear.academy', course: 'OET Exam 1', status: 'Registered' },
  { no: 2, name: 'Raobert', email: 'Raobert@pear.academy', course: 'OET Exam 2', status: 'Paid' },
  { no: 3, name: 'Sravan Rayarapu', email: 'Sravan@pear.academy', course: 'OET Exam 1', status: 'Paid' },
  { no: 4, name: 'Rajesh Dara', email: 'Rajesh@pear.academy', course: 'OET Exam 3', status: 'Paid' },
  { no: 5, name: 'Honey Singh', email: 'Honey@pear.academy', course: 'OET Exam 2', status: 'Paid' },
  { no: 6, name: 'Ameya Sawanth', email: 'Ameya@pear.academy', course: 'OET Exam 4', status: 'Paid' },
  { no: 7, name: 'Vipul Gusian', email: 'Vipul@pear.academy', course: 'OET Exam 5', status: 'Paid' },
  { no: 8, name: 'Ming le', email: 'Ming@pear.academy', course: 'OET Exam 4', status: 'Registered' },
  { no: 9, name: 'Ananya', email: 'Ananya@pear.academy', course: 'OET Exam 2', status: 'Registered' },
  { no: 10, name: 'Narmadha Kaur', email: 'Narmadha@pear.academy', course: 'OET Exam 1', status: 'Registered' },
];



