import { Component, Input, OnInit } from '@angular/core';
import { ChampsService } from '../../services/champs.service';
import { DataChamp } from '../../models/dataChamps.interface';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  champsService = inject(ChampsService);

  constructor(private router: Router) {}

  goToDetail(champId: string): void {
    this.router.navigate(['/detail', champId]);
  }
}
