import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient:HttpClient) {
    console.log('servicio listo');
   }
   getQuery(query:string){
     const url = `https://api.spotify.com/v1/${query}`;
     const headers = new HttpHeaders({
      'Authorization':'Bearer BQBkAGX_WuacU0kSDijmD8OIs20MtpeMFcoIdKMksh-ZUOR0k1K8pbbPIrce1DU5kqeelC3WEO2Nycfiojs'
    })
    return this.httpClient.get(url,{headers});
   }
   getNewReleases() {
     return this.getQuery('browse/new-releases').pipe(map( data => data['albums'].items ));
   }
   getArtistas(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&offset=0&limit=15`).pipe( map( data => data['artists'].items ));
   }
   getArtista(id:string){
    return this.getQuery(`artists/${id}`) //.pipe( map( data => data['artists'].items ));
   }
   getTopTraks(id:string){
     return this.getQuery(`artists/${id}/top-tracks?market=MX`).pipe( map( data => data['tracks'] ));
   }
}
