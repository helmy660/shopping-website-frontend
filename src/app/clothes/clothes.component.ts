import { Component, OnInit, Input } from '@angular/core';
import { Cloth } from './cloth.model';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
