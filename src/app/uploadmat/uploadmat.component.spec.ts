import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadmatComponent } from './uploadmat.component';

describe('UploadmatComponent', () => {
  let component: UploadmatComponent;
  let fixture: ComponentFixture<UploadmatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadmatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
