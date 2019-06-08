import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-upload-dialog',
  templateUrl: './my-upload-dialog.component.html',
  styleUrls: ['./my-upload-dialog.component.css']
})
export class MyUploadDialogComponent implements OnInit {

  // https://jasonwatmore.com/post/2018/11/07/angular-7-reactive-forms-validation-example

  SERVER_URL = "http://localhost:8090/api/upload_form_file";
  uploadForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  // convenience getter for easy access to form fields
  get f() { return this.uploadForm.controls; }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: ['', Validators.required],
      emailinput: ['', [Validators.required, Validators.email]]
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.uploadForm.invalid) {
      return;
    }

    const formData = new FormData();

    formData.append('file', this.uploadForm.get('profile').value);
    formData.append('email', this.uploadForm.get('emailinput').value);
    // console.log('email adalah ' + this.uploadForm.get('emailinput').value);

    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      (res) => console.log(res),
      (err) => { throw err } // this.handleError(err)
    );
  }
}