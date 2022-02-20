import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ajout-collab',
  templateUrl: './ajout-collab.component.html',
  styleUrls: ['./ajout-collab.component.scss'],
})
export class AjoutCollabComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AjoutCollabComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {}

  dateNaissance: string = '';
  nom: string = '';
  prenom: string = '';
  salaire: string = '';
  situation: string = '';

  canConfirm = false;
  ngOnInit(): void {}

  action() {
    console.log(this.dateNaissance)
    this.dialogRef.close({
      decision: 'Confirmer',
      collaborator: {
        lastName: this.nom,
        firstName: this.prenom,
        birthdate: this.dateNaissance,
        situation: this.situation,
        salary: this.salaire,
      },
    });
  }

  checkifCanConfirm() {
    if (
      this.dateNaissance != '' &&
      this.nom != '' &&
      this.prenom != '' &&
      this.salaire != '' &&
      this.situation != ''
    ) {
      this.canConfirm = true;
    } else {
      this.canConfirm = false;
    }
  }
}