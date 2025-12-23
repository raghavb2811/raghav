import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Skills } from './skills/skills';
import { Header } from './header/header';
import { Projects } from './projects/projects';
import { Experience } from './experience/experience';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Skills, Header,Projects,Experience],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('raghav_portfolio');
}
