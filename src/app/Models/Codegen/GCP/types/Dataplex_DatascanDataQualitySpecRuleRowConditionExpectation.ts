import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataplex_DatascanDataQualitySpecRuleRowConditionExpectation {
  // The SQL expression.
  sqlExpression?: string;
}

export function dataplex_DatascanDataQualitySpecRuleRowConditionExpectation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sqlExpression",
      "The SQL expression.",
      [],
      true,
      false,
    ),
  ];
}
