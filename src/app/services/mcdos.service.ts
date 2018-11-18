import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { environment } from "../../environments/environment";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import { forkJoin } from "../../../node_modules/rxjs/observable/forkJoin";
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class McdosService {

    private macdonaldApi = environment.macdonaldApi;
    constructor( protected http: Http) { } 
    //this service call backend to get list of Mcdonald's by state key
    public getMcdosByState(state: string): Observable<any> {
        return this.http.get(`${this.macdonaldApi}/state/${state}`)
            .map(response => response.json());
    }
    public handleError(error: Response) {
        return "erroress"
    }
}
