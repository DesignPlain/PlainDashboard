import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { TagField } from "../types/TagField";

export interface TagArgs {
  /*
The name of the parent this tag is attached to. This can be the name of an entry or an entry group. If an entry group, the tag will be attached to
all entries in that group.
*/
  Parent?: string;

  /*
The resource name of the tag template that this tag uses. Example:
projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId}
This field cannot be modified after creation.
*/
  Template?: string;

  /*
Resources like Entry can have schemas associated with them. This scope allows users to attach tags to an
individual column based on that schema.
For attaching a tag to a nested column, use `.` to separate the column names. Example:
`outer_column.inner_column`
*/
  Column?: string;

  /*
This maps the ID of a tag field to the value of and additional information about that field.
Valid field IDs are defined by the tag's template. A tag must have at least 1 field and at most 500 fields.
Structure is documented below.
*/
  Fields?: Array<TagField>;
}
export class Tag extends Resource {
  /*
Resources like Entry can have schemas associated with them. This scope allows users to attach tags to an
individual column based on that schema.
For attaching a tag to a nested column, use `.` to separate the column names. Example:
`outer_column.inner_column`
*/
  public Column?: string;

  /*
This maps the ID of a tag field to the value of and additional information about that field.
Valid field IDs are defined by the tag's template. A tag must have at least 1 field and at most 500 fields.
Structure is documented below.
*/
  public Fields?: Array<TagField>;

  /*
The resource name of the tag in URL format. Example:
projects/{project_id}/locations/{location}/entrygroups/{entryGroupId}/entries/{entryId}/tags/{tag_id} or
projects/{project_id}/locations/{location}/entrygroups/{entryGroupId}/tags/{tag_id}
where tag_id is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name.
*/
  public Name?: string;

  /*
The name of the parent this tag is attached to. This can be the name of an entry or an entry group. If an entry group, the tag will be attached to
all entries in that group.
*/
  public Parent?: string;

  /*
The resource name of the tag template that this tag uses. Example:
projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId}
This field cannot be modified after creation.
*/
  public Template?: string;

  // The display name of the tag template.
  public TemplateDisplayname?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The name of the parent this tag is attached to. This can be the name of an entry or an entry group. If an entry group, the tag will be attached to\nall entries in that group.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Template",
        "The resource name of the tag template that this tag uses. Example:\nprojects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId}\nThis field cannot be modified after creation.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Column",
        "Resources like Entry can have schemas associated with them. This scope allows users to attach tags to an\nindividual column based on that schema.\nFor attaching a tag to a nested column, use `.` to separate the column names. Example:\n`outer_column.inner_column`",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Fields",
        "This maps the ID of a tag field to the value of and additional information about that field.\nValid field IDs are defined by the tag's template. A tag must have at least 1 field and at most 500 fields.\nStructure is documented below.",
      ),
    ];
  }
}
