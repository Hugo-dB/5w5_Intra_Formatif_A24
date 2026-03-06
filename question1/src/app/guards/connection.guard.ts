import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { inject } from '@angular/core';

export const connectionGuard: CanActivateFn = (route, state) => {

  if(!inject(UserService).isLogged())
    return createUrlTreeFromSnapshot(route, ["/login"]);

  return true;
};
