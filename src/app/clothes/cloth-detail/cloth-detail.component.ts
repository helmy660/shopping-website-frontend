import { Component, OnInit, Input } from '@angular/core';
import { Cloth } from '../cloth.model';

@Component({
  selector: 'app-cloth-detail',
  templateUrl: './cloth-detail.component.html',
  styleUrls: ['./cloth-detail.component.css']
})
export class ClothDetailComponent implements OnInit {

  @Input() selectedItem: Cloth;
  constructor() { }

  ngOnInit() {
  }

}
