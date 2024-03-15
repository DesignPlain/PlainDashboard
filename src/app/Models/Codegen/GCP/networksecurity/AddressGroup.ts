import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AddressGroupArgs {
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
}
export class AddressGroup extends Resource {
  // List of items.
  public Items?: Array<string>;

  /*
The location of the gateway security policy.
The default value is `global`.


- - -
*/
  public Location?: string;

  /*
The timestamp when the resource was updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  // Free-text description of the resource.
  public Description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Set of label tags associated with the AddressGroup resource.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Name of the AddressGroup resource.
  public Name?: string;

  // The name of the parent this address group belongs to. Format: organizations/{organization_id} or projects/{project_id}.
  public Parent?: string;

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

  // Capacity of the Address Group.
  public Capacity?: number;

  /*
The timestamp when the resource was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z"
*/
  public CreateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.DropDown, "Items", "List of items."),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        'Set of label tags associated with the AddressGroup resource.\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the gateway security policy.\nThe default value is `global`.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the AddressGroup resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The name of the parent this address group belongs to. Format: organizations/{organization_id} or projects/{project_id}.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        'The type of the Address Group. Possible values are "IPV4" or "IPV6".\nPossible values are: `IPV4`, `IPV6`.',
      ),
      new DynamicUIProps(
        InputType.Number,
        "Capacity",
        "Capacity of the Address Group.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Free-text description of the resource.",
      ),
    ];
  }
}
