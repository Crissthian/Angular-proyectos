import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'pudge'
  constructor() {
    setTimeout(() => (this.nombre = 'mirana'), 3000)
  }
}
