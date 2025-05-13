import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private supabaseUrl = 'https://unfhhqxfplhjytupvucj.supabase.co';
  private supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuZmhocXhmcGxoanl0dXB2dWNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNjM0ODIsImV4cCI6MjA2MjYzOTQ4Mn0.uqmiHNVSy5dfcdv9nOWKCx71LskymBlEm4H6DAFWinw';
  private bucket = 'imagenes';

  private supabase = createClient(this.supabaseUrl, this.supabaseKey);

  async subirImagen(nombre: string, base64: string): Promise<string> {
    const { data, error } = await this.supabase.storage
      .from(this.bucket)
      .upload(nombre, this.base64ToBlob(base64), {
        contentType: 'image/jpeg',
      });

    if (error) throw error;

    return `${this.supabaseUrl}/storage/v1/object/public/${this.bucket}/${data?.path}`;
  }

  private base64ToBlob(base64Data: string): Blob {
    const byteCharacters = atob(base64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++)
        byteNumbers[i] = slice.charCodeAt(i);
      byteArrays.push(new Uint8Array(byteNumbers));
    }

    return new Blob(byteArrays, { type: 'image/jpeg' });
  }
}
