import { Component, OnInit, Input } from '@angular/core';
import { Shoe } from '../shoe.model';

@Component({
  selector: 'app-shoe-detail',
  templateUrl: './shoe-detail.component.html',
  styleUrls: ['./shoe-detail.component.css']
})
export class ShoeDetailComponent implements OnInit {

  @Input() item: Shoe;
  constructor() { }

  ngOnInit() {
  }

}
