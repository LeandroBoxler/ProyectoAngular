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
  typeChamps!:string
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

  //CODIGO QUE TERMINE NO USANDO
  // get filteredChamps(): DataChamp[] {
   
  //   const pattern = new RegExp(`(${this.search})`, 'i');
  //   return this.champs.filter((e) => pattern.test(e.name));
  // }

  
  // get filteredChampsType(): DataChamp[] {
    
  //   if (!this.typeChamps) return this.champs; 
  //   return this.champs.filter((e) => Array.isArray(e.tags) && e.tags.includes(this.typeChamps));
  // }

  SeachChange(value: string) {
    this.search = value;
    if (this.search) {
      this.typeChamps = "";  
    }
  }

  TypeChampChange(value: string) {
    this.typeChamps = value;
    if (this.typeChamps) {
      this.search = ""
    }
  }






  get filterChampsHome(): DataChamp[] {

    let filtered = this.champs;

    if (this.search) {
      const pattern = new RegExp(`(${this.search})`, 'i');
      filtered = filtered.filter((champ) => pattern.test(champ.name));
    }

    if (this.typeChamps) {
      filtered = filtered.filter((champ) =>
        Array.isArray(champ.tags) && champ.tags.includes(this.typeChamps)
      );
    }

    return filtered;
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
