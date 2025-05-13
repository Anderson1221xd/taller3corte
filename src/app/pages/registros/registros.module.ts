import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonicModule } from '@ionic/angular';

import { RegistrosPageRoutingModule } from './registros-routing.module';

import { RegistrosPage } from './registros.page';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrosPageRoutingModule,
  ],
  declarations: [RegistrosPage],
})
export class RegistrosPageModule {}
