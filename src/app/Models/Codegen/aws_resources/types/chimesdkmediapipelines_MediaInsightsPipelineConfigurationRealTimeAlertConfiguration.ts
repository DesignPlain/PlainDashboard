import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRule,
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRule_GetTypes,
} from "./chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRule";

export interface chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfiguration {
  // Disables real time alert rules.
  disabled?: boolean;

  // Collection of real time alert rules
  rules?: Array<chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRule>;
}

export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "disabled",
      "Disables real time alert rules.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "rules",
      "Collection of real time alert rules",
      chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfigurationRule_GetTypes(),
      true,
      false,
    ),
  ];
}
