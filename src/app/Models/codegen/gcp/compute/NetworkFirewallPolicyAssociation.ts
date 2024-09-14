import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface NetworkFirewallPolicyAssociationArgs {
  // The project for the resource
  project?: string;

  // The target that the firewall policy is attached to.
  attachmentTarget?: string;

  // The firewall policy ID of the association.
  firewallPolicy?: string;

  /*
The name for an association.



- - -
*/
  name?: string;
}
export class NetworkFirewallPolicyAssociation extends DS_Resource {
  // The short name of the firewall policy of the association.
  public shortName?: string;

  // The target that the firewall policy is attached to.
  public attachmentTarget?: string;

  // The firewall policy ID of the association.
  public firewallPolicy?: string;

  /*
The name for an association.



- - -
*/
  public name?: string;

  // The project for the resource
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project for the resource",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "attachmentTarget",
        "The target that the firewall policy is attached to.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "firewallPolicy",
        "The firewall policy ID of the association.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name for an association.\n\n\n\n- - -",
        () => [],
        false,
        true,
      ),
    ];
  }
}