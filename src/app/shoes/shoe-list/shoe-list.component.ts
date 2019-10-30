import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Shoe } from '../shoe.model';

@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {

  @Output() shoeItem = new EventEmitter<Shoe>();
  shoes: Shoe[] = [
    new Shoe('Boat','Boat for men','350 LE','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-987887454-1559677786.jpg?crop=0.494xw:0.987xh;0.335xw,0&resize=640:*'),
    new Shoe('Stiletto','Stiletto for women','700 LE','https://simages.shoespie.com/Upload/Shoespie/SPU/Image/201809/watermark/c39f9d12-bd65-4417-a557-0f2d0fa1a00d.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onShowDetails(shoe: Shoe) {
    this.shoeItem.emit(shoe);
  }

}
