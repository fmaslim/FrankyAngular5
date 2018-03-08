import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {

  myForm: FormGroup;
  title: FormControl;
  link: FormControl;

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createForm() {
    this.myForm = new FormGroup({
      title: this.title,
      link: this.link
    });
  }

  createFormControls() {
    this.title = new FormControl('');
    this.link = new FormControl('');
  }

  addArticle(myTitle: string, myLink: string) {
  }
}
