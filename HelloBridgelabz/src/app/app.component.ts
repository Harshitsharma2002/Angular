import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloBridgelabz';
  logoUrl= '..assets\download (1).jpg';
  websiteURL= 'https://www.bridgelabz.com/';
}
