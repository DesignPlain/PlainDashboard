import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface elasticsearch_DomainVpcOptions {
  // If the domain was created inside a VPC, the names of the availability zones the configured `subnet_ids` were created inside.
  availabilityZones?: Array<string>;

  // List of VPC Security Group IDs to be applied to the Elasticsearch domain endpoints. If omitted, the default Security Group for the VPC will be used.
  securityGroupIds?: Array<string>;

  // List of VPC Subnet IDs for the Elasticsearch domain endpoints to be created in.
  subnetIds?: Array<string>;

  // If the domain was created inside a VPC, the ID of the VPC.
  vpcId?: string;
}

export function elasticsearch_DomainVpcOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'availabilityZones',
      'If the domain was created inside a VPC, the names of the availability zones the configured `subnet_ids` were created inside.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'securityGroupIds',
      'List of VPC Security Group IDs to be applied to the Elasticsearch domain endpoints. If omitted, the default Security Group for the VPC will be used.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'subnetIds',
      'List of VPC Subnet IDs for the Elasticsearch domain endpoints to be created in.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'vpcId',
      'If the domain was created inside a VPC, the ID of the VPC.',
      () => [],
      false,
      false,
    ),
  ];
}
