import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface opensearch_getDomainVpcOption {
  // Availability zones used by the domain.
  availabilityZones?: Array<string>;

  // Security groups used by the domain.
  securityGroupIds?: Array<string>;

  // Subnets used by the domain.
  subnetIds?: Array<string>;

  // VPC used by the domain.
  vpcId?: string;
}

export function opensearch_getDomainVpcOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "vpcId",
      "VPC used by the domain.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "availabilityZones",
      "Availability zones used by the domain.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "Security groups used by the domain.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "Subnets used by the domain.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
