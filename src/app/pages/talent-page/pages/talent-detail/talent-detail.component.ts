import { Component, Input, OnInit } from '@angular/core';
import { Talent } from '../../../../talent/talent';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TalentService } from '../../../../talent/talent.service';
import { BreadcrumbComponent } from "../../../../shared/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-talent-detail',
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './talent-detail.component.html',
  styleUrl: './talent-detail.component.css',
})
export class TalentDetailComponent implements OnInit {
  @Input() talent!: Talent | undefined;

  constructor(
    private route: ActivatedRoute,
    private talentService: TalentService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.talent = this.talentService.getTalentById(id);
    }
  }
}
