import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  getFirestore,
  getDocs,
} from 'firebase/firestore'; 
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private db: Firestore;

  constructor() {
    const app = initializeApp(environment.firebaseConfig);
    this.db = getFirestore(app); 
  }

  async guardarRegistro(descripcion: string, imagenUrl: string, fecha: string) {
    const registrosRef = collection(this.db, 'multimedia');
    try {
      const docRef = await addDoc(registrosRef, {
        descripcion,
        imagenUrl,
        fecha,
      });
      console.log('Documento guardado con ID: ', docRef.id);
    } catch (e) {
      console.error('Error al guardar registro en Firestore:', e);
    }
  }
  async obtenerRegistros() {
    const registrosRef = collection(this.db, 'multimedia');
    const snapshot = await getDocs(registrosRef);
    return snapshot.docs.map((doc) => doc.data());
  }
}
