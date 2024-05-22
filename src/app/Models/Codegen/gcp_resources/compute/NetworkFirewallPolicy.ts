import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NetworkFirewallPolicyArgs {
  // An optional description of this resource. Provide this property when you create the resource.
  description?: string;

  /*
User-provided name of the Network firewall policy. The name should be unique in the project in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class NetworkFirewallPolicy extends Resource {
  // An optional description of this resource. Provide this property when you create the resource.
  public description?: string;

  // Fingerprint of the resource. This field is used internally during updates of this resource.
  public fingerprint?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Server-defined URL for the resource.
  public selfLink?: string;

  // Server-defined URL for this resource with the resource id.
  public selfLinkWithId?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
User-provided name of the Network firewall policy. The name should be unique in the project in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.


- - -
*/
  public name?: string;

  // The unique identifier for the resource. This identifier is defined by the server.
  public networkFirewallPolicyId?: string;

  // Total count of all firewall policy rule tuples. A firewall policy can not exceed a set number of tuples.
  public ruleTupleCount?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource. Provide this property when you create the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "User-provided name of the Network firewall policy. The name should be unique in the project in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.\n\n\n- - -",
        [],
        false,
        true,
      ),
    ];
  }
}
