import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationVpcConfiguration {
  //
  vpcConfigurationId?: string;

  //
  vpcId?: string;

  // The Security Group IDs used by the VPC configuration.
  securityGroupIds?: Array<string>;

  // The Subnet IDs used by the VPC configuration.
  subnetIds?: Array<string>;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationVpcConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'subnetIds',
      'The Subnet IDs used by the VPC configuration.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'vpcConfigurationId',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'vpcId', '', () => [], false, false),
    new DynamicUIProps(
      InputType.Array,
      'securityGroupIds',
      'The Security Group IDs used by the VPC configuration.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
