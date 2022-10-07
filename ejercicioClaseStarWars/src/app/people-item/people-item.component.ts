import { Component, Input, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Film, People } from '../interfaces/people.interface';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.css']
})
export class PeopleItemComponent implements OnInit {
  filmList: Film[] = [];
  @Input() item !: People;
  constructor(private peopleService: PeopleService) { }


  ngOnInit(): void {
    this.item.films.forEach(element => {
      this.peopleService.getFilm(element).subscribe((resp) => {
        this.filmList.push(resp);
      })
    });

  }
  getUrlImagen(url: string) {
    let id = url.split('/')[5];
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  }

}

