import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-absence',
  templateUrl: './manage-absence.component.html',
  styleUrls: ['./manage-absence.component.scss'],
})
export class ManageAbsenceComponent implements OnInit {
  collaboratorsIds = [];
  selectedMotif: string = '';
  motifs = [];
  debut;
  fin;
  id;

  constructor(
    public dialogRef: MatDialogRef<ManageAbsenceComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    for (let col of data.collaborators) {
      this.collaboratorsIds.push(col.matricule);
    }

    for (let motif of data.motifs) {
      this.motifs.push(motif.label);
    }
  }

  ngOnInit(): void {}

  compareItems(i1, i2) {
    return i1 && i2 && i1.id === i2.id;
  }

  action() {
    console.log({
      motif: this.selectedMotif,
      debut: this.debut,
      fin: this.fin,
      matricule: this.id,
    });

    this.dialogRef.close({
      decision: 'Confirmer',
      absence: {
        collaboratorID: this.id,
        start: this.debut,
        end: this.fin,
        motif: this.selectedMotif,
      },
    });
  }
}