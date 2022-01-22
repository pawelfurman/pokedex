import { HttpClient } from "@angular/common/http"
import { Injectable } from '@angular/core'
import { map, Observable } from "rxjs"
import { ApiPokemonListResponse, StorePokemonListEntry } from "../pokemon.types"
import { PokemonListSearchParams } from "../store/reducers/pokemon-list.reducer"
import { apiPokemonListConverter } from "./page-pokemon-list.converter"

@Injectable({
  providedIn: 'root'
})
export class PagePokemonListService {

  constructor(private http: HttpClient) { }

  getPokemons(params: Partial<PokemonListSearchParams> = { limit: 10, offset: 0 }): Observable<StorePokemonListEntry> {
    return this.http.get<ApiPokemonListResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${params.limit}&offset=${params.offset}`).pipe(
      map(apiPokemonListConverter)
    )
  }
}
