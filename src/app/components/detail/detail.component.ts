import { Component, OnInit } from '@angular/core';
import { ChampsService } from '../../services/champs.service';
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
  idNameImage!:string


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
      });
    }
  }
  miFuncion(imgId: string) {
    this.activeButtonId = this.activeButtonId === imgId ? null : imgId;
  }

  obtenerIdConVariable(id: string,name:string): void {
    this.idImg = id;
    this.idNameImage= name
  }
  get backgroundStyle(): string {

    return (this.idImg && this.idNameImage) 
    
    ? `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.idImg}_${this.idNameImage}.jpg`
     
    :`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.idImg}_${this.idNameImage}.jpg`
  }

  
}
