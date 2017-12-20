import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public task: Task = new Task();
  
  constructor() { }

  ngOnInit() { }

}

export class Task {
    public description: string;
    public location: string;
}