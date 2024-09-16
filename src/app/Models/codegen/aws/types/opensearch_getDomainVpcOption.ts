import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

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
      InputType.Array,
      'securityGroupIds',
      'Security groups used by the domain.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'subnetIds',
      'Subnets used by the domain.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'vpcId',
      'VPC used by the domain.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'availabilityZones',
      'Availability zones used by the domain.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
