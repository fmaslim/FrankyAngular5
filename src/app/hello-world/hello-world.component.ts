import { Component, OnInit, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  username: string;
  password: string;

  constructor() {
  }

  login(username: string, password: string): boolean {
    if (username === 'andy' && password === 'pass') {

      // localStorage serves as a flag to indicate whether or not there is an active user.

      // LocalStorage is an HTML5 key/value pair that allows to persist information on the browser.
      // The API is verys imple, and basically allows the setting, retrieval, and deletion of items.

      localStorage.setItem('username', username);
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('username');
  }

  getUser(): string {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    const currentUser = this.getUser();
    return currentUser !== null;
  }
}


@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const isLoggedIn = this.authService.isLoggedIn();

    if (!isLoggedIn) {
      alert(`You don't have permission to view this page`);
    }

    return isLoggedIn;
  }
}

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  username: string;
  password: string;
  loggedIn: boolean;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.username = '';
    this.password = '';
  }

  submit(username: string, password: string) {
    const loggedIn = this.authService.login(username, password);
    if (loggedIn) {
      alert(`LocalStorage[\'username\']: ${localStorage['username']}`);
    } else {
      alert(`Failed to login user. Username: ${username}`);
    }
  }

  isLoggedIn() {
    this.loggedIn = this.authService.isLoggedIn();
    alert(`Is user logged in? ${this.loggedIn}`);
  }

  getUser() {
    const user = this.authService.getUser();
    alert(`Current user: ${user}`);
  }

  logout() {
    this.authService.logout();
    return false;
  }
}
