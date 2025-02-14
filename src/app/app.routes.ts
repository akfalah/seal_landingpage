import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TalentComponent } from './pages/talent/talent.component';
import { TalentPoolComponent } from './pages/talent/pages/talent-pool/talent-pool.component';
import { TalentDetailComponent } from './pages/talent/pages/talent-detail/talent-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { breadcrumb: 'Talent Pool' },
  },
  {
    path: 'talent-pool',
    component: TalentComponent,
    data: { breadcrumb: 'Talent Pool' },
    children: [
      {
        path: '',
        component: TalentPoolComponent,
        data: { breadcrumb: 'Talent Pool' },
      },
      {
        path: ':id',
        component: TalentDetailComponent,
        data: { breadcrumb: 'Descriptions' },
      },
    ],
  },
];
