import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {
  artista:any = {};
  tracks:any[]=[];
  loading:boolean;
  constructor(private activatedRoute:ActivatedRoute,private spotify:SpotifyService) { 
    this.activatedRoute.params.subscribe( params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  ngOnInit(): void {
  }
  getArtista(id:string){
    this.loading=true;
    this.spotify.getArtista(id).subscribe( data =>{
      console.log(data);
      this.artista = data;
      this.loading=false;
    })
  }
  getTopTracks(id:string){
    this.spotify.getTopTraks(id).subscribe( data => {
      console.log(data)
      this.tracks = data;
    })
  }
}
