import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface directoryservice_getDirectoryVpcSetting {
  //
  availabilityZones?: Array<string>;

  // Identifiers of the subnets for the connector servers (2 subnets in 2 different AZs).
  subnetIds?: Array<string>;

  // ID of the VPC that the connector is in.
  vpcId?: string;
}

export function directoryservice_getDirectoryVpcSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'availabilityZones',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'subnetIds',
      'Identifiers of the subnets for the connector servers (2 subnets in 2 different AZs).',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'vpcId',
      'ID of the VPC that the connector is in.',
      () => [],
      true,
      false,
    ),
  ];
}
