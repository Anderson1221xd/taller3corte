import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SupabaseService } from '../services/supabase.service'; // Mueve tu servicio aquí

@NgModule({
  providers: [
    SupabaseService,
    // Otros servicios globales aquí
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule)
      throw new Error(
        'CoreModule ya ha sido cargado. Solo debe importarse en AppModule.'
      );
  }
}
