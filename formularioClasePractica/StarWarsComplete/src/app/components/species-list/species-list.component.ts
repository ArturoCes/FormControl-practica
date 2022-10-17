import { Component, OnInit } from '@angular/core';
import { Species } from 'src/app/interfaces/species.interface';
import { SpeciesService } from 'src/app/services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesComponent implements OnInit {

  speciesList: Species[] = [];
  numPages = 0;

  constructor(private speciesService: SpeciesService) { }

  ngOnInit(): void {
    this.getSpeciesPage(1);
  }

  getSpeciesPage(page: number){
    this.speciesService.getSpecies(page).subscribe(resp => {
      this.speciesList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
    })
  }

  counter() {
    return new Array(this.numPages);
  }

  getPhotoUrl(species : Species){
    let id = species.url.split("/").reverse()[1];
    return `https://starwars-visualguide.com/assets/img/species/${id}.jpg`
  }

}
