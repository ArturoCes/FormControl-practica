import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
 nombre ='';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.nombre = localStorage.getItem('username')! == undefined ?'': localStorage.getItem('username')!;
  }

  logOut() {
    this.authService.logOut();
  }
}
