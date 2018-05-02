import { Injectable } from "@angular/core";
import { Iproduct } from "./product";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';



@Injectable()

export class ProductService{

    handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }



    private _productUrl = './api/products/products.json';
constructor(private _http: HttpClient){

}


    getProducts(): Observable<Iproduct[]>{
 
        return this._http.get<Iproduct[]>(this._productUrl)
        .do(data => console.log('All ' + JSON.stringify(data)))
        .catch(this.handleError);
        

    }
}