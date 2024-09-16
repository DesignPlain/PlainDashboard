import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleProximity {
  // Number of characters after the finding to consider.
  windowAfter?: number;

  // Number of characters before the finding to consider.
  windowBefore?: number;
}

export function dataloss_PreventionInspectTemplateInspectConfigRuleSetRuleHotwordRuleProximity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'windowAfter',
      'Number of characters after the finding to consider.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'windowBefore',
      'Number of characters before the finding to consider.',
      () => [],
      false,
      false,
    ),
  ];
}
