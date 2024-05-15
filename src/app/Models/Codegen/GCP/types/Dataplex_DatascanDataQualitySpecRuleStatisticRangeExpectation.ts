import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataplex_DatascanDataQualitySpecRuleStatisticRangeExpectation {
  /*
The minimum column statistic value allowed for a row to pass this validation.
At least one of minValue and maxValue need to be provided.
*/
  MinValue?: string;

  /*
column statistics.
Possible values are: `STATISTIC_UNDEFINED`, `MEAN`, `MIN`, `MAX`.
*/
  Statistic?: string;

  /*
Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.
Only relevant if a maxValue has been defined. Default = false.
*/
  StrictMaxEnabled?: boolean;

  /*
Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.
Only relevant if a minValue has been defined. Default = false.
*/
  StrictMinEnabled?: boolean;

  /*
The maximum column statistic value allowed for a row to pass this validation.
At least one of minValue and maxValue need to be provided.
*/
  MaxValue?: string;
}

export function Dataplex_DatascanDataQualitySpecRuleStatisticRangeExpectation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "MinValue",
      "The minimum column statistic value allowed for a row to pass this validation.\nAt least one of minValue and maxValue need to be provided.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Statistic",
      "column statistics.\nPossible values are: `STATISTIC_UNDEFINED`, `MEAN`, `MIN`, `MAX`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "StrictMaxEnabled",
      "Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.\nOnly relevant if a maxValue has been defined. Default = false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "StrictMinEnabled",
      "Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.\nOnly relevant if a minValue has been defined. Default = false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MaxValue",
      "The maximum column statistic value allowed for a row to pass this validation.\nAt least one of minValue and maxValue need to be provided.",
      [],
      false,
      false,
    ),
  ];
}
