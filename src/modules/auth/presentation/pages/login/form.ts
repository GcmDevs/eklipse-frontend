import { FormControl, FormGroup } from '@angular/forms';
import { GcmContextType } from '@common/domain/types';
import { required } from '@kato-lee/components/fields';
import { LoginUserPayload } from '@modules/auth/application/payloads';

export class LoginForm extends FormGroup {
  constructor() {
    super({
      context: new FormControl(null, [required]),
      username: new FormControl(null, [required]),
      password: new FormControl(null, [required]),
    });
  }

  get context(): FormControl<GcmContextType> {
    return this.get('context') as FormControl;
  }
  get username(): FormControl<string> {
    return this.get('username') as FormControl;
  }
  get password(): FormControl<string> {
    return this.get('password') as FormControl;
  }

  public get model(): LoginUserPayload {
    return {
      context: this.context.value.getCode(),
      username: this.username.value,
      password: this.password.value,
    };
  }
}
