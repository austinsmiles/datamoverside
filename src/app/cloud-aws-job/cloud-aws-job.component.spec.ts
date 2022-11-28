import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudAwsJobComponent } from './cloud-aws-job.component';

describe('CloudAwsJobComponent', () => {
  let component: CloudAwsJobComponent;
  let fixture: ComponentFixture<CloudAwsJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudAwsJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudAwsJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
