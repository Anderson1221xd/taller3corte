import { Component, OnInit } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  orderBy,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Registro {
  id?: string;
  descripcion: string;
  fecha: any; // Firebase puede traerlo como Timestamp
  imagenUrl: string;
}

@Component({
  standalone: false,
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {
  registros$!: Observable<Registro[]>;

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    const registrosRef = collection(this.firestore, 'multimedia');
    const q = query(registrosRef, orderBy('fecha', 'desc'));
    this.registros$ = collectionData(q, { idField: 'id' }) as Observable<
      Registro[]
    >;
  }
}
