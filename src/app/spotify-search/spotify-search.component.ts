import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

export class SpotifyService {

  // The first method to implement is searchTrack, which will search for a track, given a search term

  spotifyURL = 'https://api.spotify.com/v1/search';

  constructor(private http: Http) {

  }

  searchTrack(query: string) {
    const params = [
      `q=${query}`,
      `type=track`
    ].join('&');

    const url = `${this.spotifyURL}?${params}`;

    // This performs a GET request to the URL, passing the query as the search term
    // This returns an Observable, and uses the RXJS function 'map' to transform the result
    // then parsing it as JSON, resulting on an object.

    // Any function that calls this will have to use the Observable API and subscribe to the response
    return this.http.request(url).map(response => response.json());
  }
}


@Component({
  selector: 'app-spotify-search',
  templateUrl: './spotify-search.component.html',
  styleUrls: ['./spotify-search.component.css']
})
export class SpotifySearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
