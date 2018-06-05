import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import {ShoppingCartModule} from 'ng-shopping-cart';


import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { OetTestComponent } from './oet-test/oet-test.component';

@NgModule({
  imports: [SharedModule, StaticRoutingModule,  ShoppingCartModule],
  declarations: [AboutComponent, FeaturesComponent, OetTestComponent]
})
export class StaticModule {}
