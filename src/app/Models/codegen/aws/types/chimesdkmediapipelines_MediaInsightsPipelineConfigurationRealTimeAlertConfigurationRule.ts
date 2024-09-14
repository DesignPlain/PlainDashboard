import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleKeywordMatchConfiguration,
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleKeywordMatchConfiguration_GetTypes,
} from "./chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleKeywordMatchConfiguration";
import {
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleSentimentConfiguration,
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleSentimentConfiguration_GetTypes,
} from "./chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleSentimentConfiguration";
import {
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleIssueDetectionConfiguration,
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleIssueDetectionConfiguration_GetTypes,
} from "./chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleIssueDetectionConfiguration";

export interface chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRule {
  // Configuration for a keyword match rule.
  keywordMatchConfiguration?: chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleKeywordMatchConfiguration;

  // Configuration for a sentiment rule.
  sentimentConfiguration?: chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleSentimentConfiguration;

  // Rule type.
  type?: string;

  // Configuration for an issue detection rule.
  issueDetectionConfiguration?: chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleIssueDetectionConfiguration;
}

export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "issueDetectionConfiguration",
      "Configuration for an issue detection rule.",
      () =>
        chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleIssueDetectionConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "keywordMatchConfiguration",
      "Configuration for a keyword match rule.",
      () =>
        chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleKeywordMatchConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sentimentConfiguration",
      "Configuration for a sentiment rule.",
      () =>
        chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleSentimentConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Rule type.",
      () => [],
      true,
      false,
    ),
  ];
}
