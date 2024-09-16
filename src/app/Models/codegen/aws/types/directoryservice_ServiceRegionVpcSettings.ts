import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface directoryservice_ServiceRegionVpcSettings {
  // The identifiers of the subnets for the directory servers.
  subnetIds?: Array<string>;

  // The identifier of the VPC in which to create the directory.
  vpcId?: string;
}

export function directoryservice_ServiceRegionVpcSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'subnetIds',
      'The identifiers of the subnets for the directory servers.',
      () => InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'vpcId',
      'The identifier of the VPC in which to create the directory.',
      () => [],
      true,
      true,
    ),
  ];
}
