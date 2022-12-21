import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SnackbarType } from '../interfaces/enums.model';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  msg: string = '';
  visibility: boolean = true;
  color: string;
  snackbarState: Subject<any> = new Subject<any>();
  constructor() {}

  open(msg: string, type: SnackbarType) {
    this.msg = msg;
    this.visibility = true;
    switch (type) {
      case SnackbarType.ERROR:
        this.color = 'danger';
        break;
      case SnackbarType.INFO:
        this.color = 'info';
        break;
      case SnackbarType.SUCCESS:
        this.color = 'success';
        break;
      default:
        this.color = 'primary';
        break;
    }
    this.snackbarState.next(1);
  }
  close() {
    this.msg = '';
    this.visibility = false;
    this.snackbarState.next(2);
  }
}
