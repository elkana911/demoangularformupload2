import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUploadDialogComponent } from './my-upload-dialog.component';

describe('MyUploadDialogComponent', () => {
  let component: MyUploadDialogComponent;
  let fixture: ComponentFixture<MyUploadDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyUploadDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyUploadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
