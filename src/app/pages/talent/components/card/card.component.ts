import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Talent } from '../../../../talent/talent';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
 @Input() talent!: Talent;
}
