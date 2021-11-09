import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Task } from '../Task';
// import { TASKS } from "../mock-tasks";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>
  {
    // const tasks =  of(TASKS);
    // return tasks;

    return this.http.get<Task[]>(this.apiURL);
  }

  deleteTask(task: Task): Observable<Task>
  {
    const url = `${this.apiURL}/${task.id}`;
    // console.log(url);
    return this.http.delete<Task>(url);
  }
}
