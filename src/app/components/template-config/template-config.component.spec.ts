import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateConfigComponent } from './template-config.component';

describe('ConfigModalComponent', () => {
  let component: TemplateConfigComponent;
  let fixture: ComponentFixture<TemplateConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateConfigComponent],
    });
    fixture = TestBed.createComponent(TemplateConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
