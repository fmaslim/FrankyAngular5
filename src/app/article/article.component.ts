import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';

export class Article {
  votes: number;
  link: string;
  title: string;

  constructor(link: string, title: string, votes?: number) {
    this.votes = votes || 0;
    this.link = link;
    this.title = title;
  }

  voteUp() {
    this.votes++;
  }

  voteDown() {
    this.votes--;
  }
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // This sets the CSS Class of the host of this component
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {
  }

  ngOnInit() {
  }

  voteUp() {

    // Even though this works, it breaks the encapsulation of the Article class by changing
    // the article's internal properties directly.

    // The problem is that this component knows too much about the internal of the Article class

    // this.article.votes++;
    this.article.voteUp();
    return false;
    // Without "return false", Javascript by default will cause the page to reload, instead of updating the list
    // It's because JS propagates the click event to all the parent components.
    // Because the click event is propagated to parents, our browser is trying to follow the empty link,
    // which tells the browser to reload.
  }

  voteDown() {
    if (this.article.votes >= 1) {
      // this.article.votes--;
      this.article.voteDown();
    }
    return false;
  }
}
