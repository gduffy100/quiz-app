import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuestionComponent } from './components/question/question.component';
import { TitleComponent } from './components/title/title.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizzersComponent } from './pages/quizzers/quizzers.component';
import { ScoreComponent } from './pages/score/score.component';


@NgModule({
  declarations: [
    QuestionComponent,
    TitleComponent,
    QuizComponent,
    QuizzersComponent,
    ScoreComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
	NgbModule,
	ReactiveFormsModule	
  ]
})
export class QuizModule { }
