import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface wafv2_RuleGroupRuleActionBlockCustomResponseResponseHeader {
  // A friendly name of the rule group.
  name?: string;

  // The value of the custom header.
  value?: string;
}

export function wafv2_RuleGroupRuleActionBlockCustomResponseResponseHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "A friendly name of the rule group.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of the custom header.",
      [],
      true,
      false,
    ),
  ];
}
