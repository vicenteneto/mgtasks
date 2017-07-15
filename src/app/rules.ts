import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';
import { LimittedFormLineComponent } from "app/widgets/limitted.form.line";

export let defineRules = (angularm: AngularmService) => {
    angularm
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        .ptr('form_line', '*', '*', 'integer', LimittedFormLineComponent, { inputType: 'number', min: 0, max: 500 })
        .dpr('show_line', ShowLineComponent)
        .detr('list_entities', ListingTableComponent)
        .der('table_line', EntityLineComponent)
        .der('show_entity', EntityDetailsComponent)
        .detr('create_form', CreateEntityComponent)
        .der('edit_form', EditEntityFormComponent)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
