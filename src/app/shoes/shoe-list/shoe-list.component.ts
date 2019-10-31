import { Component, OnInit } from '@angular/core';
import { Shoe } from '../shoe.model';
import { ShoeService } from '../shoe.service';

@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {
  shoes: Shoe[];
  constructor(private shoeService: ShoeService) { }

  ngOnInit() {
    this.shoes = this.shoeService.getShoes();
  }
}
