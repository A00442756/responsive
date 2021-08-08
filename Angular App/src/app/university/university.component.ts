import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { University } from '../models/university.model';

@Component({
    selector: 'app-university',
    templateUrl: './university.component.html',
    styleUrls: ['./university.component.css'],
})
export class UniversityComponent {
    data;
    deleteBtn: boolean;
    displayRecords: boolean;
    constructor(private apiService: ApiService) {
        this.data = [
            // {
            //     name: '',
            //     address: '',
            //     phone: '',
            // },
            new University('', '', ''),
        ];
        this.deleteBtn = true;
        this.displayRecords = false;
    }

    log(x) {
        console.log(x);
    }

    getUniversity() {
        this.apiService.getUniversity().subscribe((data) => {
            console.log(data);
            this.data = data;
        });
    }

    saveUniversity(university) {
        const uni = {
            name: university.form.value.universityName,
            address: university.form.value.universityAddress,
            phone: university.form.value.universityPhone,
        };
        console.log(uni);
        this.apiService.saveUniversity(uni).subscribe((data) => {
            // alert(uni.name + " added")
            alert(`${uni.name} added`);
        });
    }

    deleteUniversity() {
        const uni = {
            name: (<HTMLInputElement>document.getElementById('universityName'))
                .value,
            address: (<HTMLInputElement>(
                document.getElementById('universityAddress')
            )).value,
            phone: (<HTMLInputElement>(
                document.getElementById('universityPhone')
            )).value,
        };
        console.log(uni);
        this.apiService.deleteUniversity(uni).subscribe((data) => {
            // alert(uni.name + " added")
            if (data && data['ok']) {
                alert(`${uni.name} deleted`);
            } else {
                alert('Something went wrong');
            }
        });
    }

    validate(e) {
        if (
            (<HTMLInputElement>document.getElementById('universityName'))
                .value != ''
        ) {
            this.deleteBtn = false;
        } else {
            this.deleteBtn = true;
        }
        console.log(e);
    }
}
