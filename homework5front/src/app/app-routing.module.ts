import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { TeamComponent } from './components/team/team.component';
import { TrainerComponent } from './components/trainer/trainer.component';

const routes: Routes = [
     {
     path: '',
     component: TeamComponent,
    },
    {
     path: '/pokedex',
     component: PokedexComponent,
   },
    {
     path: '/trainer',
     component: TrainerComponent,
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




