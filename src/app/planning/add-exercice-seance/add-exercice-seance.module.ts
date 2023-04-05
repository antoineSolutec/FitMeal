import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AddExerciceSeanceComponent } from "./add-exercice-seance.component";
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';


@NgModule({
    declarations: [
      AddExerciceSeanceComponent,
    ],
    imports: [
      BrowserModule,
      MatCardModule,
      MatIconModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      FormsModule,
      MatAutocompleteModule,
      DragDropModule,
      MatTabsModule,
      MatSelectModule,
      MatDatepickerModule,
      MatDialogModule,
      MatTooltipModule,
      MatBottomSheetModule
    ]
  })
  export class AddExerciceSeanceModule {
    constructor(){}
  }