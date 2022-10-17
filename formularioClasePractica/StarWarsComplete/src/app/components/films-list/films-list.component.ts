import { Component, OnInit } from '@angular/core';
import { Films } from 'src/app/interfaces/films.interface';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsComponent implements OnInit {

  filmsList: Films[] = [];
  numPages = 0;

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.getFilmsPage(1);
  }

  getFilmsPage(page: number){
    this.filmsService.getFilms(page).subscribe(resp => {
      this.filmsList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
    })
  }

  counter(){
    return new Array(this.numPages);
  }

  getPhotoUrl(films : Films){
    let id = films.url.split("/").reverse()[1];
    return `https://starwars-visualguide.com/assets/img/films/${id}.jpg`
  }

}
