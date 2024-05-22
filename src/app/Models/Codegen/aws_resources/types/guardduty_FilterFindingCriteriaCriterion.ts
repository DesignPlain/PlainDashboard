import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface guardduty_FilterFindingCriteriaCriterion {
  // List of string values to be evaluated.
  notEquals?: Array<string>;

  // List of string values to be evaluated.
  equals?: Array<string>;

  // The name of the field to be evaluated. The full list of field names can be found in [AWS documentation](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_filter-findings.html#filter_criteria).
  field?: string;

  // A value to be evaluated. Accepts either an integer or a date in [RFC 3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).
  greaterThan?: string;

  // A value to be evaluated. Accepts either an integer or a date in [RFC 3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).
  greaterThanOrEqual?: string;

  // A value to be evaluated. Accepts either an integer or a date in [RFC 3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).
  lessThan?: string;

  // A value to be evaluated. Accepts either an integer or a date in [RFC 3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).
  lessThanOrEqual?: string;
}

export function guardduty_FilterFindingCriteriaCriterion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "notEquals",
      "List of string values to be evaluated.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "equals",
      "List of string values to be evaluated.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "field",
      "The name of the field to be evaluated. The full list of field names can be found in [AWS documentation](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_filter-findings.html#filter_criteria).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "greaterThan",
      "A value to be evaluated. Accepts either an integer or a date in [RFC 3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "greaterThanOrEqual",
      "A value to be evaluated. Accepts either an integer or a date in [RFC 3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lessThan",
      "A value to be evaluated. Accepts either an integer or a date in [RFC 3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lessThanOrEqual",
      "A value to be evaluated. Accepts either an integer or a date in [RFC 3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).",
      [],
      false,
      false,
    ),
  ];
}
