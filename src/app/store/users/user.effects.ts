import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadAllUsers, loadAllUsersSuccess, loadAllUsersFailure  } from './user.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects {
  
  private actions$ = inject(Actions)
  private userService = inject(UserService)

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => loadAllUsersSuccess({ list: users })),
          catchError((error) => of(loadAllUsersFailure({ error: error.err })))
        )
      )
    )
  );

  
}
