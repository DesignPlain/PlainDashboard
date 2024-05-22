import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface opensearch_DomainVpcOptions {
  //
  availabilityZones?: Array<string>;

  // List of VPC Security Group IDs to be applied to the OpenSearch domain endpoints. If omitted, the default Security Group for the VPC will be used.
  securityGroupIds?: Array<string>;

  // List of VPC Subnet IDs for the OpenSearch domain endpoints to be created in.
  subnetIds?: Array<string>;

  //
  vpcId?: string;
}

export function opensearch_DomainVpcOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "availabilityZones",
      "",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "List of VPC Security Group IDs to be applied to the OpenSearch domain endpoints. If omitted, the default Security Group for the VPC will be used.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "List of VPC Subnet IDs for the OpenSearch domain endpoints to be created in.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "vpcId", "", [], false, false),
  ];
}
