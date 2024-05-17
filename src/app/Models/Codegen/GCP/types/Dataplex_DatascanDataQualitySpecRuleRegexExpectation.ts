import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataplex_DatascanDataQualitySpecRuleRegexExpectation {
  // A regular expression the column value is expected to match.
  Regex?: string;
}

export function Dataplex_DatascanDataQualitySpecRuleRegexExpectation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Regex",
      "A regular expression the column value is expected to match.",
      [],
      true,
      false,
    ),
  ];
}
