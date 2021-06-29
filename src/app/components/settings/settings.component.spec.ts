import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SettingsService } from '../../services/settings/settings.service';
import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let service: SettingsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],
      providers: [ SettingsService ],
      imports: [
        FormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
