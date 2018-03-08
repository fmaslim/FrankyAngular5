import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  votes: string;
  link: string;
  title: string;

  constructor() { }

  ngOnInit() {
  }

  voteUp() {
    alert('upvote clicked');
  }

  voteDown() {
    alert('downvote clicked');
  }
}
