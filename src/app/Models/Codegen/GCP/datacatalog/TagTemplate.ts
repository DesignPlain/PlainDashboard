import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { TagTemplateField } from "../types/TagTemplateField";

export interface TagTemplateArgs {
  /*
Set of tag template field IDs and the settings for the field. This set is an exhaustive list of the allowed fields. This set must contain at least one field and at most 500 fields. The change of field_id will be resulting in re-creating of field. The change of primitive_type will be resulting in re-creating of field, however if the field is a required, you cannot update it.
Structure is documented below.
*/
  Fields?: Array<TagTemplateField>;

  // This confirms the deletion of any possible tags using this template. Must be set to true in order to delete the tag template.
  ForceDelete?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Template location region.
  Region?: string;

  // The id of the tag template to create.
  TagTemplateId?: string;

  // The display name for this template.
  DisplayName?: string;
}
export class TagTemplate extends Resource {
  // The display name for this template.
  public DisplayName?: string;

  /*
Set of tag template field IDs and the settings for the field. This set is an exhaustive list of the allowed fields. This set must contain at least one field and at most 500 fields. The change of field_id will be resulting in re-creating of field. The change of primitive_type will be resulting in re-creating of field, however if the field is a required, you cannot update it.
Structure is documented below.
*/
  public Fields?: Array<TagTemplateField>;

  // This confirms the deletion of any possible tags using this template. Must be set to true in order to delete the tag template.
  public ForceDelete?: boolean;

  /*
(Output)
The resource name of the tag template field in URL format. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId}/fields/{field}
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Template location region.
  public Region?: string;

  // The id of the tag template to create.
  public TagTemplateId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "Fields",
        "Set of tag template field IDs and the settings for the field. This set is an exhaustive list of the allowed fields. This set must contain at least one field and at most 500 fields. The change of field_id will be resulting in re-creating of field. The change of primitive_type will be resulting in re-creating of field, however if the field is a required, you cannot update it.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "ForceDelete",
        "This confirms the deletion of any possible tags using this template. Must be set to true in order to delete the tag template.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "Template location region.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TagTemplateId",
        "The id of the tag template to create.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The display name for this template.",
      ),
    ];
  }
}
