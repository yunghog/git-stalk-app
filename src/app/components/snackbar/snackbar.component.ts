import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit {
  constructor(private sb: SnackbarService) {}
  visibile: boolean;
  msg: string;
  color: string;
  ngOnInit() {
    this.sb.snackbarState.subscribe((res) => {
      this.visibile = this.sb.visibility;
      this.msg = this.sb.msg;
      this.color = this.sb.color;
      setTimeout(() => {
        this.sb.close();
      }, 3000);
    });
  }
}
