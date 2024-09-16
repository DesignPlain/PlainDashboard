import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface FirewallPolicyArgs {
  // An optional description of this resource. Provide this property when you create the resource.
  description?: string;

  // The parent of the firewall policy.
  parent?: string;

  /*
User-provided name of the Organization firewall policy. The name should be unique in the organization in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.



- - -
*/
  shortName?: string;
}
export class FirewallPolicy extends DS_Resource {
  // Server-defined URL for this resource with the resource id.
  public selfLinkWithId?: string;

  // An optional description of this resource. Provide this property when you create the resource.
  public description?: string;

  // Fingerprint of the resource. This field is used internally during updates of this resource.
  public fingerprint?: string;

  // The unique identifier for the resource. This identifier is defined by the server.
  public firewallPolicyId?: string;

  // The parent of the firewall policy.
  public parent?: string;

  // Total count of all firewall policy rule tuples. A firewall policy can not exceed a set number of tuples.
  public ruleTupleCount?: number;

  // Server-defined URL for the resource.
  public selfLink?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  // Name of the resource. It is a numeric ID allocated by GCP which uniquely identifies the Firewall Policy.
  public name?: string;

  /*
User-provided name of the Organization firewall policy. The name should be unique in the organization in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.



- - -
*/
  public shortName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'An optional description of this resource. Provide this property when you create the resource.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'parent',
        'The parent of the firewall policy.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'shortName',
        'User-provided name of the Organization firewall policy. The name should be unique in the organization in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression a-z? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.\n\n\n\n- - -',
        () => [],
        true,
        true,
      ),
    ];
  }
}
