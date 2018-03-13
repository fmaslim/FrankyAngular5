import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

export class SearchResult {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;

  constructor(obj: any) {
    this.id = obj && obj.id || null;
    this.title = obj && obj.title || null;
    this.description = obj && obj.description || null;
    this.thumbnailUrl = obj && obj.thumbnailUrl || null;
    this.videoUrl = obj && obj.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;
  }
}

@Injectable()
export class YouTubeSearchService {

  constructor(private http: HttpClient) {

  }
}

// Eventually we're going to want to test our app. One of the things we find when testing is that we don't
// always want to test against production - we often want to test against staging or development API.

// To help with this environment configuration, one of the things we can do is make these constants injectable.

// By making them injectable, we can:
// 1. have code that injects the right constants fora given environment at deploy time
// 2. replace the injected value easily at test-time.
const YOUTUBE_API_KEY = '';
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

export const YoutubeServiceInjectables: Array<any> = [
  YouTubeSearchService, YOUTUBE_API_KEY, YOUTUBE_API_URL
];

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
  providers: []
})
export class SearchBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
