import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from 'src/app/dialogs/dialogs/dialogs.component';
import { PeopleDetailResponse } from 'src/app/models/interfaces/people-detail.interface';
import { Actor } from 'src/app/models/interfaces/people-list.interface';
import { PeopleListService } from 'src/app/services/people-list.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peopleList: Actor[] = [];
  numPages=0;
  peopleSelected: PeopleDetailResponse | undefined;

  constructor(private peopleService: PeopleListService,public dialog: MatDialog)  { }


  ngOnInit(): void {
    this.getPeoplePage(1);
  }

  getPeoplePage(page:number){

    this.peopleService.getActors(page).subscribe((resp) => {

      this.peopleList = resp.results;
      this.numPages = Math.ceil(resp.results.length/10);

    });
  }
  counter(){
    return new Array(this.numPages);
  }

  getLookImg(people: Actor){

    let id = people.id;

    return `https://image.tmdb.org/t/p/w500/${people.profile_path}`;
  }
  getPeopleInfo(people: Actor) {
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
