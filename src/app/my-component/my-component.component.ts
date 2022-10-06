import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponentComponent implements OnInit {
  public name: string;
  edad: number;
  nombres: Array<string>;

  constructor() {
    this.name = 'Angular';
    this.edad = 18;
    this.nombres = ['Juan', 'Pablo', 'Pedro', 'Lucas'];
  }

  ngOnInit(): void {
    console.log('Montado Component ***');
  }

  aumentarEdad() {
    this.edad++;
    console.log(this.edad, 'aumentarEdad ***');
  }

  restarEdad() {
    this.edad--;
    console.log(this.edad, 'restarEdad ***');
  }
}
