import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { OetTestComponent } from './oet-test/oet-test.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  {
    path: 'features',
    component: FeaturesComponent,
    data: { title: 'Features' }
  },
  {
    path: 'oettest',
    component: OetTestComponent,
    data: { title: 'OET Test' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {}
