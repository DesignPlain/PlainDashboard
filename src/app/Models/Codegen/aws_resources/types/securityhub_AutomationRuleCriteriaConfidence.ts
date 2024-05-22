import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface securityhub_AutomationRuleCriteriaConfidence {
  //
  gt?: number;

  // The greater-than-equal condition to be applied to a single field when querying for findings, provided as a String.
  gte?: number;

  //
  lt?: number;

  // The less-than-equal condition to be applied to a single field when querying for findings, provided as a String.
  lte?: number;

  // The equal-to condition to be applied to a single field when querying for findings, provided as a String.
  eq?: number;
}

export function securityhub_AutomationRuleCriteriaConfidence_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "lt", "", [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "lte",
      "The less-than-equal condition to be applied to a single field when querying for findings, provided as a String.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "eq",
      "The equal-to condition to be applied to a single field when querying for findings, provided as a String.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.Number, "gt", "", [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "gte",
      "The greater-than-equal condition to be applied to a single field when querying for findings, provided as a String.",
      [],
      false,
      false,
    ),
  ];
}
