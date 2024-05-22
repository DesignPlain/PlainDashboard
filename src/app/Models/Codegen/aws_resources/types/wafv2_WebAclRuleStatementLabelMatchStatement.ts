import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface wafv2_WebAclRuleStatementLabelMatchStatement {
  // String to match against.
  key?: string;

  // Specify whether you want to match using the label name or just the namespace. Valid values are `LABEL` or `NAMESPACE`.
  scope?: string;
}

export function wafv2_WebAclRuleStatementLabelMatchStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "String to match against.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scope",
      "Specify whether you want to match using the label name or just the namespace. Valid values are `LABEL` or `NAMESPACE`.",
      [],
      true,
      false,
    ),
  ];
}
