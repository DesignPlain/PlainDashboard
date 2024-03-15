import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NetworkFirewallPolicyAssociationArgs {
  // The target that the firewall policy is attached to.
  AttachmentTarget?: string;

  // The firewall policy ID of the association.
  FirewallPolicy?: string;

  /*
The name for an association.



- - -
*/
  Name?: string;

  // The project for the resource
  Project?: string;
}
export class NetworkFirewallPolicyAssociation extends Resource {
  // The target that the firewall policy is attached to.
  public AttachmentTarget?: string;

  // The firewall policy ID of the association.
  public FirewallPolicy?: string;

  /*
The name for an association.



- - -
*/
  public Name?: string;

  // The project for the resource
  public Project?: string;

  // The short name of the firewall policy of the association.
  public ShortName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "AttachmentTarget",
        "The target that the firewall policy is attached to.",
      ),
      new DynamicUIProps(
        InputType.String,
        "FirewallPolicy",
        "The firewall policy ID of the association.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name for an association.\n\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
      ),
    ];
  }
}
