import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchSingleHeader {
  // The name of the query header to inspect. This setting must be provided as lower case characters.
  name?: string;
}

export function wafv2_RuleGroupRuleStatementRegexMatchStatementFieldToMatchSingleHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the query header to inspect. This setting must be provided as lower case characters.",
      [],
      true,
      false,
    ),
  ];
}
