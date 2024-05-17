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
  Description?: string;

  /*
User-provided name of the Network firewall policy. The name should be unique in the project in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class NetworkFirewallPolicy extends Resource {
  // Total count of all firewall policy rule tuples. A firewall policy can not exceed a set number of tuples.
  public RuleTupleCount?: number;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
User-provided name of the Network firewall policy. The name should be unique in the project in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.


- - -
*/
  public Name?: string;

  // The unique identifier for the resource. This identifier is defined by the server.
  public NetworkFirewallPolicyId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Server-defined URL for the resource.
  public SelfLink?: string;

  // Server-defined URL for this resource with the resource id.
  public SelfLinkWithId?: string;

  // An optional description of this resource. Provide this property when you create the resource.
  public Description?: string;

  // Fingerprint of the resource. This field is used internally during updates of this resource.
  public Fingerprint?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when you create the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "User-provided name of the Network firewall policy. The name should be unique in the project in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
