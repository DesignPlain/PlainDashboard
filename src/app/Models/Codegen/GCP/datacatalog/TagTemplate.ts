import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  datacatalog_TagTemplateField,
  datacatalog_TagTemplateField_GetTypes,
} from "../types/datacatalog_TagTemplateField";

export interface TagTemplateArgs {
  // This confirms the deletion of any possible tags using this template. Must be set to true in order to delete the tag template.
  forceDelete?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // Template location region.
  region?: string;

  // The id of the tag template to create.
  tagTemplateId?: string;

  // The display name for this template.
  displayName?: string;

  /*
Set of tag template field IDs and the settings for the field. This set is an exhaustive list of the allowed fields. This set must contain at least one field and at most 500 fields. The change of field_id will be resulting in re-creating of field. The change of primitive_type will be resulting in re-creating of field, however if the field is a required, you cannot update it.
Structure is documented below.
*/
  fields?: Array<datacatalog_TagTemplateField>;
}
export class TagTemplate extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Template location region.
  public region?: string;

  // The id of the tag template to create.
  public tagTemplateId?: string;

  // The display name for this template.
  public displayName?: string;

  /*
Set of tag template field IDs and the settings for the field. This set is an exhaustive list of the allowed fields. This set must contain at least one field and at most 500 fields. The change of field_id will be resulting in re-creating of field. The change of primitive_type will be resulting in re-creating of field, however if the field is a required, you cannot update it.
Structure is documented below.
*/
  public fields?: Array<datacatalog_TagTemplateField>;

  // This confirms the deletion of any possible tags using this template. Must be set to true in order to delete the tag template.
  public forceDelete?: boolean;

  /*
(Output)
The resource name of the tag template field in URL format. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId}/fields/{field}
*/
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "region",
        "Template location region.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "tagTemplateId",
        "The id of the tag template to create.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The display name for this template.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "fields",
        "Set of tag template field IDs and the settings for the field. This set is an exhaustive list of the allowed fields. This set must contain at least one field and at most 500 fields. The change of field_id will be resulting in re-creating of field. The change of primitive_type will be resulting in re-creating of field, however if the field is a required, you cannot update it.\nStructure is documented below.",
        datacatalog_TagTemplateField_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDelete",
        "This confirms the deletion of any possible tags using this template. Must be set to true in order to delete the tag template.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
