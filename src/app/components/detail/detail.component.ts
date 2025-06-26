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
  champion!: Champ;
  passiva!: string; 
  skills!: string[];  

  backgroundImage: string = ''; 
  selectedSkin: number = 0; 

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

        if (this.champion.skins && this.champion.skins.length > 0) {
          this.selectSkin(this.champion.skins[0].num);
        } else {
          this.backgroundImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.champion.id}_0.jpg`;
          this.selectedSkin = 0; 
        }

        this.passiva = this.iconsSkills.passiveImg(this.champion);
        this.skills = this.iconsSkills.skillsImg(this.champion);
      });
    }
  }


  selectSkin(skinNum: number): void {
    this.selectedSkin = skinNum; 
    this.backgroundImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.champion.id}_${skinNum}.jpg`;
  }

  miFuncion(imgId: string): void {
    this.activeButtonId = this.activeButtonId === imgId ? null : imgId;
  }
}