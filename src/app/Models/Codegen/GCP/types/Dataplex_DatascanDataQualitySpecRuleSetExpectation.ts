import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataplex_DatascanDataQualitySpecRuleSetExpectation {
  // Expected values for the column value.
  Values?: Array<string>;
}

export function Dataplex_DatascanDataQualitySpecRuleSetExpectation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Values",
      "Expected values for the column value.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
