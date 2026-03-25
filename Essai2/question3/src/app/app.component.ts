import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators, ReactiveFormsModule, FormGroup, ValidatorFn } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [MatToolbarModule, MatIconModule, MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule]
})
export class AppComponent {
  title = 'reactive.form';

  formGroup: FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ) {
    this.formGroup = this.formBuilder.group(
      {
        name: ['', [Validators.required]],
        roadnumber: ['', [Validators.required, Validators.min(1000), Validators.max(9999)]],
        postalcode: ['', [Validators.pattern("^[A-Z][0-9][A-Z][ ]?[0-9][A-Z][0-9]$")]],
        comments: ['', [estDixMots()]]
      },
      { validators: nomDansCommentaire() }
    );
   }

}

export function estDixMots(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const comments = control.value;

    if(!comments) {
      return null;
    }
     const nbDeMots = comments.split(" ").length;
     const estValide = nbDeMots >= 10;

    return estValide ? null : { estDixMots: true};
  }
}

export function nomDansCommentaire(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const nom = control.get("name");
    const commentaire = control.get("comments");

    if(!nom?.value || !commentaire?.value)
      return null;

    const motsDeCommentaire = commentaire?.value.split(" ");
    console.log(motsDeCommentaire);
    const estValide = !motsDeCommentaire.includes(nom.value);
    
    return estValide ? null : { nomDansCommentaire: true };
  };
}


