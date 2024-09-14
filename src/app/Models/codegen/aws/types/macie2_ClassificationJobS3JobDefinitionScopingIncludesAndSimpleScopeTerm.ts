import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface macie2_ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm {
  // The operator to use in a condition. Valid values are: `EQ`, `GT`, `GTE`, `LT`, `LTE`, `NE`, `CONTAINS`, `STARTS_WITH`
  comparator?: string;

  // The object property to use in the condition.
  key?: string;

  // An array that lists the values to use in the condition.
  values?: Array<string>;
}

export function macie2_ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "comparator",
      "The operator to use in a condition. Valid values are: `EQ`, `GT`, `GTE`, `LT`, `LTE`, `NE`, `CONTAINS`, `STARTS_WITH`",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The object property to use in the condition.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "An array that lists the values to use in the condition.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
