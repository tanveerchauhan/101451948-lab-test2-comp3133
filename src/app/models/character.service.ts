import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from './character.model'; // correct relative path

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://hp-api.onrender.com/api/characters';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }

  getCharacterById(id: string): Observable<Character | undefined> {
    return this.getAllCharacters().pipe(
      map((characters: Character[]) => characters.find((c: Character) => c.id === id))
    );
  }
}
