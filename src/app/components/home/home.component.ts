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
export class HomeComponent implements OnInit{
  champsService = inject(ChampsService);
  typeChamps:string[]=["Fighter","Assassin","Tank","Support","Mage","Marksman"]

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  

  goToDetail(champId: string): void {
    this.router.navigate(['/detail', champId]);
  }

}
