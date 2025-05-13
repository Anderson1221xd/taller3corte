import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Preferences } from '@capacitor/preferences';
import { SupabaseService } from '../services/supabase.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage implements OnInit {
  formulario: FormGroup;
  fotoBase64: string | null = null;
  fotoPreview: string | null = null;
  ultimosRegistros: any[] = []; 

  constructor(
    private fb: FormBuilder,
    private supabase: SupabaseService,
    private firebaseService: FirebaseService,
    private zone: NgZone
  ) {
    this.formulario = this.fb.group({
      descripcion: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.cargarRegistrosLocales();
  }

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 80,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt,
    });

    this.fotoBase64 = image.base64String!;
    this.fotoPreview = `data:image/jpeg;base64,${this.fotoBase64}`;
  }

  async guardarRegistro() {
    try {
      const descripcion = this.formulario.value.descripcion;
      const fecha = new Date().toISOString();

      const nombreArchivo = `img_${Date.now()}.jpg`;
      const urlImagen = await this.supabase.subirImagen(
        nombreArchivo,
        this.fotoBase64!
      );
      alert('Imagen subida correctamente:\n' + urlImagen);

      const registro = {
        descripcion,
        fecha,
        imagenUrl: urlImagen,
      };

      this.zone.run(async () => {
        await this.firebaseService.guardarRegistro(
          descripcion,
          urlImagen,
          fecha
        );
      });

      
      const previos = await Preferences.get({ key: 'registros' });
      let lista = previos.value ? JSON.parse(previos.value) : [];
      lista.unshift(registro);
      await Preferences.set({ key: 'registros', value: JSON.stringify(lista) });

    
      this.cargarRegistrosLocales();

    
      this.formulario.reset();
      this.fotoBase64 = null;
      this.fotoPreview = null;
    } catch (error) {
      alert('Error al guardar registro:\n' + error);
      console.error('Error al guardar registro:', error);
    }
  }

  async cargarRegistrosLocales() {
    const datos = await Preferences.get({ key: 'registros' });
    this.ultimosRegistros = datos.value
      ? JSON.parse(datos.value).slice(0, 3)
      : [];
  }
}
