import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LmyaComponent } from './lmya.component';

describe('LmyaComponent', () => {
  let component: LmyaComponent;
  let fixture: ComponentFixture<LmyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmyaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LmyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
