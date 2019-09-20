import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobFamily } from './JobFamily';
import { Capability } from './Capability';
import { Band } from './Band';
import { Role } from './Role';
import { Observable, forkJoin } from 'rxjs';
import {User} from './user';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  mockUser: User;

  constructor(private http: HttpClient) {
    this.getAllFromDatabase();
    this.mockUser = new User('Test User',
        new Capability('A Random Capability'),
        new Role('A Random Role'),
        new Band('A random band'));
  }

  public getAllFromDatabase(): Observable<any[]> {
    let jobFamilies = this.getAllJobFamilies();
    let capabilities = this.getAllCapabilities();
    let bands = this.getAllBands();
    let roles = this.getAllRoles();
    return forkJoin(jobFamilies, capabilities, bands, roles);
  }

  public getAllJobFamilies() : Observable<JobFamily[]> {
    return this.http.get<JobFamily[]>('/api/families');
  }

  public getAllCapabilities() : Observable<Capability[]> {
    return this.http.get<Capability[]>('/api/capabilities');
  }

  public getAllBands() : Observable<Band[]> {
    return this.http.get<Band[]>('/api/bands');
  }

  public getAllRoles() : Observable<Role[]> {
    return this.http.get<Role[]>('/api/roles');
  }

  public getRole(id) : Observable<Role> {
    return this.http.get<Role>('/api/roles/' + id);
  }

  public getCapability(id) : Observable<Capability> {
    return this.http.get<Capability>('/api/capabilities/' + id);
  }

  public getBand(bandId) : Observable<Band>{
    return this.http.get<Band>('/api/bands/' + bandId);
  }

  public addFamily(newFamily: JobFamily): void {
    console.log(newFamily);

    this.http.post<JobFamily>('api/families', newFamily).subscribe( res => {

      if (res == null) {
        console.log('Could not add family!');
      } else {
        console.log('Added new family!');
        console.log(newFamily);
        }
     })
  }

  public updateFamily(newFamily: JobFamily): void {
    console.log(newFamily);

    this.http.put<JobFamily>('api/families', newFamily).subscribe( res => {

      if (res == null) {
        console.log('Family was not updated!');
        console.log(newFamily);
      } else {
        console.log('Famlily was updated');
        console.log(newFamily);
      }
    });
  }

  public getDeletableJobFamilies() : Observable<JobFamily[]> {
    return this.http.get<JobFamily[]>('/api/deletableJobFamilies');
  }

  public deleteJobFamily(jobFamilyId): Observable<Object> {
    return this.http.delete('/api/deleteJobFamily/' + jobFamilyId);
  }

}
