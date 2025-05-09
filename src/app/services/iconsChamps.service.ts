import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Champ, Passive, Spell } from '../models/modelsChamp.interface';

@Injectable({
  providedIn: 'root',
})
export class IconsChamps {
  private version = '14.23.1';
  private champFilter!: Champ;

  constructor(private http: HttpClient) {}

  passiveImg(champ: Champ): any {
    return `https://ddragon.leagueoflegends.com/cdn/14.23.1/img/passive/${champ.passive.image.full}`;
  }
  skillsImg(champ: Champ): any {
    return champ.spells.map(
      (e) =>
        `https://ddragon.leagueoflegends.com/cdn/14.23.1/img/spell/${e.id}.png`
    );
  }
}
