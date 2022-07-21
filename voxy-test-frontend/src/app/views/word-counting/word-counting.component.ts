import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CounterService } from 'src/app/services/api/counter/counter.service';


@Component({
  selector: 'app-word-counting',
  templateUrl: './word-counting.component.html',
  styleUrls: ['./word-counting.component.css']
})
export class WordCountingComponent implements OnInit {

  myForm!: FormGroup;

  wordCount: any = 0

  disabledFlag: Boolean = false

  constructor( private snackBar: MatSnackBar, private fb: FormBuilder , private counterService: CounterService) { }

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

  async onSubmit(){
    this.wordCount = 0

    if (this.myForm.invalid) {
      this.openSnackBar("There is no text to count!!! =[", "Dismiss")
      return
    } 
    
    this.disabledFlag = true
    const {err, wordCount} = await this.counterService.requestWordCount(this.text?.value)
    this.disabledFlag = false

    if (err) {
      this.openSnackBar(err, "Dismiss")
      return
    }

    this.wordCount = wordCount
    console.log(this.wordCount)
  }
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {verticalPosition: "top", duration: 4000});
  }

/**
 * Validator function for Form validation
 */
  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
}
