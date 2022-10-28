import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizzers',
  templateUrl: './quizzers.component.html',
  styleUrls: ['./quizzers.component.css']
})
export class QuizzesComponent implements OnInit {
      quizzes$ = this.quizService.getQuizzes();
    
      constructor(private quizService: QuizService) { }
    
      ngOnInit(): void {
      }
    }