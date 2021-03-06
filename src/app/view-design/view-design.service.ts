import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ViewDesignService {
    baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getDesigns() {
        return this.http.get(this.baseUrl+'/getDesigns');
    }

}