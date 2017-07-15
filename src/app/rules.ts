import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';
import { CardListingTableComponent } from "app/widgets/card.listing.table.component";
import { CardEntityLineComponent } from "app/widgets/card.entityline";

export let defineRules = (angularm: AngularmService) => {
    angularm
        .ptr('form_line', '*', 'code', null, FormLineComponent, { inputType: 'number' })
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .detr('list_entities', ListingTableComponent)
        .etr('list_entities', 'testcase', CardListingTableComponent)
        .etr('list_entities', 'quiz', CardListingTableComponent)
        .etr('list_entities', 'course', CardListingTableComponent)
        .der('table_line', EntityLineComponent)
        .er('table_line', 'testcase', CardEntityLineComponent)
        .er('table_line', 'quiz', CardEntityLineComponent)
        .er('table_line', 'course', CardEntityLineComponent)
        .der('show_entity', EntityDetailsComponent)
        .detr('create_form', CreateEntityComponent)
        .der('edit_form', EditEntityFormComponent)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
