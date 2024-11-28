import { Component, OnInit } from '@angular/core';
import { DataChamp } from '../../models/dataChamps.interface';
import { ChampsService } from '../../services/champs.service';


import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  champion: DataChamp[] = [];

  constructor(private serviceChamp: ChampsService,private route:ActivatedRoute) {}

  ngOnInit(): void {
    const champId = this.route.snapshot.paramMap.get('id');

    if(champId){
    this.serviceChamp.getChamp(champId).subscribe({
      next: (res: any) => {
        this.champion = Object.values(res['data']);
      },
      error: (err) => {
        console.error('Error al cargar los campeones:', err);
      },
      complete: () => {
        console.log(this.champion);
      },
    });
  }
  }
}
