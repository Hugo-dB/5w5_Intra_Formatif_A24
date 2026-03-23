import { inject } from '@angular/core';
import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { UserService } from '../user.service';

export const chatGuard: CanActivateFn = (route, state) => {

  if(!inject(UserService).isCatLover())
      return createUrlTreeFromSnapshot(route, ["/dog"]);
  
    return true;
};
