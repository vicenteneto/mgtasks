import { Component } from '@angular/core';

import { ListingTableComponent } from "angularm";

@Component({
  selector: 'div [mgListingTable]',
  template: `<div *ngIf="entityType">
    <h1>Listing {{ entityType.plural | titleCase }}</h1>
    <ul class="w3-ul w3-hoverable">
      <li class="w3-border" *ngFor="let entity of entities" [mgEntity]="'table_line'" [entity]="entity">
      </li>
    </ul>
    <a href="#" (click)="create()">New {{entityType.singular | titleCase}}</a>
    <a href="#" (click)="back()">Back</a>
  </div>`
})
export class CardListingTableComponent extends ListingTableComponent {}
