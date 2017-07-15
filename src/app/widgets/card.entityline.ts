import { Component } from '@angular/core';
import { EntityLineComponent } from "angularm";


@Component({
    selector: 'tr [mgEntityLine]',
    template:
        `<p *ngFor="let property of entity.mountProperties()">
           <span *ngIf="property.value" class="w3-tag w3-blue">{{property.value}}</span>
         </p>`,
})
export class CardEntityLineComponent extends EntityLineComponent {}
