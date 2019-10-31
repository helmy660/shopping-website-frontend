import { Cloth } from './cloth.model';
import { EventEmitter } from '@angular/core';
import { Specifications } from '../shared/specifications/specifications.model';

export class ClothService {
    
    selectedCloth = new EventEmitter<Cloth>();
    
    private clothes: Cloth[] = [
        new Cloth(
            'Coat',
            'Coat for women',
            'https://ak1.ostkcdn.com/images/products/is/images/direct/a9c630acdf5e305916928366e732e6cad482af1f/Women%27s-Notched-Lapel-Double-Breasted-Faux-Suede-Trench-Coat-Jacket-with-Belt.jpg',
            '1500 EL',
            new Specifications(['L','XL','XXL'],['yellow','Silver','black'],'female')
        ),
        new Cloth(
            'Blazzer',
            'Blazzer for men',
            'https://img1.cfcdn.club/36/70/36e5bb666b1e4c876474fcd7d8f86d70_350x350.jpg',
            '999 EL',
            new Specifications(['L','XL','XXL'],['yellow','Silver','black'],'male')
        )    
    ];

    getClothes() {
        return this.clothes.slice();
    }
}