import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  servicecatalog_getLaunchPathsSummaryConstraintSummary,
  servicecatalog_getLaunchPathsSummaryConstraintSummary_GetTypes,
} from "./servicecatalog_getLaunchPathsSummaryConstraintSummary";

export interface servicecatalog_getLaunchPathsSummary {
  // Block for constraints on the portfolio-product relationship. See details below.
  constraintSummaries?: Array<servicecatalog_getLaunchPathsSummaryConstraintSummary>;

  // Name of the portfolio to which the path was assigned.
  name?: string;

  // Identifier of the product path.
  pathId?: string;

  // Tags associated with this product path.
  tags?: Map<string, string>;
}

export function servicecatalog_getLaunchPathsSummary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "constraintSummaries",
      "Block for constraints on the portfolio-product relationship. See details below.",
      () => servicecatalog_getLaunchPathsSummaryConstraintSummary_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the portfolio to which the path was assigned.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pathId",
      "Identifier of the product path.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "Tags associated with this product path.",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
