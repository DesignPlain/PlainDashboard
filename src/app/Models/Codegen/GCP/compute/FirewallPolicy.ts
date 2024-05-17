import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface FirewallPolicyArgs {
  // An optional description of this resource. Provide this property when you create the resource.
  Description?: string;

  // The parent of the firewall policy.
  Parent?: string;

  /*
User-provided name of the Organization firewall policy. The name should be unique in the organization in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.



- - -
*/
  ShortName?: string;
}
export class FirewallPolicy extends Resource {
  // Server-defined URL for this resource with the resource id.
  public SelfLinkWithId?: string;

  /*
User-provided name of the Organization firewall policy. The name should be unique in the organization in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.



- - -
*/
  public ShortName?: string;

  // Fingerprint of the resource. This field is used internally during updates of this resource.
  public Fingerprint?: string;

  // The unique identifier for the resource. This identifier is defined by the server.
  public FirewallPolicyId?: string;

  // Name of the resource. It is a numeric ID allocated by GCP which uniquely identifies the Firewall Policy.
  public Name?: string;

  // The parent of the firewall policy.
  public Parent?: string;

  // Total count of all firewall policy rule tuples. A firewall policy can not exceed a set number of tuples.
  public RuleTupleCount?: number;

  // Server-defined URL for the resource.
  public SelfLink?: string;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  // An optional description of this resource. Provide this property when you create the resource.
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The parent of the firewall policy.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ShortName",
        "User-provided name of the Organization firewall policy. The name should be unique in the organization in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.\n\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when you create the resource.",
        [],
        false,
        false,
      ),
    ];
  }
}
