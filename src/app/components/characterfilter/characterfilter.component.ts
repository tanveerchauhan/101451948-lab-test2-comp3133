import { Component, Output, EventEmitter } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [CommonModule, MatSelectModule],
  templateUrl: './characterfilter.component.html',
  styleUrls: ['./characterfilter.component.css']
})
export class CharacterfilterComponent {
  @Output() houseSelected = new EventEmitter<string>();

  houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

  onHouseChange(house: string) {
    this.houseSelected.emit(house);
  }
}
