import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/Rx';
import {Comic} from "../interfaz/comic.interfaz";

@Injectable()
export class ComicService {
  //BDDComicPersonal="https://pokeapp-af-tp.firebaseio.com/pokeapp-af-tp";
  BDDComic="https://datosapp-a04df.firebaseio.com/pokemon"
  constructor( private _http:Http) {

  }

  addComic(newComic:Comic){
    let body=JSON.stringify(newComic);
    console.log(body);
    let headers1=new Headers({
      'Content-type': 'application/json'
    });

    return this._http.post(`${this.BDDComic}.json`,body,{headers:headers1})
      .map(res=>{
        console.log("Ingresando datos");
        console.log(res.json());
        return  res.json();
      });
  }
  editComic(comicEdit:Comic,id:string){
    let body=JSON.stringify(comicEdit);
    console.log(body);
    let headers1=new Headers({
      'Content-type': 'application/json'
    });

    let url_edit:string=`${this.BDDComic}/${id}.json`;

    return this._http.put(url_edit, body, {headers: headers1}).map(
      resultado => {
        return resultado.json();
      }
    );
  }
  deleteComic(id:string){
    let url_delete:string=`${this.BDDComic}/${id}.json`;

    return this._http.delete(url_delete).map(
      resultado => {
        return resultado.json();
      }
    );
  }

  getComic(id:string){
    let url_get:string=`${this.BDDComic}/${id}.json`;

    return this._http.get(url_get).map(
      resultado => {
        return resultado.json();
      }
    );
  }

  allComic(){
    return this._http.get(`${this.BDDComic}.json`).map(
      resultado => {
        return resultado.json();
      }
    );
  }


}
