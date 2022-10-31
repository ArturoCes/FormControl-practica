import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PeopleDetailResponse } from 'src/app/interfaces/people-detail.interface';
import { People,  } from 'src/app/interfaces/people.interfaces';
import { PeopleService } from 'src/app/services/people.service';
import { DialogsComponent } from '../dialogs/dialogs.component';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peopleList: People[] = [];
  numPages=0;
  peopleSelected: PeopleDetailResponse | undefined;

  constructor(private peopleService: PeopleService,public dialog: MatDialog)  { }


  ngOnInit(): void {
    this.getPeoplePage(1);
  }

  getPeoplePage(page:number){

    this.peopleService.getPeople(page).subscribe((resp) => {

      this.peopleList = resp.results;
      this.numPages = Math.ceil(resp.results.length/10);

    });
  }
  counter(){
    return new Array(this.numPages);
  }

  getLookImg(people: People){

    let id = people.id;

    return `https://image.tmdb.org/t/p/w500/${people.profile_path}`;
  }
  getPeopleInfo(people: People) {
    this.peopleService.getPeopleDetail(people).subscribe(response => {
      this.peopleSelected = response;
      this.dialog.open(DialogsComponent, {
        data: {
          peopleInfo: this.peopleSelected,
          color: '#FF0000'
        },
      });
    });

}
}
