import { Component, OnInit } from '@angular/core';
import {Comic} from "../../interfaz/comic.interfaz";
import {ComicService} from "../../services/comic.service";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styles: []
})
export class ComicsComponent implements OnInit {

  private Comics:Comic[]=[];
  private Total:number=0;
  private Cants:number=0;
  private PU:number=0;



  constructor(private _CS:ComicService) {
    this._CS.allComic().subscribe(
      resp=>{
        for(let key in resp){
          let ComicR=resp[key];
          if(ComicR.tipo=="ComicsType"){
            ComicR.key=key;
            console.log(Number(ComicR.precio));
            this.Total+= Number(ComicR.total);
            this.PU+=Number(ComicR.precio);
            this.Cants+= Number(ComicR.cantidad);
            console.log(this.Total);
            console.log(this.PU);
            console.log(this.Cants);
            this.Comics.push(ComicR);
          }
        }
      }
    );
  }


  ngOnInit() {
  }

  eliminar(id:string,i:number){
    this._CS.deleteComic(id).subscribe(
        resp=>{
          this.Comics.splice(i,1);
          console.log(id);
          console.log(i);
        }
    );

  }

}
