import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpotifyService {

  // The first method to implement is searchTrack, which will search for a track, given a search term

  spotifyURL = 'https://api.spotify.com/v1';

  constructor(private http: Http) {

  }

  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryURL = `${this.spotifyURL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }

    const apiKey = environment.spotifyApiKey;
    const headers = new Headers({
      Authorization: `Bearer ${apiKey}`
    });
    const options = new RequestOptions({
      headers: headers
    });

    return this.http.request(queryURL, options)
                    .map(response => response.json());
  }

  search(query: string, type: string): Observable<any[]> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }

  searchTrack(query: string): Observable<any[]> {
    // const params = [
    //   `q=${query}`,
    //   `type=track`
    // ].join('&');

    // const url = `${this.spotifyURL}?${params}`;

    // This performs a GET request to the URL, passing the query as the search term
    // This returns an Observable, and uses the RXJS function 'map' to transform the result
    // then parsing it as JSON, resulting on an object.

    // Any function that calls this will have to use the Observable API and subscribe to the response
    // return this.http.request(url).map(response => response.json());

    return this.search(query, 'track');
  }

  getTrack(id: string): Observable<any[]> {
    return this.query(`/tracks/${id}`);
  }
}


@Component({
  selector: 'app-spotify-search',
  templateUrl: './spotify-search.component.html',
  styleUrls: ['./spotify-search.component.css'],
  providers: [  ]
})
export class SpotifySearchComponent implements OnInit {
  query: string;
  results: any;
  id: string;
  tracks: any;

  constructor(private spotifyService: SpotifyService,
              private router: Router,
              private route: ActivatedRoute) {
    // Note that queryParams is different from route.params
    // route.params matches parameters in the route
    // queryparams matches parameters in the query string
    this.route.queryParams.subscribe(params => this.query = params['query'] || '');
  }

  ngOnInit() {
    this.search();

    this.spotifyService.getTrack(this.id).subscribe(response => this.renderTrack(response));
  }

  submit(term: string) {
    // We're manually telling the router to navigate to the search route, and providing a query parameter
    // then performing the actual search

    // Doing things this way gives us a great benefit: if we reload the browser, we're going to see the same
    // search result rendered. We can say that we're persisting the search term on the URL
    this.router.navigate(['search'], { queryParams: { query: this.query } }).then(() => this.search());
  }

  search() {
    console.log('this.query', this.query);
    if (!this.query) {
      return;
    }

    this.spotifyService.searchTrack(this.query).subscribe(response => this.renderResults(response));
  }

  renderResults(response: any) {
    this.results = null;
    if (response && response.tracks && response.tracks.items) {
      this.results = response.tracks.items;
    }
  }

  renderTrack(response: any) {
    this.tracks = null;
    if (response && response.tracks && response.tracks.items) {

    }
  }

  getEnvironmentVariable() {
    alert('Environment.Google: ' + environment.google);
  }
}
