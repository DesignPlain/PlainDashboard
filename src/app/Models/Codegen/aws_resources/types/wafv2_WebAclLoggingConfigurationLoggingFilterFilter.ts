import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclLoggingConfigurationLoggingFilterFilterCondition,
  wafv2_WebAclLoggingConfigurationLoggingFilterFilterCondition_GetTypes,
} from "./wafv2_WebAclLoggingConfigurationLoggingFilterFilterCondition";

export interface wafv2_WebAclLoggingConfigurationLoggingFilterFilter {
  // Parameter that determines how to handle logs that meet the conditions and requirements of the filter. The valid values for `behavior` are `KEEP` or `DROP`.
  behavior?: string;

  // Match condition(s) for the filter. See Condition below for more details.
  conditions?: Array<wafv2_WebAclLoggingConfigurationLoggingFilterFilterCondition>;

  // Logic to apply to the filtering conditions. You can specify that a log must match all conditions or at least one condition in order to satisfy the filter. Valid values for `requirement` are `MEETS_ALL` or `MEETS_ANY`.
  requirement?: string;
}

export function wafv2_WebAclLoggingConfigurationLoggingFilterFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "conditions",
      "Match condition(s) for the filter. See Condition below for more details.",
      wafv2_WebAclLoggingConfigurationLoggingFilterFilterCondition_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "requirement",
      "Logic to apply to the filtering conditions. You can specify that a log must match all conditions or at least one condition in order to satisfy the filter. Valid values for `requirement` are `MEETS_ALL` or `MEETS_ANY`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "behavior",
      "Parameter that determines how to handle logs that meet the conditions and requirements of the filter. The valid values for `behavior` are `KEEP` or `DROP`.",
      [],
      true,
      false,
    ),
  ];
}
