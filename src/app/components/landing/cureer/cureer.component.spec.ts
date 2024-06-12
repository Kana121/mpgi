import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CureerComponent } from './cureer.component';

describe('CureerComponent', () => {
  let component: CureerComponent;
  let fixture: ComponentFixture<CureerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CureerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CureerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
