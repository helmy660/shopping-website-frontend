import { Component, OnInit, Input } from '@angular/core';
import { Shoe } from '../../shoe.model';
import { ShoeService } from '../../shoe.service';

@Component({
  selector: 'app-shoe-item',
  templateUrl: './shoe-item.component.html',
  styleUrls: ['./shoe-item.component.css']
})
export class ShoeItemComponent implements OnInit {

  @Input() shoeItem: Shoe;
  constructor(private shoeService: ShoeService) { }

  ngOnInit() {
  }

  onSelectedItem(){
    this.shoeService.selectedShoe.emit(this.shoeItem);
  }

}
