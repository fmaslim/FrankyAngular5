import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Article } from '../article/article.component';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {

  myForm: FormGroup;
  title: FormControl;
  link: FormControl;

  articles: Article[];

  constructor() {
    this.articles = [
      new Article('http://angular.io', 'Angular 5', 10),
      new Article('http://react.io', 'ReactJS', 10),
      new Article('http://vue.io', 'VueJS', 10)
    ];
  }

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
    alert(myTitle + ', ' + myLink);
  }

  redditVoteUp(article: Article) {
    article.voteUp();
  }

  redditVoteDown(article: Article) {
    article.voteDown();
  }
}
