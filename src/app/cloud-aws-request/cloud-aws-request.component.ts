import { Component, OnInit } from '@angular/core';
import { DmbackendService } from '../dmbackend.service';
@Component({
  selector: 'app-cloud-aws-request',
  templateUrl: './cloud-aws-request.component.html',
  styleUrls: ['./cloud-aws-request.component.css']
})
export class CloudAwsRequestComponent implements OnInit{
  cloud_aws_requests;
  constructor(public dmbackendService: DmbackendService){
  
  }
  ngOnInit(): void {
    this.cloud_aws_requests = this.dmbackendService.getCloudAwsRequests();
  }
}
