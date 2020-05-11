import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FCFMComponent } from './fcfm.component';

describe('FCFMComponent', () => {
  let component: FCFMComponent;
  let fixture: ComponentFixture<FCFMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FCFMComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FCFMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
