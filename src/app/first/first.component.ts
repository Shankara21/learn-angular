import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  title = 'Learn Angular';
  condition: boolean = true;
  testStyle: any = "text-3xl text-orange-500";
}
