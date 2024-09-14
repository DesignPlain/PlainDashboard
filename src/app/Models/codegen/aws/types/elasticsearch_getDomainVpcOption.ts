import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface elasticsearch_getDomainVpcOption {
  // The availability zones used by the domain.
  availabilityZones?: Array<string>;

  // The security groups used by the domain.
  securityGroupIds?: Array<string>;

  // The subnets used by the domain.
  subnetIds?: Array<string>;

  // The VPC used by the domain.
  vpcId?: string;
}

export function elasticsearch_getDomainVpcOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "availabilityZones",
      "The availability zones used by the domain.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "The security groups used by the domain.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "The subnets used by the domain.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcId",
      "The VPC used by the domain.",
      () => [],
      true,
      false,
    ),
  ];
}
