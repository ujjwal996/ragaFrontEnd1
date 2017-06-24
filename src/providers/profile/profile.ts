import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProfileProvider {

  constructor(public http: Http , public db: AngularFireDatabase) {
    console.log('Hello ProfileProvider Provider');
    
  }

  getClientInfo():FirebaseListObservable<any>{
    return this.db.list("data/clients/");
  }

}
