import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  public urlUsuario = "http://localhost:8000/usuario";

  constructor(public http: HttpClient) {
    
  }

  public mostrar():Observable<any>{
    return this.http.get(this.urlUsuario);  
  }

  public salvar(usuario):Observable<any>{
    return this.http.post(this.urlUsuario, usuario);
  }

  public deletar(id):Observable<any>{
    return this.http.delete(this.urlUsuario + "/" + id);    
  }

}
