import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
/*
export class TitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/

 export class TitleComponent {
      @Input() title = '';
      @Input() subtitle = '';
      constructor() { }
    }
