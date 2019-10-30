import { Component, OnInit, Input } from '@angular/core';
import { Cloth } from '../../cloth.model';

@Component({
  selector: 'app-cloth-item',
  templateUrl: './cloth-item.component.html',
  styleUrls: ['./cloth-item.component.css']
})
export class ClothItemComponent implements OnInit {

  @Input() clothItem: Cloth;
  
  constructor() { 
  }

  ngOnInit() {
  }

  showDetails(event) {
    console.log(event);
  }



}
