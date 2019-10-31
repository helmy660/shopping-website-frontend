import { Component, OnInit } from '@angular/core';
import { Cloth } from '../cloth.model';
import { ClothService } from '../cloth.service';

@Component({
  selector: 'app-cloth-list',
  templateUrl: './cloth-list.component.html',
  styleUrls: ['./cloth-list.component.css']
})
export class ClothListComponent implements OnInit {

  clothes: Cloth[];

  constructor(private clothService: ClothService) { 
  }

  ngOnInit() {
    this.clothes = this.clothService.getClothes();
  }
}
