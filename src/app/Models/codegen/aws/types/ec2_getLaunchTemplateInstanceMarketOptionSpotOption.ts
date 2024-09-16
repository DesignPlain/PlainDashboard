import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_getLaunchTemplateInstanceMarketOptionSpotOption {
  //
  validUntil?: string;

  //
  blockDurationMinutes?: number;

  //
  instanceInterruptionBehavior?: string;

  //
  maxPrice?: string;

  //
  spotInstanceType?: string;
}

export function ec2_getLaunchTemplateInstanceMarketOptionSpotOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'blockDurationMinutes',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'instanceInterruptionBehavior',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'maxPrice', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'spotInstanceType',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'validUntil',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
