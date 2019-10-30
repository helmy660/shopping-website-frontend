import { Component, OnInit, Input } from '@angular/core';
import { Shoe } from './shoe.model';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {

  @Input() selectedItem: Shoe;
  constructor() { }

  ngOnInit() {
  }

  onSelectedItem(event){
    this.selectedItem = event;
  }
}
