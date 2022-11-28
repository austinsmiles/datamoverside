import { Component, OnInit } from '@angular/core';
import { DmbackendService } from '../dmbackend.service';

@Component({
  selector: 'app-onprem-datasource',
  templateUrl: './onprem-datasource.component.html',
  styleUrls: ['./onprem-datasource.component.css']
})
export class OnpremDatasourceComponent implements OnInit{
datasources ;
constructor(public dmbackendService: DmbackendService){
  
}
ngOnInit(): void {
  this.datasources = this.dmbackendService.datasources;
}
}
