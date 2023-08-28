import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { createActionGroup, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../types/register-request";
import { CurrentUserInterface } from "src/app/shared/types/current-user";

export const authActions = createActionGroup({
    source: 'auth',
    events: {
        Register: props<{ request: RegisterRequestInterface }>(),
        'Register success': props<{ currentUser: CurrentUserInterface }>(),
        'Register failure': props<{ errors: BackendErrorsInterface }>()
    }

})
