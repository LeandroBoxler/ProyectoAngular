import { Component, OnInit } from '@angular/core';
import { ChampsService } from '../../services/champs.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Champ } from '../../models/modelsChamp.interface';
import { IconsChamps } from '../../services/iconsChamps.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  cambioDeFondo: boolean = true;
  champion!: Champ;
  viewPassiveChamp!: string;
  passiva!: string;
  skills!: any;
  champId: any;
  idImg!: string;
  stats = [
    { name: 'Fuerza', value: 70 }, // 70% de altura
    { name: 'Agilidad', value: 50 }, // 50% de altura
    { name: 'Inteligencia', value: 90 }, // 90% de altura
  ];

  activeButtonId: string | null = null;

  constructor(
    private serviceChamp: ChampsService,
    private route: ActivatedRoute,
    private iconsSkills: IconsChamps
  ) {}
  ngOnInit(): void {
    const champId = this.route.snapshot.paramMap.get('id');
    if (champId) {
      this.serviceChamp.getChamp(champId).subscribe((result) => {
        this.champion = result;
        this.skills = this.iconsSkills.skillsImg(this.champion);
        this.passiva = this.iconsSkills.passiveImg(this.champion);
        console.log(this.champion.stats);
      });
    }
  }
  miFuncion(imgId: string) {
    this.activeButtonId = this.activeButtonId === imgId ? null : imgId;
  }

  obtenerIdConVariable(id: string): void {
    this.idImg = id;
    console.log('ID de la imagen:', id);
  }
  get backgroundStyle(): string {
    return this.idImg ? `url(${this.idImg})` : 'black';
  }
}
