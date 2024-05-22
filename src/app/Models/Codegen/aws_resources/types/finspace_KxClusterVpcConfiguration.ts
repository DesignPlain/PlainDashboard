import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface finspace_KxClusterVpcConfiguration {
  // IP address type for cluster network configuration parameters. The following type is available: IP_V4 - IP address version 4.
  ipAddressType?: string;

  /*
Unique identifier of the VPC security group applied to the VPC endpoint ENI for the cluster.
- `subnet_ids `- (Required) Identifier of the subnet that the Privatelink VPC endpoint uses to connect to the cluster.
*/
  securityGroupIds?: Array<string>;

  //
  subnetIds?: Array<string>;

  // Identifier of the VPC endpoint
  vpcId?: string;
}

export function finspace_KxClusterVpcConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "vpcId",
      "Identifier of the VPC endpoint",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipAddressType",
      "IP address type for cluster network configuration parameters. The following type is available: IP_V4 - IP address version 4.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "Unique identifier of the VPC security group applied to the VPC endpoint ENI for the cluster.\n* `subnet_ids `- (Required) Identifier of the subnet that the Privatelink VPC endpoint uses to connect to the cluster.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
