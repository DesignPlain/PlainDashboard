import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclLoggingConfigurationLoggingFilterFilter,
  wafv2_WebAclLoggingConfigurationLoggingFilterFilter_GetTypes,
} from "./wafv2_WebAclLoggingConfigurationLoggingFilterFilter";

export interface wafv2_WebAclLoggingConfigurationLoggingFilter {
  // Default handling for logs that don't match any of the specified filtering conditions. Valid values for `default_behavior` are `KEEP` or `DROP`.
  defaultBehavior?: string;

  // Filter(s) that you want to apply to the logs. See Filter below for more details.
  filters?: Array<wafv2_WebAclLoggingConfigurationLoggingFilterFilter>;
}

export function wafv2_WebAclLoggingConfigurationLoggingFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "defaultBehavior",
      "Default handling for logs that don't match any of the specified filtering conditions. Valid values for `default_behavior` are `KEEP` or `DROP`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "filters",
      "Filter(s) that you want to apply to the logs. See Filter below for more details.",
      wafv2_WebAclLoggingConfigurationLoggingFilterFilter_GetTypes(),
      true,
      false,
    ),
  ];
}
