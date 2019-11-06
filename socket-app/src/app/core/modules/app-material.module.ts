import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule,
  MatListModule, MatToolbarModule, MatCardModule,
  MatInputModule, MatSelectModule, MatCheckboxModule,
  MatFormFieldModule, MatTabsModule, MatDialogModule,
  MatStepperModule, MatButtonToggleModule, MatRadioModule,
  MatTableModule, MatPaginatorModule, MatSortModule,
  MatExpansionModule, MatSnackBarModule, MatDatepickerModule,
  MatMenuModule, MatProgressSpinnerModule, // MatSpinner
  MatBottomSheetModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatProgressBarModule,
  MatChipsModule, MatSliderModule
} from '@angular/material';

@NgModule({
  imports: [
    // FormsModule,
    CommonModule,
    FlexLayoutModule,
    // FontAwesomeModule,
    OverlayModule,
    DragDropModule,
    MatButtonModule, MatToolbarModule, MatNativeDateModule,
    MatIconModule, MatSidenavModule, MatListModule, MatCardModule,
    MatInputModule, MatSelectModule, MatCheckboxModule,
    MatFormFieldModule, MatTabsModule, MatDialogModule,
    MatStepperModule, MatButtonToggleModule, MatRadioModule,
    MatTableModule, MatPaginatorModule, MatSortModule,
    MatExpansionModule, MatSnackBarModule, MatDatepickerModule,
    MatMenuModule, MatProgressSpinnerModule, // MatSpinner
    MatBottomSheetModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatChipsModule, MatSliderModule
  ],
  exports: [
    // FormsModule,
    CommonModule,
    FlexLayoutModule,
    // FontAwesomeModule,
    OverlayModule,
    DragDropModule,
    MatButtonModule, MatToolbarModule, MatNativeDateModule,
    MatIconModule, MatSidenavModule, MatListModule, MatCardModule,
    MatInputModule, MatSelectModule, MatCheckboxModule,
    MatFormFieldModule, MatTabsModule, MatDialogModule,
    MatStepperModule, MatButtonToggleModule, MatRadioModule,
    MatTableModule, MatPaginatorModule, MatSortModule,
    MatExpansionModule, MatSnackBarModule, MatDatepickerModule,
    MatMenuModule, MatProgressSpinnerModule, // MatSpinner
    MatBottomSheetModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatChipsModule, MatSliderModule
  ],
  // declarations: [ MatSpinner ], 개별 Component에서 import
  // entryComponents: [ MatSpinner ]
})
export class AppMaterialModule { }
