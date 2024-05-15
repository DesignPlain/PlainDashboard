import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface OrganizationSecurityPolicyAssociationArgs {
  // The name for an association.
  Name?: string;

  /*
The security policy ID of the association.


- - -
*/
  PolicyId?: string;

  // The resource that the security policy is attached to.
  AttachmentId?: string;
}
export class OrganizationSecurityPolicyAssociation extends Resource {
  // The resource that the security policy is attached to.
  public AttachmentId?: string;

  // The display name of the security policy of the association.
  public DisplayName?: string;

  // The name for an association.
  public Name?: string;

  /*
The security policy ID of the association.


- - -
*/
  public PolicyId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "AttachmentId",
        "The resource that the security policy is attached to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name for an association.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "PolicyId",
        "The security policy ID of the association.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
