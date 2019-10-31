import { Component, OnInit, Input } from '@angular/core';
import { Shoe } from './shoe.model';
import { ShoeService } from './shoe.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css'],
  providers: [ShoeService]
})
export class ShoesComponent implements OnInit {

  @Input() selectedItem: Shoe;
  constructor(private shoeService: ShoeService) { }

  ngOnInit() {
    this.shoeService.selectedShoe.subscribe(
      (shoe: Shoe) => {
        this.selectedItem = shoe;
      }
    )
  }
}
