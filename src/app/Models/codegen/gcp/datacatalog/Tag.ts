import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  datacatalog_TagField,
  datacatalog_TagField_GetTypes,
} from "../types/datacatalog_TagField";

export interface TagArgs {
  /*
Resources like Entry can have schemas associated with them. This scope allows users to attach tags to an
individual column based on that schema.
For attaching a tag to a nested column, use `.` to separate the column names. Example:
`outer_column.inner_column`
*/
  column?: string;

  /*
This maps the ID of a tag field to the value of and additional information about that field.
Valid field IDs are defined by the tag's template. A tag must have at least 1 field and at most 500 fields.
Structure is documented below.
*/
  fields?: Array<datacatalog_TagField>;

  /*
The name of the parent this tag is attached to. This can be the name of an entry or an entry group. If an entry group, the tag will be attached to
all entries in that group.
*/
  parent?: string;

  /*
The resource name of the tag template that this tag uses. Example:
projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId}
This field cannot be modified after creation.
*/
  template?: string;
}
export class Tag extends DS_Resource {
  /*
Resources like Entry can have schemas associated with them. This scope allows users to attach tags to an
individual column based on that schema.
For attaching a tag to a nested column, use `.` to separate the column names. Example:
`outer_column.inner_column`
*/
  public column?: string;

  /*
This maps the ID of a tag field to the value of and additional information about that field.
Valid field IDs are defined by the tag's template. A tag must have at least 1 field and at most 500 fields.
Structure is documented below.
*/
  public fields?: Array<datacatalog_TagField>;

  /*
The resource name of the tag in URL format. Example:
projects/{project_id}/locations/{location}/entrygroups/{entryGroupId}/entries/{entryId}/tags/{tag_id} or
projects/{project_id}/locations/{location}/entrygroups/{entryGroupId}/tags/{tag_id}
where tag_id is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name.
*/
  public name?: string;

  /*
The name of the parent this tag is attached to. This can be the name of an entry or an entry group. If an entry group, the tag will be attached to
all entries in that group.
*/
  public parent?: string;

  /*
The resource name of the tag template that this tag uses. Example:
projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId}
This field cannot be modified after creation.
*/
  public template?: string;

  // The display name of the tag template.
  public templateDisplayname?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "column",
        "Resources like Entry can have schemas associated with them. This scope allows users to attach tags to an\nindividual column based on that schema.\nFor attaching a tag to a nested column, use `.` to separate the column names. Example:\n`outer_column.inner_column`",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "fields",
        "This maps the ID of a tag field to the value of and additional information about that field.\nValid field IDs are defined by the tag's template. A tag must have at least 1 field and at most 500 fields.\nStructure is documented below.",
        () => datacatalog_TagField_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The name of the parent this tag is attached to. This can be the name of an entry or an entry group. If an entry group, the tag will be attached to\nall entries in that group.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "template",
        "The resource name of the tag template that this tag uses. Example:\nprojects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId}\nThis field cannot be modified after creation.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
