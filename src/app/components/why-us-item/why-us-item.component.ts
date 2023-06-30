import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-why-us-item',
  templateUrl: './why-us-item.component.html',
  styleUrls: ['./why-us-item.component.scss'],
})
export class WhyUsItemComponent {
  @Input() img: string;
  @Input() title: string;
  @Input() description: string;
}
