import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AddressGroupArgs {
  // Name of the AddressGroup resource.
  Name?: string;

  // The name of the parent this address group belongs to. Format: organizations/{organization_id} or projects/{project_id}.
  Parent?: string;

  /*
The type of the Address Group. Possible values are "IPV4" or "IPV6".
Possible values are: `IPV4`, `IPV6`.
*/
  Type?: string;

  // Capacity of the Address Group.
  Capacity?: number;

  // Free-text description of the resource.
  Description?: string;

  // List of items.
  Items?: Array<string>;

  /*
Set of label tags associated with the AddressGroup resource.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The location of the gateway security policy.
The default value is `global`.


- - -
*/
  Location?: string;
}
export class AddressGroup extends Resource {
  // Free-text description of the resource.
  public Description?: string;

  /*
Set of label tags associated with the AddressGroup resource.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The location of the gateway security policy.
The default value is `global`.


- - -
*/
  public Location?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
The type of the Address Group. Possible values are "IPV4" or "IPV6".
Possible values are: `IPV4`, `IPV6`.
*/
  public Type?: string;

  /*
The timestamp when the resource was updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  /*
The timestamp when the resource was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z"
*/
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // List of items.
  public Items?: Array<string>;

  // Name of the AddressGroup resource.
  public Name?: string;

  // The name of the parent this address group belongs to. Format: organizations/{organization_id} or projects/{project_id}.
  public Parent?: string;

  // Capacity of the Address Group.
  public Capacity?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the gateway security policy.\nThe default value is `global`.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the AddressGroup resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The name of the parent this address group belongs to. Format: organizations/{organization_id} or projects/{project_id}.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        'The type of the Address Group. Possible values are "IPV4" or "IPV6".\nPossible values are: `IPV4`, `IPV6`.',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "Capacity",
        "Capacity of the Address Group.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Free-text description of the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Items",
        "List of items.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        'Set of label tags associated with the AddressGroup resource.\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
