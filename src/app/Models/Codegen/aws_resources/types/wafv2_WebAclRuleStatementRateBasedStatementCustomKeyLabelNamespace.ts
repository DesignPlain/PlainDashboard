import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface wafv2_WebAclRuleStatementRateBasedStatementCustomKeyLabelNamespace {
  // The namespace to use for aggregation
  namespace?: string;
}

export function wafv2_WebAclRuleStatementRateBasedStatementCustomKeyLabelNamespace_GetTypes(): DynamicUIProps[] {
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
