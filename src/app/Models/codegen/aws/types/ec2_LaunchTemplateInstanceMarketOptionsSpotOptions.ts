import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_LaunchTemplateInstanceMarketOptionsSpotOptions {
  /*
The behavior when a Spot Instance is interrupted. Can be `hibernate`,
`stop`, or `terminate`. (Default: `terminate`).
*/
  instanceInterruptionBehavior?: string;

  // The maximum hourly price you're willing to pay for the Spot Instances.
  maxPrice?: string;

  // The Spot Instance request type. Can be `one-time`, or `persistent`.
  spotInstanceType?: string;

  // The end date of the request.
  validUntil?: string;

  // The required duration in minutes. This value must be a multiple of 60.
  blockDurationMinutes?: number;
}

export function ec2_LaunchTemplateInstanceMarketOptionsSpotOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'maxPrice',
      "The maximum hourly price you're willing to pay for the Spot Instances.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'spotInstanceType',
      'The Spot Instance request type. Can be `one-time`, or `persistent`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'validUntil',
      'The end date of the request.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'blockDurationMinutes',
      'The required duration in minutes. This value must be a multiple of 60.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'instanceInterruptionBehavior',
      'The behavior when a Spot Instance is interrupted. Can be `hibernate`,\n`stop`, or `terminate`. (Default: `terminate`).',
      () => [],
      false,
      false,
    ),
  ];
}
