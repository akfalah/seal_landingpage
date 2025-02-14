import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-page/home.component';
import { TalentComponent } from './pages/talent-page/talent.component';
import { TalentPoolComponent } from './pages/talent-page/pages/talent-pool/talent-pool.component';
import { TalentDetailComponent } from './pages/talent-page/pages/talent-detail/talent-detail.component';

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
