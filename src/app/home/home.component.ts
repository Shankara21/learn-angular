import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Learn Angular';
  condition: boolean = true;
  testStyle: any = "text-3xl text-orange-500";
  show: boolean = true;
  onClick() {
    this.show = !this.show;
  }
  test: any

  // two way binding

  @Input() size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();


  dec() { this.resize(-1); }
  inc() { this.resize(+1); }
  fontSizePx = 16;
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
  mySwitch: any

  structural: boolean = true;
  structure = () => {
    this.structural = !this.structural;
  }
  username: any;
  email: any;
  color: any
  changeColor = () => {
    this.color = `bg-${this.color}`;
  }
  // ngFor
  items = [
    { name: 'Angular', url: 'https://angular.io/', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png' },
    { name: 'React', url: 'https://reactjs.org/', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
    { name: 'Vue', url: 'https://vuejs.org/', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png' },
  ];

  // date pipe
  date = new Date();
  // currency pipe
  currency = 1000000;
  // json pipe
  json = {
    name: 'Angular',
    url: 'https://angular.io/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
  }
  // slice pipe
  slice = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod?';
  // decimal pipe
  decimal = 0.123456789;
  // percent pipe
  percent = 0.123456789;
  // lowercase pipe
  lowercase = 'LOREM IPSUM DOLOR SIT AMET';
  // uppercase pipe
  uppercase = 'lorem ipsum dolor sit amet';
  // titlecase pipe
  titlecase = 'lorem ipsum dolor sit amet';

  // component interactions 
  @Input() tanggal: Date = new Date();
  @Output() tanggalChange = new EventEmitter<Date>();

  next() {
    this.tanggal = new Date(this.tanggal.getTime() + 1000 * 60 * 60 * 24);
    this.tanggalChange.emit(this.tanggal);
  }
  prev() {
    this.tanggal = new Date(this.tanggal.getTime() - 1000 * 60 * 60 * 24);
    this.tanggalChange.emit(this.tanggal);
  }

}
