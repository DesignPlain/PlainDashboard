import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface FirewallPolicyAssociationArgs {
  // The target that the firewall policy is attached to.
  AttachmentTarget?: string;

  // The firewall policy ID of the association.
  FirewallPolicy?: string;

  /*
The name for an association.



- - -
*/
  Name?: string;
}
export class FirewallPolicyAssociation extends Resource {
  // The target that the firewall policy is attached to.
  public AttachmentTarget?: string;

  // The firewall policy ID of the association.
  public FirewallPolicy?: string;

  /*
The name for an association.



- - -
*/
  public Name?: string;

  // The short name of the firewall policy of the association.
  public ShortName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name for an association.\n\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "AttachmentTarget",
        "The target that the firewall policy is attached to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "FirewallPolicy",
        "The firewall policy ID of the association.",
        [],
        true,
        true,
      ),
    ];
  }
}
