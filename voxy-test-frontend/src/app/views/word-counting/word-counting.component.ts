import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-word-counting',
  templateUrl: './word-counting.component.html',
  styleUrls: ['./word-counting.component.css']
})
export class WordCountingComponent implements OnInit {

  myForm!: FormGroup;

  constructor( private snackBar: MatSnackBar, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      text:['', [
        Validators.required,
        this.noWhitespaceValidator
      ]]
    })
  }

  get text(){
    return this.myForm.get("text")
  }

  onSubmit(){
    if (this.myForm.invalid) {
      this.openSnackBar("There is no text to count!!! =[", "Dismiss")
      return
    } 
    //TODO submit method
  }
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {verticalPosition: "top", duration: 4000});
  }

  //Validation method
  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
}
