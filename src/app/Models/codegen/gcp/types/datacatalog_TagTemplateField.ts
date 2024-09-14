import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  datacatalog_TagTemplateFieldType,
  datacatalog_TagTemplateFieldType_GetTypes,
} from "./datacatalog_TagTemplateFieldType";

export interface datacatalog_TagTemplateField {
  // The display name for this field.
  displayName?: string;

  // The identifier for this object. Format specified above.
  fieldId?: string;

  // Whether this is a required field. Defaults to false.
  isRequired?: boolean;

  /*
(Output)
The resource name of the tag template field in URL format. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId}/fields/{field}
*/
  name?: string;

  /*
The order of this field with respect to other fields in this tag template.
A higher value indicates a more important field. The value can be negative.
Multiple fields can have the same order, and field orders within a tag do not have to be sequential.
*/
  order?: number;

  /*
The type of value this tag field can contain.
Structure is documented below.
*/
  type?: datacatalog_TagTemplateFieldType;

  // A description for this field.
  description?: string;
}

export function datacatalog_TagTemplateField_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "isRequired",
      "Whether this is a required field. Defaults to false.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "(Output)\nThe resource name of the tag template field in URL format. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId}/fields/{field}",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "order",
      "The order of this field with respect to other fields in this tag template.\nA higher value indicates a more important field. The value can be negative.\nMultiple fields can have the same order, and field orders within a tag do not have to be sequential.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "type",
      "The type of value this tag field can contain.\nStructure is documented below.",
      () => datacatalog_TagTemplateFieldType_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "A description for this field.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "The display name for this field.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fieldId",
      "The identifier for this object. Format specified above.",
      () => [],
      true,
      false,
    ),
  ];
}
