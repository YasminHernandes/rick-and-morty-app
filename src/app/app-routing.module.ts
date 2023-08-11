import { CharacterComponent } from './components/character/character.component'
import { CharactersListComponent } from './components/character-list/character-list.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CharactersListComponent
  },
  {
    path: 'character/:id',
    component: CharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
