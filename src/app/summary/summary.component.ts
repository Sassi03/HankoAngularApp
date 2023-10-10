import { Component, OnInit } from '@angular/core';
import { register,Hanko } from '@teamhanko/hanko-elements';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  hankoApi = environment.HANKO_API_URL;
  hanko = new Hanko(this.hankoApi);

  logout() {
    this.hanko.user.logout().catch((error) => {
      // handle error
    });
    this.hanko.onUserLoggedOut(() => {
      this.router.navigate(["login"], { skipLocationChange: true });
      console.info("User logged out");
    });
    
  }

  constructor(private router: Router) {
    register(this.hankoApi)
      .catch((error) => {
        // handle error
      });
  }

  ngOnInit(): void {
  }
}
