import { Component, OnInit } from '@angular/core';
import { People } from '../interfaces/people.interface';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peopleList:People[] = [];
  
  constructor(private peopleService:PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe((resp) => {
      this.peopleList = resp.results;
    });
  }

}
