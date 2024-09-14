import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface worklink_FleetNetwork {
  /*
A list of security group IDs associated with access to the provided subnets.

--identity_provider-- requires the following:

> --NOTE:-- `identity_provider` cannot be removed without force recreating.
*/
  securityGroupIds?: Array<string>;

  // A list of subnet IDs used for X-ENI connections from Amazon WorkLink rendering containers.
  subnetIds?: Array<string>;

  // The VPC ID with connectivity to associated websites.
  vpcId?: string;
}

export function worklink_FleetNetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "A list of security group IDs associated with access to the provided subnets.\n\n**identity_provider** requires the following:\n\n> **NOTE:** `identity_provider` cannot be removed without force recreating.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "A list of subnet IDs used for X-ENI connections from Amazon WorkLink rendering containers.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcId",
      "The VPC ID with connectivity to associated websites.",
      () => [],
      true,
      false,
    ),
  ];
}
