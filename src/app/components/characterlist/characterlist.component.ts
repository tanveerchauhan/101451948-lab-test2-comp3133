import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CharacterService } from '../../models/character.service';
import { Character } from '../../models/character.model';
import { CharacterfilterComponent } from '../characterfilter/characterfilter.component';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatProgressBarModule,
    CharacterfilterComponent  
  ],
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnInit {
  characters: Character[] = [];
  filteredCharacters: Character[] = [];
  loading = true;

  constructor(
    private characterService: CharacterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe((data) => {
      console.log("API Response:", data);
      const filtered = data.filter(c => c.image);
      this.characters = filtered;
  this.filteredCharacters = filtered;
  this.loading = false;
    });
  }

  filterByHouse(house: string) {
    if (!house) {
      this.filteredCharacters = this.characters;
    } else {
      this.filteredCharacters = this.characters.filter(c => c.house === house);
    }
  }

  


  goToDetails(character: Character) {
    this.router.navigate(['/character', character.id]);
  }
}
