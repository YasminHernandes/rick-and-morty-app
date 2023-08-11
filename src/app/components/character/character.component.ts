import { EpisodeService } from './../../services/episode.service'
import { Episode } from './../../models/Episode'
import { Character } from 'src/app/models/Character'
import { CharacterService } from 'src/app/services/character.service'
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  handleEpisodes() {
    const episodeList = document.querySelectorAll('.episodes')
    episodeList?.forEach(ep => {
      ep.classList.toggle('none')
    })
  }

  constructor(private characterService: CharacterService, private episodeService: EpisodeService, public route: ActivatedRoute) { }
  
  character?: Character
  episodes: Episode[] = []
  id: string | null

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getCharacter()
    
  }

  getCharacter() {
    this.characterService.getCharacter(this.id).subscribe({
      next: response => {
        this.character = response
        this.character?.episode.forEach(ep => {
          const idEpisode = ep.replace("https://rickandmortyapi.com/api/episode/", '')
          this.getEpisode(idEpisode)
        })
      }
    })
  }

  getEpisode(idEpisode: string) {
    this.episodeService.getEpisode(idEpisode).subscribe({
      next: response => this.episodes.push(response)
    })
  }
}