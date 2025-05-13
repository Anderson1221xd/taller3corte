import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-registro-card',
  templateUrl: './registro-card.component.html',
  styleUrls: ['./registro-card.component.scss'],
})
export class RegistroCardComponent {
  @Input() registro: any;
}
