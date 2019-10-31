import { Component, OnInit, Input} from '@angular/core';
import { Cloth } from '../../cloth.model';
import { ClothService } from '../../cloth.service';

@Component({
  selector: 'app-cloth-item',
  templateUrl: './cloth-item.component.html',
  styleUrls: ['./cloth-item.component.css']
})
export class ClothItemComponent implements OnInit {

  @Input() clothItem: Cloth;
  
  constructor(private clothService: ClothService) { 
  }

  ngOnInit() {
  }

  showDetailsFunction() {
    this.clothService.selectedCloth.emit(this.clothItem);
  }
}
