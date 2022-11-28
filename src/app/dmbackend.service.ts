import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DmbackendService {
  contacts = [
    {id: 1, name: "Contact 001", description: "Contact 001 des", email: "c001@email.com"},
    {id: 2, name: "Contact 002", description: "Contact 002 des", email: "c002@email.com"},
    {id: 3, name: "Contact 003", description: "Contact 003 des", email: "c003@email.com"},
    {id: 4, name: "Contact 004", description: "Contact 004 des", email: "c004@email.com"}
  ];

  datasources = [
    {id: "ds01", ds_name: "Local", ds_type: "LOCAL_STORAGE", ds_path: "SYSTEM"},
    {id: "ds02", ds_name: "Shared S3 dxb", ds_type: "S3_USER_BUCKET", ds_path: "/dxb/uid04"},
    {id: "ds03", ds_name: "Shared S3 sxj", ds_type: "S3_USER_BUCKET", ds_path: "/sxj/uid04"}
  ];

  cloud_aws_requests = [
    {id: "rq-01", rq_name: "dataset-covid", rq_status:"APPROVED"},
    {id: "rq-02", rq_name: "dataset-schools", rq_status:"PENDING"},
    {id: "rq-03", rq_name: "dataset-municipality", rq_status:"PENDING"}
  ];

  constructor(private http: HttpClient) { }
  public getDataSources():Array<{id, ds_name, ds_type, ds_path}>{
    return this.datasources;
  }
  public getCloudAwsRequests(): Array<{id, rq_name, rq_status}>{
    return this.cloud_aws_requests
  }

  public getBackendRequest(){
    return this.http.get<DmbackendService>('http://localhost:5000/get_aws');
  }
  
}
