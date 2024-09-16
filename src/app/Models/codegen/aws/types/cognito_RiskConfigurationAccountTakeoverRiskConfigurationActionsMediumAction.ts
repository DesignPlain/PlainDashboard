import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction {
  //
  eventAction?: string;

  // Whether to send a notification.
  notify?: boolean;
}

export function cognito_RiskConfigurationAccountTakeoverRiskConfigurationActionsMediumAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'eventAction',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'notify',
      'Whether to send a notification.',
      () => [],
      true,
      false,
    ),
  ];
}
