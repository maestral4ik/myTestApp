import { Component, OnInit, Input } from '@angular/core';
import { ErrorMessage } from '../error/error.interface';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  @Input()
  error: ErrorMessage;

  displayClass: string;
  constructor() { }

  ngOnInit() {
  }

}
