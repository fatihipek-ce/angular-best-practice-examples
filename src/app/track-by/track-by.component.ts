import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.css']
})
export class TrackByComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  test1 = [
    {id: 1, name: 'A'},
    {id: 2, name: 'B'},
    {id: 3, name: 'C'},
    {id: 4, name: 'D'},
    {id: 5, name: 'E'},
   ];

   test2 = [
     {id: 1, name: '1'},
     {id: 2, name: '2'},
     {id: 3, name: '3'},
     {id: 4, name: '4'},
     {id: 5, name: '5'},
    ];


    guncelle(){
     this.test1 = [
       {id: 1, name: 'A'},
       {id: 2, name: 'B'},
       {id: 3, name: 'C'},
       {id: 4, name: 'D'},
       {id: 5, name: 'E'},
       {id: 6, name: 'F'},
      ];

      this.test2 = [
       {id: 1, name: '1'},
       {id: 2, name: '2'},
       {id: 3, name: '3'},
       {id: 4, name: '4'},
       {id: 5, name: '5'},
       {id: 6, name: '6'},
      ];
    }

    trackByFn(index: number, item: any): number {
     return item.id;
   }

}
