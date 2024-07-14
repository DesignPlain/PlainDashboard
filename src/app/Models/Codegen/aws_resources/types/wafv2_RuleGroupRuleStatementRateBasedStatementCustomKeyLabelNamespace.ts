import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyLabelNamespace {
  // The namespace to use for aggregation
  namespace?: string;
}

export function wafv2_RuleGroupRuleStatementRateBasedStatementCustomKeyLabelNamespace_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "The namespace to use for aggregation",
      [],
      true,
      false,
    ),
  ];
}
