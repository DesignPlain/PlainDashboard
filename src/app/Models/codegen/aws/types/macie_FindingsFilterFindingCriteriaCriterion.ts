import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface macie_FindingsFilterFindingCriteriaCriterion {
  // The value for the property doesn't match (doesn't equal) the specified value. If you specify multiple values, Amazon Macie uses OR logic to join the values.
  neqs?: Array<string>;

  // The value for the property exclusively matches (equals an exact match for) all the specified values. If you specify multiple values, Amazon Macie uses AND logic to join the values.
  eqExactMatches?: Array<string>;

  // The value for the property matches (equals) the specified value. If you specify multiple values, Amazon Macie uses OR logic to join the values.
  eqs?: Array<string>;

  // The name of the field to be evaluated.
  field?: string;

  // The value for the property is greater than the specified value.
  gt?: string;

  // The value for the property is greater than or equal to the specified value.
  gte?: string;

  // The value for the property is less than the specified value.
  lt?: string;

  // The value for the property is less than or equal to the specified value.
  lte?: string;
}

export function macie_FindingsFilterFindingCriteriaCriterion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "neqs",
      "The value for the property doesn't match (doesn't equal) the specified value. If you specify multiple values, Amazon Macie uses OR logic to join the values.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "eqExactMatches",
      "The value for the property exclusively matches (equals an exact match for) all the specified values. If you specify multiple values, Amazon Macie uses AND logic to join the values.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "eqs",
      "The value for the property matches (equals) the specified value. If you specify multiple values, Amazon Macie uses OR logic to join the values.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "field",
      "The name of the field to be evaluated.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gt",
      "The value for the property is greater than the specified value.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gte",
      "The value for the property is greater than or equal to the specified value.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lt",
      "The value for the property is less than the specified value.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lte",
      "The value for the property is less than or equal to the specified value.",
      () => [],
      false,
      false,
    ),
  ];
}
