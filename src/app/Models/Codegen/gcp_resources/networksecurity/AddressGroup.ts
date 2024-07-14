import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface AddressGroupArgs {
  // Name of the AddressGroup resource.
  name?: string;

  // The name of the parent this address group belongs to. Format: organizations/{organization_id} or projects/{project_id}.
  parent?: string;

  /*
The type of the Address Group. Possible values are "IPV4" or "IPV6".
Possible values are: `IPV4`, `IPV6`.
*/
  type?: string;

  // Capacity of the Address Group.
  capacity?: number;

  // Free-text description of the resource.
  description?: string;

  // List of items.
  items?: Array<string>;

  /*
Set of label tags associated with the AddressGroup resource.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The location of the gateway security policy.
The default value is `global`.


- - -
*/
  location?: string;
}
export class AddressGroup extends Resource {
  // Name of the AddressGroup resource.
  public name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
The type of the Address Group. Possible values are "IPV4" or "IPV6".
Possible values are: `IPV4`, `IPV6`.
*/
  public type?: string;

  /*
The timestamp when the resource was updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public updateTime?: string;

  // Free-text description of the resource.
  public description?: string;

  // List of items.
  public items?: Array<string>;

  /*
Set of label tags associated with the AddressGroup resource.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The location of the gateway security policy.
The default value is `global`.


- - -
*/
  public location?: string;

  // Capacity of the Address Group.
  public capacity?: number;

  /*
The timestamp when the resource was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z"
*/
  public createTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // The name of the parent this address group belongs to. Format: organizations/{organization_id} or projects/{project_id}.
  public parent?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the AddressGroup resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The name of the parent this address group belongs to. Format: organizations/{organization_id} or projects/{project_id}.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        'The type of the Address Group. Possible values are "IPV4" or "IPV6".\nPossible values are: `IPV4`, `IPV6`.',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "capacity",
        "Capacity of the Address Group.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Free-text description of the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "items",
        "List of items.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        'Set of label tags associated with the AddressGroup resource.\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the gateway security policy.\nThe default value is `global`.\n\n\n- - -",
        [],
        true,
        false,
      ),
    ];
  }
}
