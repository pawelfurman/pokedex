import { HttpClient } from "@angular/common/http"
import { Injectable } from '@angular/core'
import { map, Observable } from "rxjs"
import { ApiPokemonDetailResponse, StorePokemonDetailEntry } from "../pokemon.types"
import { apiPokemonDetailConverter } from "./page-pokemon-detail.converter"

@Injectable({
  providedIn: 'root'
})
export class PagePokemonDetailService {

  constructor(private http: HttpClient) { }


  getPokemonDetails(name: string): Observable<StorePokemonDetailEntry> {
    return this.http.get<ApiPokemonDetailResponse>(`https://pokeapi.co/api/v2/pokemon/${name}`).pipe(
      map(apiPokemonDetailConverter),
    )
  }
}
