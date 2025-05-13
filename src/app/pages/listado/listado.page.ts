import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  standalone: false,
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  registros: any[] = [];

  constructor(private firebaseService: FirebaseService) {}

  async ngOnInit() {
    this.registros = await this.firebaseService.obtenerRegistros();
  }
}
