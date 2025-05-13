import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroCardComponent } from './components/registro-card/registro-card.component';
// Aquí puedes agregar componentes/pipes/directivas reutilizables
@NgModule({
  declarations: [
    RegistroCardComponent,
    // Ej: CustomCardComponent, ImagePreviewPipe...
  ],
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RegistroCardComponent,
    // Y los componentes que declares
  ],
})
export class SharedModule {}
