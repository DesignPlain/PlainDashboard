import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpModalComponent } from './help-modal.component';

describe('ConfigModalComponent', () => {
  let component: HelpModalComponent;
  let fixture: ComponentFixture<HelpModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpModalComponent],
    });
    fixture = TestBed.createComponent(HelpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
