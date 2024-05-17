import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface GcpUserAccessBindingArgs {
  // Required. Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"
  AccessLevels?: string;

  // Required. Immutable. Google Group id whose members are subject to this binding's restrictions. See "id" in the G Suite Directory API's Groups resource. If a group's email address/alias is changed, this resource will continue to point at the changed group. This field does not accept group email addresses or aliases. Example: "01d520gv4vjcrht"
  GroupKey?: string;

  /*
Required. ID of the parent organization.


- - -
*/
  OrganizationId?: string;
}
export class GcpUserAccessBinding extends Resource {
  // Required. Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"
  public AccessLevels?: string;

  // Required. Immutable. Google Group id whose members are subject to this binding's restrictions. See "id" in the G Suite Directory API's Groups resource. If a group's email address/alias is changed, this resource will continue to point at the changed group. This field does not accept group email addresses or aliases. Example: "01d520gv4vjcrht"
  public GroupKey?: string;

  // Immutable. Assigned by the server during creation. The last segment has an arbitrary length and has only URI unreserved characters (as defined by RFC 3986 Section 2.3). Should not be specified by the client during creation. Example: "organizations/256/gcpUserAccessBindings/b3-BhcX_Ud5N"
  public Name?: string;

  /*
Required. ID of the parent organization.


- - -
*/
  public OrganizationId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "AccessLevels",
        'Required. Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "GroupKey",
        'Required. Immutable. Google Group id whose members are subject to this binding\'s restrictions. See "id" in the G Suite Directory API\'s Groups resource. If a group\'s email address/alias is changed, this resource will continue to point at the changed group. This field does not accept group email addresses or aliases. Example: "01d520gv4vjcrht"',
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "OrganizationId",
        "Required. ID of the parent organization.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
