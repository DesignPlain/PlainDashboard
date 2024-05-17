import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyValueArrayComponent } from './key-value-array.component';

describe('KeyValueArrayComponent', () => {
  let component: KeyValueArrayComponent;
  let fixture: ComponentFixture<KeyValueArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyValueArrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyValueArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
