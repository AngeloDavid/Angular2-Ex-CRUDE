import { Component, OnInit } from '@angular/core';
import {Comic} from "../../interfaz/comic.interfaz";
import {ComicService} from "../../services/comic.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html'
})
export class ComicComponent implements OnInit {


  private idOpcion:string;
  private cssOpcion:string;
  private txtOpcion:string;

  private Comic:Comic={
    titulo:"",
    fecha:"",
    Editorial:"",
    puntuacion:0,
    url:"",
    precio:0,
    cantidad:0,
    total:0,
    tipo:"ComicsType"
  };

  constructor( private _CS:ComicService,private _router:Router, private _act:ActivatedRoute) {
    this._act.params.subscribe(
      parms=>{
        this.idOpcion=parms['id'];
        if(this.idOpcion!=='nuevo'){
          this._CS.getComic(this.idOpcion).subscribe(resp=>{
            this.Comic=resp;
          });
          this.cssOpcion ="fa-pencil";
          this.txtOpcion ="Guardar Cambios";
        }else{
          this.cssOpcion ="fa-floppy-o";
          this.txtOpcion ="Añadir Comic";

        }
      }
    );
  }

  ngOnInit() {
  }

  CalStock(){
       this.Comic.total=this.Comic.precio*this.Comic.cantidad;
  }

guardar(){
    if(this.idOpcion=='nuevo'){
      this._CS.addComic(this.Comic).subscribe(
        data => {
          console.log(data.name);
          this._router.navigate(['/comic', data.name]);
        },
        error => {
          console.log(error);
        }
      );
    } else{
        this._CS.editComic(this.Comic,this.idOpcion).subscribe(
          data => {
            console.log(data.name);
            this._router.navigate(['/comics']);
          },
          error => {
            console.log(error);
          }
        );
    }

}
limpiar(){
  this.Comic ={
    titulo:"",
    fecha:"",
    Editorial:"",
    puntuacion:0,
    url:"",
    precio:0,
    cantidad:0,
    total:0,
    tipo:"ComicsType"
  };

}

}
