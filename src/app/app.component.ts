import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learn Angular';
  // use ngModel
  name: String = "Angular";
  condition: boolean = true;
  testStyle: any = "text-3xl text-orange-500";
  // isFirstComponent = true;

  isFirstComponent = window.location.pathname === '/first-component';

}
