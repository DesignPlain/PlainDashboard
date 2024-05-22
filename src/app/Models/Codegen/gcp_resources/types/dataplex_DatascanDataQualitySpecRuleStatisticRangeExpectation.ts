import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataplex_DatascanDataQualitySpecRuleStatisticRangeExpectation {
  /*
The maximum column statistic value allowed for a row to pass this validation.
At least one of minValue and maxValue need to be provided.
*/
  maxValue?: string;

  /*
The minimum column statistic value allowed for a row to pass this validation.
At least one of minValue and maxValue need to be provided.
*/
  minValue?: string;

  /*
column statistics.
Possible values are: `STATISTIC_UNDEFINED`, `MEAN`, `MIN`, `MAX`.
*/
  statistic?: string;

  /*
Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.
Only relevant if a maxValue has been defined. Default = false.
*/
  strictMaxEnabled?: boolean;

  /*
Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.
Only relevant if a minValue has been defined. Default = false.
*/
  strictMinEnabled?: boolean;
}

export function dataplex_DatascanDataQualitySpecRuleStatisticRangeExpectation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "maxValue",
      "The maximum column statistic value allowed for a row to pass this validation.\nAt least one of minValue and maxValue need to be provided.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "minValue",
      "The minimum column statistic value allowed for a row to pass this validation.\nAt least one of minValue and maxValue need to be provided.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "statistic",
      "column statistics.\nPossible values are: `STATISTIC_UNDEFINED`, `MEAN`, `MIN`, `MAX`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "strictMaxEnabled",
      "Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.\nOnly relevant if a maxValue has been defined. Default = false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "strictMinEnabled",
      "Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.\nOnly relevant if a minValue has been defined. Default = false.",
      [],
      false,
      false,
    ),
  ];
}
