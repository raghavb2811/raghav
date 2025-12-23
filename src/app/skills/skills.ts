import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {

  // skills = signal<string[]>(["angular","python","html","T-SQL","SSIS","SSRS","Database Administration"]);
  skills = ["angular","python","html","T-SQL","SSIS","SSRS","Database Administration"];

}
