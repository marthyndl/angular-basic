import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-component2',
  templateUrl: './my-component2.component.html',
  styleUrls: ['./my-component2.component.css'],
})
export class MyComponent2Component implements OnInit {
  people: any[] = [
    {
      name: 'Douglas  Pace',
      age: 35,
      country: 'MARS',
    },
    {
      name: 'Mcleod  Mueller',
      age: 32,
      country: 'USA',
    },
    {
      name: 'Day  Meyers',
      age: 21,
      country: 'HK',
    },
    {
      name: 'Aguirre  Ellis',
      age: 34,
      country: 'UK',
    },
    {
      name: 'Cook  Tyson',
      age: 32,
      country: 'USA',
    },
  ];
  playerName: string;
  constructor() {
    this.playerName = 'asd';
  }

  ngOnInit(): void {}
}
