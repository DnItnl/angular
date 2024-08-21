import { Component, Input, OnInit } from '@angular/core';
import { MessageI } from '../../../../shared/models/message.interface';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent implements OnInit {

  @Input() message!: MessageI;

  constructor() { }

  ngOnInit(): void {
  }

}