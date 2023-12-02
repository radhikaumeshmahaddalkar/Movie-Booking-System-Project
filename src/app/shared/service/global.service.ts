import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  baseURL="https://creepy-erin-whale.cyclic.app/"  //Url  http://localhost:3000/
  
  constructor(private http:HttpClient) { }             //https://creepy-erin-whale.cyclic.app/

  //Display table values
  getRecords(table:string){
    return this.http.get(this.baseURL + table)
  }

  //To get single record
  getRecord(table:string, id:any){
    const getURL=`${this.baseURL}${table}/${id}`
    return this.http.get(getURL)
  }

  deleteRecord(table:string, id:any){
    const delURL=`${this.baseURL}${table}/${id}`
    console.log("[DELETE URL]" + delURL)
    return this.http.delete(delURL)
  }

  addRecords(table:string, userData:any){
    return this.http.post(this.baseURL+ table,userData)
  }

  updateRecord(table:string,userData:any){
    const putURL=`${this.baseURL}${table}/${userData.id}`
    return this.http.put(putURL,userData)
  }

  //store the user in the sessionStorage
  signIn(user:string){
    sessionStorage.setItem("user_key",user)
  }

  //Remove the user from the sessionStorage
  signOut(){
    sessionStorage.removeItem("user_key")
  }

  
}
