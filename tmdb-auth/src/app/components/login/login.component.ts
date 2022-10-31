import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  reqToken = '';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  requestToken() {
    this.loginService.createRequestToken().subscribe((resp) => {
      this.reqToken = resp.request_token;
      console.log(this.reqToken);
      window.location.hrfe= ''
    });
  }
}
