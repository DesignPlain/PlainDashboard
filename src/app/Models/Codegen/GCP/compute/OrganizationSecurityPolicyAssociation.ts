import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface OrganizationSecurityPolicyAssociationArgs {
  // The resource that the security policy is attached to.
  attachmentId?: string;

  // The name for an association.
  name?: string;

  /*
The security policy ID of the association.


- - -
*/
  policyId?: string;
}
export class OrganizationSecurityPolicyAssociation extends Resource {
  // The resource that the security policy is attached to.
  public attachmentId?: string;

  // The display name of the security policy of the association.
  public displayName?: string;

  // The name for an association.
  public name?: string;

  /*
The security policy ID of the association.


- - -
*/
  public policyId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "attachmentId",
        "The resource that the security policy is attached to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name for an association.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyId",
        "The security policy ID of the association.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
