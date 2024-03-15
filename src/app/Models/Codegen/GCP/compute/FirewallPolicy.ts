import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface FirewallPolicyArgs {
  /*
User-provided name of the Organization firewall policy. The name should be unique in the organization in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.



- - -
*/
  ShortName?: string;

  // An optional description of this resource. Provide this property when you create the resource.
  Description?: string;

  // The parent of the firewall policy.
  Parent?: string;
}
export class FirewallPolicy extends Resource {
  // An optional description of this resource. Provide this property when you create the resource.
  public Description?: string;

  // Fingerprint of the resource. This field is used internally during updates of this resource.
  public Fingerprint?: string;

  // Total count of all firewall policy rule tuples. A firewall policy can not exceed a set number of tuples.
  public RuleTupleCount?: number;

  // Server-defined URL for the resource.
  public SelfLink?: string;

  // Server-defined URL for this resource with the resource id.
  public SelfLinkWithId?: string;

  /*
User-provided name of the Organization firewall policy. The name should be unique in the organization in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.



- - -
*/
  public ShortName?: string;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  // The unique identifier for the resource. This identifier is defined by the server.
  public FirewallPolicyId?: string;

  // Name of the resource. It is a numeric ID allocated by GCP which uniquely identifies the Firewall Policy.
  public Name?: string;

  // The parent of the firewall policy.
  public Parent?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ShortName",
        "User-provided name of the Organization firewall policy. The name should be unique in the organization in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.\n\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when you create the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The parent of the firewall policy.",
      ),
    ];
  }
}
