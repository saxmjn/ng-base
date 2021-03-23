import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {
  set(_key, _val): any {
    window.localStorage.setItem(_key, _val);
  }
  get(_key): any {
    return window.localStorage.getItem(_key);
  }
  remove(_key): any {
    window.localStorage.removeItem(_key);
  }
}
