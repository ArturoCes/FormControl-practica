import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro-component',
  templateUrl: './formulario-registro-component.component.html',
  styleUrls: ['./formulario-registro-component.component.css']
})
export class FormularioRegistroComponentComponent implements OnInit {
  email = new FormControl('');

  nombre = new FormControl('');

  apellidos = new FormControl('');

  telefono = new FormControl('');

  nif = new FormControl('');

  sexo = new FormControl('');

  checked = new FormControl(false);
  opcion = new FormControl('');
  opciones: string[] = ['A traves de Google','A traves de un amigo','A traves de mi profesor'];

  constructor() { }

  ngOnInit(): void {
  }

}
