import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Quiz } from '../models/quiz';
import { Score } from '../models/score';
import { UserAnswer } from '../models/user-answer';

@Injectable({
  providedIn: 'root'
})

/*
export class QuizService {

  constructor() { }
}*/

export default class QuizService {
      private url = `${environment.strapiUrl}/quizzes`;
    
      constructor(private http: HttpClient) { }
    
      getQuizzes() {
        return this.http.get<Quiz[]>(this.url);
      }
      getQuiz(id: number) {
        return this.http.get<Quiz>(`${this.url}/${id}`);
      }
      score(id: number, answers: UserAnswer[]) {
        return this.http.post<Score>(`${this.url}/${id}/score`, answers);
      }
    } 
