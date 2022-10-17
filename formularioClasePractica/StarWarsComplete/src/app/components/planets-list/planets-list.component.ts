import { Component, OnInit } from '@angular/core';
import { Planet } from '../../interfaces/planets-list.interface';
import { PlanetListService } from '../../services/planet-list.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {
  img: String = '';
  planetList: Planet[] = [];
  numPages = 0;
  constructor(private planetService: PlanetListService) { }

  ngOnInit(): void {

    this.getPlanetPage(1);
  }
  getUrlImagen(url: string) {
    let id = url.split('/')[5];

    this.img = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    return this.img;

  }
  getPlanetPage(page: number) {
    this.planetService.getPlanets(page).subscribe(resp => {
      this.planetList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
    });
  }

  counter() {
    return new Array(this.numPages);
  }
}
