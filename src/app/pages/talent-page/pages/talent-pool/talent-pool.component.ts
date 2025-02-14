import { Component, inject } from '@angular/core';
import { BreadcrumbComponent } from '../../../../shared/breadcrumb/breadcrumb.component';
import { CardComponent } from '../../components/card/card.component';
import { Talent } from '../../../../talent/talent';
import { TalentService } from '../../../../talent/talent.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-talent-pool',
  imports: [CommonModule, BreadcrumbComponent, CardComponent],
  templateUrl: './talent-pool.component.html',
  styleUrl: './talent-pool.component.css',
})
export class TalentPoolComponent {
  talents: Talent[] = [];
  talentsService: TalentService = inject(TalentService);

  constructor() {
    this.talents = this.talentsService.getAllTalents();
  }
}
