import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface wafv2_RuleGroupRuleStatementLabelMatchStatement {
  // Specify whether you want to match using the label name or just the namespace. Valid values are `LABEL` or `NAMESPACE`.
  scope?: string;

  // The string to match against.
  key?: string;
}

export function wafv2_RuleGroupRuleStatementLabelMatchStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "scope",
      "Specify whether you want to match using the label name or just the namespace. Valid values are `LABEL` or `NAMESPACE`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The string to match against.",
      [],
      true,
      false,
    ),
  ];
}
