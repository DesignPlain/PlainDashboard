import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface GroupArgs {
  // Optional. The description of the group.
  Description?: string;

  // Optional. User-friendly display name.
  DisplayName?: string;

  /*
Required. User specified ID for the group. It will become the last component of the group name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `a-z?`.


- - -
*/
  GroupId?: string;

  /*
Labels as key value pairs.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The location of the group.
  Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Group extends Resource {
  // Output only. The timestamp when the group was created.
  public CreateTime?: string;

  // Optional. User-friendly display name.
  public DisplayName?: string;

  /*
Labels as key value pairs.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Output only. The name of the group.
  public Name?: string;

  // Output only. The timestamp when the group was last updated.
  public UpdateTime?: string;

  // Optional. The description of the group.
  public Description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Required. User specified ID for the group. It will become the last component of the group name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `a-z?`.


- - -
*/
  public GroupId?: string;

  // The location of the group.
  public Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Optional. The description of the group.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Optional. User-friendly display name.",
      ),
      new DynamicUIProps(
        InputType.String,
        "GroupId",
        "Required. User specified ID for the group. It will become the last component of the group name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `a-z?`.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Labels as key value pairs.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the group.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
