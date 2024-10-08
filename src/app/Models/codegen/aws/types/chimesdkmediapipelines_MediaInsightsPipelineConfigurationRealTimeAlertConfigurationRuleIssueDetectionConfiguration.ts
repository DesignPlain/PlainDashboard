import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleIssueDetectionConfiguration {
  // Rule name.
  ruleName?: string;
}

export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleIssueDetectionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'ruleName',
      'Rule name.',
      () => [],
      true,
      false,
    ),
  ];
}
