import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRuleProximity {
  // Number of characters after the finding to consider. Either this or window_before must be specified
  windowAfter?: number;

  // Number of characters before the finding to consider. Either this or window_after must be specified
  windowBefore?: number;
}

export function dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRuleProximity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'windowAfter',
      'Number of characters after the finding to consider. Either this or window_before must be specified',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'windowBefore',
      'Number of characters before the finding to consider. Either this or window_after must be specified',
      () => [],
      false,
      false,
    ),
  ];
}
