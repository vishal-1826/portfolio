import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
  myName: string = 'Vishal Kumar Verma';
  jobSummary: string = "txt";
  email: string = 'vishalkverma26@gmail.com';
  phoneNumber: string = '9889907138';
  linkedinLink: string =
    'https://www.linkedin.com/in/vishal-kumar-verma-246289198/';
  fbLink: string = 'https://www.facebook.com/yourprofile/';
  angularVersion: string = 'X.X.X'; // Replace with your Angular version

  constructor() {}
}
