import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
 export class ScoreComponent implements OnInit {
      score$: Observable<Score> | undefined;
      quizId = 0;
    
      constructor(private route: ActivatedRoute, private quizService: QuizService) { }
      
    ngOnInit(): void {
        this.score$ = this.route.paramMap
          .pipe(
            switchMap(params => {
              const state = window.history.state;
              this.quizId = Number(params.get('id'));
    
              let reqBody: UserAnswer[] = [];
    
              for (const [qstId, answ] of Object.entries(state)) {
                if (typeof answ === 'string') {
                  reqBody.push({ questionId: Number(qstId), value: answ });
                }
              }
    
              return iif(() => this.quizId > 0 && reqBody.length > 0, this.quizService.score(this.quizId, reqBody));
            })
          );
      }
    }