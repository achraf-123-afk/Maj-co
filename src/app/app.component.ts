import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjoutCollabComponent } from './ajout-collab/ajout-collab.component';
import { AreYouSureComponent } from './are-you-sure/are-you-sure.component';
import { ManageAbsenceComponent } from './manage-absence/manage-absence.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  displayedColumns: string[] = [
    'Matricule',
    'Nom',
    'Prénom',
    'Date de naissance',
    'Situation',
    'Salaire',
    'Action',
  ];

  displayedColumns2: string[] = ['CollaborateurID', 'Motif', 'Fin', 'Début'];
  collaborators = [
    {
      matricule: 0,
      salary: '$3,635.30',
      firstName: 'Talley',
      lastName: 'Baldwin',
      birthdate: '1995-09-05T11:56:15 ',
      situation: 'married',
    },
    {
      matricule: 1,
      salary: '$3,781.86',
      firstName: 'Trisha',
      lastName: 'Butler',
      birthdate: '2010-04-11T05:13:49 ',
      situation: 'married',
    },
    {
      matricule: 2,
      salary: '$1,805.61',
      firstName: 'Blair',
      lastName: 'Shannon',
      birthdate: '2001-08-01T12:31:30 ',
      situation: 'married',
    },
    {
      matricule: 3,
      salary: '$2,081.19',
      firstName: 'Estela',
      lastName: 'Ochoa',
      birthdate: '1998-12-09T11:25:58 ',
      situation: 'married',
    },
    {
      matricule: 4,
      salary: '$2,734.88',
      firstName: 'Good',
      lastName: 'Lawrence',
      birthdate: '1983-08-01T12:45:17 ',
      situation: 'married',
    },
    {
      matricule: 5,
      salary: '$1,625.86',
      firstName: 'Ellison',
      lastName: 'Haney',
      birthdate: '1984-12-23T04:41:31 ',
      situation: 'married',
    },
    {
      matricule: 6,
      salary: '$1,452.59',
      firstName: 'Sophie',
      lastName: 'Marks',
      birthdate: '2011-09-11T01:51:45 ',
      situation: 'married',
    },
    {
      matricule: 7,
      salary: '$1,713.16',
      firstName: 'Copeland',
      lastName: 'Pittman',
      birthdate: '1993-05-16T03:28:25 ',
      situation: 'married',
    },
    {
      matricule: 8,
      salary: '$3,752.44',
      firstName: 'Francis',
      lastName: 'Foster',
      birthdate: '2011-06-16T07:30:14 ',
      situation: 'married',
    },
    {
      matricule: 9,
      salary: '$2,603.67',
      firstName: 'Shelly',
      lastName: 'Mcintosh',
      birthdate: '1983-03-16T04:16:25 ',
      situation: 'married',
    },
    {
      matricule: 10,
      salary: '$3,221.05',
      firstName: 'Jennings',
      lastName: 'Brock',
      birthdate: '2003-04-22T03:57:17 ',
      situation: 'married',
    },
    {
      matricule: 11,
      salary: '$3,918.69',
      firstName: 'Murphy',
      lastName: 'Fleming',
      birthdate: '2011-12-16T09:04:46 ',
      situation: 'married',
    },
    {
      matricule: 12,
      salary: '$2,731.10',
      firstName: 'Katie',
      lastName: 'Hinton',
      birthdate: '2003-08-07T11:23:03 ',
      situation: 'married',
    },
    {
      matricule: 13,
      salary: '$3,619.27',
      firstName: 'Britney',
      lastName: 'Henry',
      birthdate: '1997-12-03T09:35:42 ',
      situation: 'married',
    },
  ];

  absences = [
    {
      collaboratorID: 0,
      start: '2012-06-27T02:44:35 ',
      end: '2021-12-13T03:06:10 ',
      motif: 'test',
    },
    {
      collaboratorID: 1,
      start: '2012-11-22T04:29:44 ',
      end: '2016-02-13T10:04:55 ',
      motif: 'test',
    },
    {
      collaboratorID: 2,
      start: '2015-03-01T07:59:19 ',
      end: '2018-07-15T02:03:34 ',
      motif: 'test',
    },
    {
      collaboratorID: 3,
      start: '2000-11-01T03:30:27 ',
      end: '2014-11-16T05:24:40 ',
      motif: 'test',
    },
    {
      collaboratorID: 4,
      start: '2002-12-04T06:49:19 ',
      end: '2008-09-07T09:57:14 ',
      motif: 'test',
    },
    {
      collaboratorID: 4,
      start: '2006-07-17T02:48:13 ',
      end: '2008-04-20T12:09:34 ',
      motif: 'test',
    },
    {
      collaboratorID: 2,
      start: '2007-07-31T06:41:22 ',
      end: '2020-11-10T05:41:07 ',
      motif: 'test',
    },
    {
      collaboratorID: 4,
      start: '2002-06-03T11:24:06 ',
      end: '2002-06-04T01:22:39 ',
      motif: 'test',
    },
    {
      collaboratorID: 3,
      start: '2005-01-15T04:33:23 ',
      end: '2012-10-21T07:00:20 ',
      motif: 'test',
    },
    {
      collaboratorID: 2,
      start: '2004-09-15T06:29:55 ',
      end: '2018-02-15T07:56:45 ',
      motif: 'test',
    },
    {
      collaboratorID: 1,
      start: '2004-05-03T09:36:32 ',
      end: '2021-02-17T02:51:49 ',
      motif: 'test',
    },
    {
      collaboratorID: 1,
      start: '2019-11-28T10:43:05 ',
      end: '2009-01-18T06:41:09 ',
      motif: 'test',
    },
    {
      collaboratorID: 1,
      start: '2018-11-13T08:56:32 ',
      end: '2007-10-29T10:09:00 ',
      motif: 'test',
    },
  ];

  motifs = [
    {
      ID: 0,
      label: 'Maladie',
    },
    {
      ID: 1,
      label: 'Déces',
    },
    {
      ID: 2,
      label: 'Etude',
    },
    {
      ID: 3,
      label: 'Nourriture',
    },
    {
      ID: 4,
      label: 'Random',
    },
  ];

  updatedCollaborators: any = []; // Will contain the filtred collaborators.

  searchCollaborator: string = '';

  collaboratorsClicked: boolean = true;
  absentsClicked: boolean = false;

  title = 'maj-collab';

  constructor(private dialog: MatDialog) {
    this.updatedCollaborators = this.collaborators;
  }

  searchCollabChange($event: any) {
    if ($event.target.value == '') {
      this.updatedCollaborators = this.collaborators;
    } else {
      this.updatedCollaborators = this.collaborators.filter(
        (collaborator: any) =>
          collaborator.firstName
            .toLowerCase()
            .trim()
            .includes($event.target.value.toLowerCase())
      );
    }
  }

  toggeleClick() {
    if (this.collaboratorsClicked) {
      this.collaboratorsClicked = false;
      this.absentsClicked = true;
      return;
    }

    if (this.absentsClicked) {
      this.collaboratorsClicked = true;
      this.absentsClicked = false;
      return;
    }
  }

  openAddCollaboratorModal() {
    const dialogRef = this.dialog.open(AjoutCollabComponent, {
      height: '500px',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data.decision == 'Confirmer') {
        var newCollaborator = data.collaborator;
        console.log(newCollaborator);
        newCollaborator.matricule = this.getLastId() + 1;

        this.collaborators.push(newCollaborator);

        this.updatedCollaborators = [...this.collaborators];
      }
    });
  }

  openManageAbsence() {
    const dialogRef = this.dialog.open(ManageAbsenceComponent, {
      height: '500px',
      width: '500px',
      data: {
        collaborators: this.collaborators,
        motifs: this.motifs,
      },
    });

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data.decision == 'Confirmer') {
        var newAbsence = data.absence;
        newAbsence.matricule = this.getLastId() + 1;
        this.absences.push(newAbsence);
        this.absences = [...this.absences];
      }
    });
  }

  openAreYouSureModal(collaborator: any) {
    const dialogRef = this.dialog.open(AreYouSureComponent, {
      data: {
        message: `Vous êtes sur le point de supprimer ${collaborator.firstName} ${collaborator.lastName} de votre list.`,
      },
    });

    dialogRef.afterClosed().subscribe((decision: string) => {
      if (decision == 'Confirmer') {
        this.collaborators = this.collaborators.filter(
          (c) => c.matricule != collaborator.matricule
        );
        this.updatedCollaborators = [...this.collaborators];
      }
    });
  }

  getLastId() {
    var max = 0;
    for (let col of this.collaborators) {
      if (col.matricule > max) {
        max = col.matricule;
      }
    }

    return max;
  }
}