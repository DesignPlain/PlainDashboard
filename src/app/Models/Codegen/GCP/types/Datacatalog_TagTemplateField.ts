import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datacatalog_TagTemplateFieldType,
  Datacatalog_TagTemplateFieldType_GetTypes,
} from "./Datacatalog_TagTemplateFieldType";

export interface Datacatalog_TagTemplateField {
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
  Type?: Datacatalog_TagTemplateFieldType;

  // A description for this field.
  Description?: string;

  // The display name for this field.
  DisplayName?: string;

  // The identifier for this object. Format specified above.
  FieldId?: string;
}

export function Datacatalog_TagTemplateField_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "IsRequired",
      "Whether this is a required field. Defaults to false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "(Output)\nThe resource name of the tag template field in URL format. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId}/fields/{field}",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Order",
      "The order of this field with respect to other fields in this tag template.\nA higher value indicates a more important field. The value can be negative.\nMultiple fields can have the same order, and field orders within a tag do not have to be sequential.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Type",
      "The type of value this tag field can contain.\nStructure is documented below.",
      Datacatalog_TagTemplateFieldType_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "A description for this field.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DisplayName",
      "The display name for this field.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "FieldId",
      "The identifier for this object. Format specified above.",
      [],
      true,
      false,
    ),
  ];
}
