import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataplex_DatascanDataQualitySpecRuleRowConditionExpectation {
  // The SQL expression.
  SqlExpression?: string;
}

export function Dataplex_DatascanDataQualitySpecRuleRowConditionExpectation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SqlExpression",
      "The SQL expression.",
      [],
      true,
      false,
    ),
  ];
}
