import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface AuthorizationRuleArgs {
  // The ID of the Client VPN endpoint.
  clientVpnEndpointId?: string;

  // A brief description of the authorization rule.
  description?: string;

  // The IPv4 address range, in CIDR notation, of the network to which the authorization rule applies.
  targetNetworkCidr?: string;

  // The ID of the group to which the authorization rule grants access. One of `access_group_id` or `authorize_all_groups` must be set.
  accessGroupId?: string;

  // Indicates whether the authorization rule grants access to all clients. One of `access_group_id` or `authorize_all_groups` must be set.
  authorizeAllGroups?: boolean;
}
export class AuthorizationRule extends DS_Resource {
  // The ID of the group to which the authorization rule grants access. One of `access_group_id` or `authorize_all_groups` must be set.
  public accessGroupId?: string;

  // Indicates whether the authorization rule grants access to all clients. One of `access_group_id` or `authorize_all_groups` must be set.
  public authorizeAllGroups?: boolean;

  // The ID of the Client VPN endpoint.
  public clientVpnEndpointId?: string;

  // A brief description of the authorization rule.
  public description?: string;

  // The IPv4 address range, in CIDR notation, of the network to which the authorization rule applies.
  public targetNetworkCidr?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "authorizeAllGroups",
        "Indicates whether the authorization rule grants access to all clients. One of `access_group_id` or `authorize_all_groups` must be set.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "clientVpnEndpointId",
        "The ID of the Client VPN endpoint.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A brief description of the authorization rule.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetNetworkCidr",
        "The IPv4 address range, in CIDR notation, of the network to which the authorization rule applies.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "accessGroupId",
        "The ID of the group to which the authorization rule grants access. One of `access_group_id` or `authorize_all_groups` must be set.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
