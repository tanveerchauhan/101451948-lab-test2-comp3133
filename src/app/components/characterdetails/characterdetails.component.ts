import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../models/character.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule
  ],
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit {
  route = inject(ActivatedRoute);
  characterService = inject(CharacterService);

  character: Character | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Route ID:', id);

    if (id) {
      this.characterService.getAllCharacters().subscribe((data) => {
        this.character = data.find(c => c.id === id);
        console.log('Found character:', this.character);
      });
    }
  }
}
