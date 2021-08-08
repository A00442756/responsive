import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(public http: HttpClient) {}

    getUniversity() {
        return this.http.get('http://dev.cs.smu.ca:8150/university');
    }

    saveUniversity(university) {
        return this.http.post(
            'http://dev.cs.smu.ca:8150/university',
            university
        );
    }

    deleteUniversity(university) {
        return this.http.post(
            'http://dev.cs.smu.ca:8150/university/delete',
            university
        );
    }
}
