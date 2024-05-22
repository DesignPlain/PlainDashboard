import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataplex_DatascanDataQualitySpecRuleSetExpectation {
  // Expected values for the column value.
  values?: Array<string>;
}

export function dataplex_DatascanDataQualitySpecRuleSetExpectation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Expected values for the column value.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
