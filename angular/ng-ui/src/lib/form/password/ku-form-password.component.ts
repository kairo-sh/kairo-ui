import {
  ChangeDetectionStrategy,
  Component,
  effect,
  EffectRef,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { KuInputDirective } from '../../input';

@Component({
  selector: 'ku-form-password',
  imports: [ReactiveFormsModule, KuInputDirective],
  templateUrl: './ku-form-password.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KuFormPasswordComponent),
      multi: true,
    },
  ],
})
export class KuFormPasswordComponent implements ControlValueAccessor {
  formControl = input.required<FormControl>();
  label = input.required<string>();
  id = input.required<string>();
  placeholder = input('');
  isPasswordVisible = signal(false);
  isDisabled = signal(false);

  onChange: (value: string) => void;
  onTouched: () => void;

  disableEffect: EffectRef;

  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    this.onChange = () => {};
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    this.onTouched = () => {};
    this.disableEffect = effect(() => {
      if (this.isDisabled()) {
        this.formControl().disable();
      } else {
        this.formControl().enable();
      }
    });
  }

  togglePasswordVisibility() {
    this.isPasswordVisible.set(!this.isPasswordVisible());
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(obj: string): void {
    this.formControl.apply(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }
}
