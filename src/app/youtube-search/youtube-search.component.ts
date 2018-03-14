import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../search-box/search-box.component';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {

  results: SearchResult[];
  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

  updateResult(results: SearchResult[]): void {
    this.results = results;
  }

}
