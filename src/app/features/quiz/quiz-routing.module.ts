import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';


const routes: Routes = [ { path: '', component: QuizzesComponent },
        { path: 'quiz/:id', component: QuizComponent },
        { path: 'quiz/:id/score', component: ScoreComponent },
			 {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
   ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
