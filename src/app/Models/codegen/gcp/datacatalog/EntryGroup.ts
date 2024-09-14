import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface EntryGroupArgs {
  // A short name to identify the entry group, for example, "analytics data - jan 2011".
  displayName?: string;

  /*
The id of the entry group to create. The id must begin with a letter or underscore,
contain only English letters, numbers and underscores, and be at most 64 characters.


- - -
*/
  entryGroupId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // EntryGroup location region.
  region?: string;

  // Entry group description, which can consist of several sentences or paragraphs that describe entry group contents.
  description?: string;
}
export class EntryGroup extends DS_Resource {
  // The resource name of the entry group in URL format. Example: projects/{project}/locations/{location}/entryGroups/{entryGroupId}
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // EntryGroup location region.
  public region?: string;

  // Entry group description, which can consist of several sentences or paragraphs that describe entry group contents.
  public description?: string;

  // A short name to identify the entry group, for example, "analytics data - jan 2011".
  public displayName?: string;

  /*
The id of the entry group to create. The id must begin with a letter or underscore,
contain only English letters, numbers and underscores, and be at most 64 characters.


- - -
*/
  public entryGroupId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "entryGroupId",
        "The id of the entry group to create. The id must begin with a letter or underscore,\ncontain only English letters, numbers and underscores, and be at most 64 characters.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "EntryGroup location region.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Entry group description, which can consist of several sentences or paragraphs that describe entry group contents.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        'A short name to identify the entry group, for example, "analytics data - jan 2011".',
        () => [],
        false,
        false,
      ),
    ];
  }
}
