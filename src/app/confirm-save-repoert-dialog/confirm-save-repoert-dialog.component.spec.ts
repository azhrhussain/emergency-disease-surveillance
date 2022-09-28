import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSaveRepoertDialogComponent } from './confirm-save-repoert-dialog.component';

describe('ConfirmSaveRepoertDialogComponent', () => {
  let component: ConfirmSaveRepoertDialogComponent;
  let fixture: ComponentFixture<ConfirmSaveRepoertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmSaveRepoertDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmSaveRepoertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
