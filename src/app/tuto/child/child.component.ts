import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public task: Task;

  constructor() { }

  ngOnInit() {
  }

}
