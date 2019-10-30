import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shoe } from '../../shoe.model';

@Component({
  selector: 'app-shoe-item',
  templateUrl: './shoe-item.component.html',
  styleUrls: ['./shoe-item.component.css']
})
export class ShoeItemComponent implements OnInit {

  @Input() shoeItem: Shoe;
  @Output() selectedItem = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelectedItem(){
    this.selectedItem.emit();
  }

}
