import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeroModule } from './hero/hero.module';
import { ListModule } from './list/list.module';

@NgModule({
  declarations: [],

  exports: [HeroModule, ListModule],
  imports: [CommonModule, HeroModule, ListModule],
  
})
export class HeroesModule {}
