import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface EntryGroupArgs {
  // A short name to identify the entry group, for example, "analytics data - jan 2011".
  DisplayName?: string;

  /*
The id of the entry group to create. The id must begin with a letter or underscore,
contain only English letters, numbers and underscores, and be at most 64 characters.


- - -
*/
  EntryGroupId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // EntryGroup location region.
  Region?: string;

  // Entry group description, which can consist of several sentences or paragraphs that describe entry group contents.
  Description?: string;
}
export class EntryGroup extends Resource {
  // Entry group description, which can consist of several sentences or paragraphs that describe entry group contents.
  public Description?: string;

  // A short name to identify the entry group, for example, "analytics data - jan 2011".
  public DisplayName?: string;

  /*
The id of the entry group to create. The id must begin with a letter or underscore,
contain only English letters, numbers and underscores, and be at most 64 characters.


- - -
*/
  public EntryGroupId?: string;

  // The resource name of the entry group in URL format. Example: projects/{project}/locations/{location}/entryGroups/{entryGroupId}
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // EntryGroup location region.
  public Region?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "EntryGroupId",
        "The id of the entry group to create. The id must begin with a letter or underscore,\ncontain only English letters, numbers and underscores, and be at most 64 characters.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "EntryGroup location region.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Entry group description, which can consist of several sentences or paragraphs that describe entry group contents.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        'A short name to identify the entry group, for example, "analytics data - jan 2011".',
      ),
    ];
  }
}
