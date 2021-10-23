import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(id: string){
    const elements = document.querySelectorAll('li');
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove('active');
    }

    const itemSelected = document.getElementById(id);
    itemSelected.classList.add('active');
  }
}
