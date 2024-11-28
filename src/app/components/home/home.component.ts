import { Component, OnInit } from '@angular/core';
import { ChampsService } from '../../services/champs.service';
import { DataChamp } from '../../models/dataChamps.interface';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  champs: DataChamp[] = new Array();
  champsAll = inject(ChampsService);

  constructor(private router:Router){}
  
  ngOnInit(): void {
    this.champsAll.loadChamps().subscribe({
      next: (res: any) => {
        this.champs = Object.values(res['data']);
        
      },
      error: (err) => {
        console.error('Error al cargar los campeones:', err);
      },
      complete: () => {
        console.log('Carga de campeones completada exitosamente.');
      },
    });
  }

  goToDetail(champId: string): void {
    this.router.navigate(['/detail', champId]);
  }

}
