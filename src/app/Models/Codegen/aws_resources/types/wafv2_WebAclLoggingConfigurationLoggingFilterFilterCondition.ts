import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition,
  wafv2_WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition_GetTypes,
} from "./wafv2_WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition";
import {
  wafv2_WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition,
  wafv2_WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition_GetTypes,
} from "./wafv2_WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition";

export interface wafv2_WebAclLoggingConfigurationLoggingFilterFilterCondition {
  // Configuration for a single action condition. See Action Condition below for more details.
  actionCondition?: wafv2_WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition;

  // Condition for a single label name. See Label Name Condition below for more details.
  labelNameCondition?: wafv2_WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition;
}

export function wafv2_WebAclLoggingConfigurationLoggingFilterFilterCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "actionCondition",
      "Configuration for a single action condition. See Action Condition below for more details.",
      wafv2_WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "labelNameCondition",
      "Condition for a single label name. See Label Name Condition below for more details.",
      wafv2_WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition_GetTypes(),
      false,
      false,
    ),
  ];
}
