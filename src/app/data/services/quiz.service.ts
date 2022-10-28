import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/*
export class QuizService {

  constructor() { }
}*/

export class QuizService {
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