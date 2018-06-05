import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pear-mail-confirm',
  templateUrl: './mail-confirm.component.html',
  styleUrls: ['./mail-confirm.component.scss']
})
export class MailConfirmComponent implements OnInit {
  email: string;

  constructor() { }

  ngOnInit() {
    this.email = localStorage.getItem('email');
  }

}
