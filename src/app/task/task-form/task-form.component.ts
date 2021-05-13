import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  task: Task = new Task();
  title: string = "Nova Tarefa";

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private taskService: TaskService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.task = this.taskService.getbyId(parseInt(id));
      this.title = "Alterando Tarefa";
    }
  }

  onSubmit() {
    console.log(this.task);
    this.taskService.save(this.task);
    this.router.navigate(['']);
  }
}