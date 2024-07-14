import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleIssueDetectionConfiguration {
  // Rule name.
  ruleName?: string;
}

export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleIssueDetectionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ruleName",
      "Rule name.",
      [],
      true,
      false,
    ),
  ];
}
