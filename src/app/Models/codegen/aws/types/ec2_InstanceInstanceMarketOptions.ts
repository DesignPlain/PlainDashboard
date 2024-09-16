import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_InstanceInstanceMarketOptionsSpotOptions,
  ec2_InstanceInstanceMarketOptionsSpotOptions_GetTypes,
} from './ec2_InstanceInstanceMarketOptionsSpotOptions';

export interface ec2_InstanceInstanceMarketOptions {
  // Type of market for the instance. Valid values are `spot` and `capacity-block`. Defaults to `spot`. Required if `spot_options` is specified.
  marketType?: string;

  // Block to configure the options for Spot Instances. See Spot Options below for details on attributes.
  spotOptions?: ec2_InstanceInstanceMarketOptionsSpotOptions;
}

export function ec2_InstanceInstanceMarketOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'marketType',
      'Type of market for the instance. Valid values are `spot` and `capacity-block`. Defaults to `spot`. Required if `spot_options` is specified.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'spotOptions',
      'Block to configure the options for Spot Instances. See Spot Options below for details on attributes.',
      () => ec2_InstanceInstanceMarketOptionsSpotOptions_GetTypes(),
      false,
      true,
    ),
  ];
}
