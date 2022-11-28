import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudAwsRequestComponent } from './cloud-aws-request.component';

describe('CloudAwsRequestComponent', () => {
  let component: CloudAwsRequestComponent;
  let fixture: ComponentFixture<CloudAwsRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudAwsRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudAwsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
