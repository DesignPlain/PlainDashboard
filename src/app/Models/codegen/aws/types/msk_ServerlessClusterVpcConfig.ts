import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface msk_ServerlessClusterVpcConfig {
  // Specifies up to five security groups that control inbound and outbound traffic for the serverless cluster.
  securityGroupIds?: Array<string>;

  // A list of subnets in at least two different Availability Zones that host your client applications.
  subnetIds?: Array<string>;
}

export function msk_ServerlessClusterVpcConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'subnetIds',
      'A list of subnets in at least two different Availability Zones that host your client applications.',
      () => InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'securityGroupIds',
      'Specifies up to five security groups that control inbound and outbound traffic for the serverless cluster.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
