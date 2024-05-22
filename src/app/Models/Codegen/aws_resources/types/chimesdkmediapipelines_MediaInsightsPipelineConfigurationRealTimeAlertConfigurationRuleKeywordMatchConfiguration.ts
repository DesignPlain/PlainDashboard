import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleKeywordMatchConfiguration {
  // Collection of keywords to match.
  keywords?: Array<string>;

  // Negate the rule.
  negate?: boolean;

  // Rule name.
  ruleName?: string;
}

export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRuleKeywordMatchConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "keywords",
      "Collection of keywords to match.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "negate",
      "Negate the rule.",
      [],
      false,
      false,
    ),
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
