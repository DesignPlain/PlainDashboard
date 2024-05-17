import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataplex_DatascanDataQualitySpecRuleRangeExpectation {
  // The maximum column value allowed for a row to pass this validation. At least one of minValue and maxValue need to be provided.
  MaxValue?: string;

  // The minimum column value allowed for a row to pass this validation. At least one of minValue and maxValue need to be provided.
  MinValue?: string;

  /*
Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.
Only relevant if a maxValue has been defined. Default = false.
*/
  StrictMaxEnabled?: boolean;

  /*
Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.
Only relevant if a minValue has been defined. Default = false.
*/
  StrictMinEnabled?: boolean;
}

export function Dataplex_DatascanDataQualitySpecRuleRangeExpectation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "MaxValue",
      "The maximum column value allowed for a row to pass this validation. At least one of minValue and maxValue need to be provided.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MinValue",
      "The minimum column value allowed for a row to pass this validation. At least one of minValue and maxValue need to be provided.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "StrictMaxEnabled",
      "Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.\nOnly relevant if a maxValue has been defined. Default = false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "StrictMinEnabled",
      "Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.\nOnly relevant if a minValue has been defined. Default = false.",
      [],
      false,
      false,
    ),
  ];
}
