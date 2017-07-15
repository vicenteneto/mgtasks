import { Component } from '@angular/core';
import { EntityLineComponent } from "angularm";


@Component({
    selector: 'tr [mgEntityLine]',
    template:
        `<td *ngFor="let property of entity.mountProperties()">{{property.value}}</td>
         <td>
          <div>
            <a href="#" class="w3-bar-item w3-button" (click)="show()">Show</a>
            <a href="#" class="w3-bar-item w3-button" (click)="edit()">Edit</a>
            <a href="#" class="w3-bar-item w3-button" (click)="destroy()">Destroy</a>
          </div>
         </td>`,
})
export class ActionsEntityLineComponent extends EntityLineComponent {}
