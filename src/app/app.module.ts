import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { MatSnackBarModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyUploadDialogComponent } from './my-upload-dialog/my-upload-dialog.component';
import { ServerErrorInterceptor } from './server-error.interceptor';
import { GlobalErrorHandler } from './global-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    MyUploadDialogComponent
  ],
  imports: [
    BrowserModule,MatSnackBarModule,
    AppRoutingModule,HttpClientModule,
    MatButtonModule,
    MatDialogModule,ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    MyUploadDialogComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
