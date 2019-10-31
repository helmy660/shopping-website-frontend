import { Component, OnInit, Input } from '@angular/core';
import { Cloth } from './cloth.model';
import { ClothService } from './cloth.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css'],
  providers:[ClothService]
})
export class ClothesComponent implements OnInit {
  
  item: Cloth;
  constructor(private clothService: ClothService) { }

  ngOnInit() {
    this.clothService.selectedCloth.subscribe(
      (cloth: Cloth) => {
        this.item = cloth;
      }
    )
  }
}
