import { TagTemplateFieldType } from "./TagTemplateFieldType";

export interface TagTemplateField {
  // A description for this field.
  Description?: string;

  // The display name for this field.
  DisplayName?: string;

  // The identifier for this object. Format specified above.
  FieldId?: string;

  // Whether this is a required field. Defaults to false.
  IsRequired?: boolean;

  /*
(Output)
The resource name of the tag template field in URL format. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId}/fields/{field}
*/
  Name?: string;

  /*
The order of this field with respect to other fields in this tag template.
A higher value indicates a more important field. The value can be negative.
Multiple fields can have the same order, and field orders within a tag do not have to be sequential.
*/
  Order?: number;

  /*
The type of value this tag field can contain.
Structure is documented below.
*/
  Type?: TagTemplateFieldType;
}
