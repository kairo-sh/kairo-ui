import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KairoUiComponent } from './kairo-ui.component';

describe('KairoUiComponent', () => {
  let component: KairoUiComponent;
  let fixture: ComponentFixture<KairoUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KairoUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KairoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
