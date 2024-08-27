import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  items=[
    {
      id:1,
      name:'Product A',
      price: 200,
      detail:'this is a product A',
      imageURL: 'https://inwfile.com/s-f/ebpwqj.jpg',
    },

    {
      id:1,
      name:'Product B',
      price: 250,
      detail:'this is a product B',
      imageURL: 'https://inwfile.com/s-ct/mlquvy.jpg',
    },

    {
      id:1,
      name:'Product C',
      price: 300,
      detail:'this is a product C',
      imageURL: 'https://inwfile.com/s-ct/o2gdd7.jpg',
    },

    {
      id:1,
      name:'Product D',
      price: 350,
      detail:'this is a product D',
      imageURL: 'https://inwfile.com/s-ct/36q5w1.jpg',
    },
  ]


}
