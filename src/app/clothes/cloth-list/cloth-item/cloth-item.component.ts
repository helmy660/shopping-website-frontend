import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cloth } from '../../cloth.model';

@Component({
  selector: 'app-cloth-item',
  templateUrl: './cloth-item.component.html',
  styleUrls: ['./cloth-item.component.css']
})
export class ClothItemComponent implements OnInit {

  @Input() clothItem: Cloth;
  @Output() showDetails =  new EventEmitter<void>();
  
  constructor() { 
  }

  ngOnInit() {
  }

  showDetailsFunction() {
    this.showDetails.emit();
  }



}
