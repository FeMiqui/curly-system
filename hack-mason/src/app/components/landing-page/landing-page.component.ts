import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  file?: File; // Variable to store file
  public form = this.fb.group({
    firstName: [''],
    lastName: [''],
    birthday: [''],
    phoneNumber: [''],
    profilePicture: [''],
  });

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {}

  submitForm() {
    alert('Thanks for sending your information, we will contact you soon!');
  }
}
