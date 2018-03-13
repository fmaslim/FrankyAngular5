import { Component, OnInit, Injectable, Inject, Output, EventEmitter, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/observable/fromEvent';

export class SearchResult {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.title = obj && obj.title || null;
    this.description = obj && obj.description || null;
    this.thumbnailUrl = obj && obj.thumbnailUrl || null;
    this.videoUrl = obj && obj.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;
  }
}

const YOUTUBE_API_KEY = '';
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

@Injectable()
export class YouTubeSearchService {

  constructor(private http: HttpClient,
              @Inject(YOUTUBE_API_KEY) private apiKey: string,
              @Inject(YOUTUBE_API_URL) private apiURL: string) {
  }

  search(query: string): Observable<SearchResult[]> {

    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    const queryURL = `${this.apiURL}?${params}`;

    return this.http.get(queryURL).map(response => {
      return response['items'].map(item => {
        return new SearchResult({
          id: item.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.high.url
        });
      });
    });
  }
}

export const YoutubeServiceInjectables: Array<any> = [
  { provide: YouTubeSearchService, useClass: YouTubeSearchService },
  { provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY },
  { provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL }
];

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  // These 2 Outputs will be emitted from this component.
  // We can use "(output)='callback()'" in the view to listen to events in this component.
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YouTubeSearchService, private elm: ElementRef) {
    // ElementRef elm - this is the parent component this is attached to.
  }

  ngOnInit() {
    // This is a good place to do initialization (vs the constructor) because inputs
    // set on a component are not available in the constructor.

    // Convert the "keyup" event into an observable stream
    Observable.fromEvent(this.elm.nativeElement, 'keyup');
  }

}
