import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spotify-track',
  templateUrl: './spotify-track.component.html',
  styleUrls: ['./spotify-track.component.css']
})
export class SpotifyTrackComponent implements OnInit {

  @Input() track: any;

  constructor() { }

  ngOnInit() {
  }

  back() {

  }
}
