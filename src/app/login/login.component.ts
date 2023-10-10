import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Hanko, register } from "@teamhanko/hanko-elements";
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  api = environment.HANKO_API_URL;
  client = new Hanko(this.api);
  error?: Error;
  constructor(private router: Router) { 
    register(this.api).catch(console.error);
  }

  email: any;

  ngOnInit(): void {
  }

  login() : void {
     this.router.navigate(["summary"], { skipLocationChange: true });
  }

  redirectToTodos() {
    this.router.navigate(['summary'], { skipLocationChange: true }).catch((e) => (this.error = e));
  }
}
