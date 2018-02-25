import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from 'ionic-angular';


@Injectable()
export class PeopleProvider {
 userInfo = {};
  

  // TODO move this to a CONST files
  API_ENDPOINT = 'http://159.65.75.228:3000';

  constructor(public http : HttpClient, public events: Events) {  }

 

  
  newRegister(person){
    //todo: move this model to a models file
    let status = {
      mongo: 0,
      connection: 0,
      userInput: 0
    };

    this.http.post<any>(this.API_ENDPOINT + '/cadastro', person).subscribe((data) => {      
      if(!data) {
        //TODO check if its even possible to get here...
        console.log('Got no return data...');
      }
      
      // handles mongodb error
      if(data.hasOwnProperty('code') == true) {
        if(data.code = 11000){
          status.mongo = 1;
        } else {
          status.mongo = 1;
          console.log('Unhandled mongo error> ' + data.code);
        }
      } 
      
      // no mongodb error
      else {
        status.mongo = 0;
      }

      this.events.publish('registerStatus', status);
    }, (err) => {
      console.log(err.status);
      // 0 means no connection
      // but our page treats '0' as sucess
      // TODO: re-name errors numbers
      if(err.status != 0) status.connection = err.status;
      else status.connection = -1;

      this.events.publish('registerStatus', status);
    });

  }

  getUsuarioAtivo(){
    return this.userAtual;
  }

  setCurrentUser(user) {
    this.userAtual = user;
  }

}
