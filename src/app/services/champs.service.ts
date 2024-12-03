import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map, Observable } from 'rxjs';
import { DataChamp } from '../models/dataChamps.interface';
import { Champ } from '../models/modelsChamp.interface';
@Injectable({
  providedIn: 'root',
})
export class ChampsService {
  champs!: DataChamp[];
  search: string = '';
  private version = '14.23.1';
  constructor(private http: HttpClient) {
    this.loadChamps();
  }

  loadChamps() {
    this.http
      .get(
        `https://ddragon.leagueoflegends.com/cdn/${this.version}/data/es_AR/champion.json`
      )
      .subscribe({
        next: (response: any) => {
          this.champs = Object.values(response['data']);
        },
      });
  }

  //TRAE DATOS DE CAMPEONES FILTRADOS POR ID
  get filteredChamps(): DataChamp[] {
    const pattern = new RegExp(`(${this.search})`, 'i');
    return this.champs.filter((e) => pattern.test(e.name));
  }

  getChamp(championId: string): Observable<Champ> {
    const url = `https://ddragon.leagueoflegends.com/cdn/${this.version}/data/es_AR/champion/${championId}.json`;
    return this.http.get(url).pipe(
      map((response: any) => {
        const champInfo = response.data[championId];
        return champInfo as Champ;
      })
    );
  }
}
