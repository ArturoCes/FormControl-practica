import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email = new FormControl('', Validators.email);
  password = new FormControl('');

  hidden = true;
  bloqueado =true;
  letra!:String;
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }
  mostrar() {
    if (this.hidden) {
      this.hidden = false;
    }else{
      this.hidden = true;
    }
  }
  bloquear (){
    if(!this.bloqueado){
      this.bloqueado=true;
    }else{
      this.bloqueado=false;
    }
  }
}
