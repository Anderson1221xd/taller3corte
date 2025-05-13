import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SupabaseService } from '../services/supabase.service'; 

@NgModule({
  providers: [
    SupabaseService,
 
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
