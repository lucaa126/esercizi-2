import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp1 } from './comp1/comp1';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Comp1,CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('comunic-comp');
  posts = [
    {
      titolo: 'titolo1',
      testo: 'esempio di testo1'
    },
    {
      titolo: 'titolo1',
      testo: 'esempio di testo2'
    },
    {
      titolo: 'titolo3',
      testo: 'esempio di testo3'
    }
  ];
}
