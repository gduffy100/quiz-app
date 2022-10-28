import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

  export class QuestionComponent {
      @Input() question = {} as Question;
      @Input() number = 0;
    
      @Output() setAnswer = new EventEmitter<UserAnswer>();
    
      selectedAnswer = '';
    
      constructor() { }
    
      pickAnswer(id: number, answer: string, value: string) {
        this.selectedAnswer = `[${answer}] ${value}`;
        this.setAnswer.emit({ questionId: id, value: answer });
      }
    }
