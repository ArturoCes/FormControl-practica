import { Component, OnInit } from '@angular/core';
import { Film } from '../interface/starwars.interface';
import { StarwarService } from '../services/starwar.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css'],
})
export class StarwarsComponent implements OnInit {

  filmList: Film[] = [];

  constructor(private filmService: StarwarService) {}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((resp) => {
      this.filmList = resp.results;
    });
  }
}
