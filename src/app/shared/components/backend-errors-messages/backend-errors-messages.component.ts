import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../types/backend-errors.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-backend-errors-messages',
  templateUrl: './backend-errors-messages.component.html',
  styleUrls: ['./backend-errors-messages.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class BackendErrorsMessagesComponent implements OnInit {
  @Input() backendErrors: BackendErrorsInterface = {}
  errorsMessages: string[]=[]
  ngOnInit(){
    this.errorsMessages=Object.keys(this.backendErrors).map((name:string)=>{
      const messages= this.backendErrors[name].join(' ')
      return `${name} ${messages}`
    })
  }
}
