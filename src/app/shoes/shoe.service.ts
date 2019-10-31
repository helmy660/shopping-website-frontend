import { Shoe } from './shoe.model';
import { EventEmitter } from '@angular/core';

export class ShoeService {
    
    selectedShoe = new EventEmitter<Shoe>();
    
    private shoes: Shoe[] = [
        new Shoe('Boat','Boat for men','350 LE','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-987887454-1559677786.jpg?crop=0.494xw:0.987xh;0.335xw,0&resize=640:*'),
        new Shoe('Stiletto','Stiletto for women','700 LE','https://simages.shoespie.com/Upload/Shoespie/SPU/Image/201809/watermark/c39f9d12-bd65-4417-a557-0f2d0fa1a00d.jpg')
    ];
    
    getShoes() {
        return this.shoes.slice();
    }
}