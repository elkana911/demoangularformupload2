import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MyUploadDialogComponent } from './my-upload-dialog/my-upload-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoangularformupload2';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {

    let dialogRef = this.dialog.open(MyUploadDialogComponent, {
      // width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
