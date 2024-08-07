import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface wafv2_WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition {
  // Action setting that a log record must contain in order to meet the condition. Valid values for `action` are `ALLOW`, `BLOCK`, and `COUNT`.
  action?: string;
}

export function wafv2_WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "action",
      "Action setting that a log record must contain in order to meet the condition. Valid values for `action` are `ALLOW`, `BLOCK`, and `COUNT`.",
      [],
      true,
      false,
    ),
  ];
}
