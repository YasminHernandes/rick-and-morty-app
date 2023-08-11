import { CharacterService } from 'src/app/services/character.service'
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/Character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  
  characters: Character[] = []

  constructor(private charactersService: CharacterService) {}
  ngOnInit(): void {    
    this.getCharacters()
  }
  getCharacters(){
    this.charactersService.getCharacters().subscribe({
      next: response => {
        this.characters = response.results
      },
      error: error => `<h1>Erro ao carregar characters! ${error}</h1>`,
    })
  }
}