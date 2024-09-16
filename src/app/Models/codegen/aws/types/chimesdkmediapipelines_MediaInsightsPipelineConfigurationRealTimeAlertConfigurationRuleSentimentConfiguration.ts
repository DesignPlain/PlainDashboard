import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleSentimentConfiguration {
  // Rule name.
  ruleName?: string;

  // Sentiment type to match.
  sentimentType?: string;

  // Analysis interval.
  timePeriod?: number;
}

export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleSentimentConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'ruleName',
      'Rule name.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'sentimentType',
      'Sentiment type to match.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'timePeriod',
      'Analysis interval.',
      () => [],
      true,
      false,
    ),
  ];
}
