import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleExcludeByHotwordProximity {
  // Number of characters after the finding to consider. Either this or window_before must be specified
  WindowAfter?: number;

  // Number of characters before the finding to consider. Either this or window_after must be specified
  WindowBefore?: number;
}

export function Dataloss_PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleExcludeByHotwordProximity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "WindowAfter",
      "Number of characters after the finding to consider. Either this or window_before must be specified",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "WindowBefore",
      "Number of characters before the finding to consider. Either this or window_after must be specified",
      [],
      false,
      false,
    ),
  ];
}
