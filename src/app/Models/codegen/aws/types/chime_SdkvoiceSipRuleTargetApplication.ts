import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface chime_SdkvoiceSipRuleTargetApplication {
  // The AWS Region of the target application.
  awsRegion?: string;

  // Priority of the SIP media application in the target list.
  priority?: number;

  // The SIP media application ID.
  sipMediaApplicationId?: string;
}

export function chime_SdkvoiceSipRuleTargetApplication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'awsRegion',
      'The AWS Region of the target application.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'priority',
      'Priority of the SIP media application in the target list.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'sipMediaApplicationId',
      'The SIP media application ID.',
      () => [],
      true,
      false,
    ),
  ];
}
