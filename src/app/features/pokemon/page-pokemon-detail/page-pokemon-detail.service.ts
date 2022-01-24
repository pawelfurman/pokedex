import { HttpClient } from "@angular/common/http"
import { Injectable } from '@angular/core'
import { map, Observable } from "rxjs"
import { environment } from "src/environments/environment"
import { ApiPokemonDetailResponse, StorePokemonDetailEntry } from "../pokemon.types"
import { apiPokemonDetailConverter } from "./page-pokemon-detail.converter"

@Injectable({
  providedIn: 'root'
})
export class PagePokemonDetailService {

  constructor(private http: HttpClient) { }


  getPokemonDetails(name: string): Observable<StorePokemonDetailEntry> {
    return this.http.get<ApiPokemonDetailResponse>(`${environment.api}/pokemon/${name}`).pipe(
      map(apiPokemonDetailConverter),
    )
  }
}
