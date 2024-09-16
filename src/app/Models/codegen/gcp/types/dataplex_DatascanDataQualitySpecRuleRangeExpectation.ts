import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataplex_DatascanDataQualitySpecRuleRangeExpectation {
  // The maximum column value allowed for a row to pass this validation. At least one of minValue and maxValue need to be provided.
  maxValue?: string;

  // The minimum column value allowed for a row to pass this validation. At least one of minValue and maxValue need to be provided.
  minValue?: string;

  /*
Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.
Only relevant if a maxValue has been defined. Default = false.
*/
  strictMaxEnabled?: boolean;

  /*
Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.
Only relevant if a minValue has been defined. Default = false.
*/
  strictMinEnabled?: boolean;
}

export function dataplex_DatascanDataQualitySpecRuleRangeExpectation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'maxValue',
      'The maximum column value allowed for a row to pass this validation. At least one of minValue and maxValue need to be provided.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'minValue',
      'The minimum column value allowed for a row to pass this validation. At least one of minValue and maxValue need to be provided.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'strictMaxEnabled',
      "Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.\nOnly relevant if a maxValue has been defined. Default = false.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'strictMinEnabled',
      "Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.\nOnly relevant if a minValue has been defined. Default = false.",
      () => [],
      false,
      false,
    ),
  ];
}
