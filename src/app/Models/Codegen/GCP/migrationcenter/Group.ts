import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface GroupArgs {
  // Optional. The description of the group.
  description?: string;

  // Optional. User-friendly display name.
  displayName?: string;

  /*
Required. User specified ID for the group. It will become the last component of the group name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `a-z?`.


- - -
*/
  groupId?: string;

  /*
Labels as key value pairs.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The location of the group.
  location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class Group extends Resource {
  /*
Labels as key value pairs.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The location of the group.
  public location?: string;

  // Output only. The name of the group.
  public name?: string;

  // Output only. The timestamp when the group was last updated.
  public updateTime?: string;

  // Output only. The timestamp when the group was created.
  public createTime?: string;

  // Optional. User-friendly display name.
  public displayName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Required. User specified ID for the group. It will become the last component of the group name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `a-z?`.


- - -
*/
  public groupId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Optional. The description of the group.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Optional. The description of the group.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Optional. User-friendly display name.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "groupId",
        "Required. User specified ID for the group. It will become the last component of the group name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `a-z?`.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Labels as key value pairs.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the group.",
        [],
        true,
        true,
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
