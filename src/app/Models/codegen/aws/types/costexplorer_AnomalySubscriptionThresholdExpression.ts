import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  costexplorer_AnomalySubscriptionThresholdExpressionCostCategory,
  costexplorer_AnomalySubscriptionThresholdExpressionCostCategory_GetTypes,
} from "./costexplorer_AnomalySubscriptionThresholdExpressionCostCategory";
import {
  costexplorer_AnomalySubscriptionThresholdExpressionDimension,
  costexplorer_AnomalySubscriptionThresholdExpressionDimension_GetTypes,
} from "./costexplorer_AnomalySubscriptionThresholdExpressionDimension";
import {
  costexplorer_AnomalySubscriptionThresholdExpressionNot,
  costexplorer_AnomalySubscriptionThresholdExpressionNot_GetTypes,
} from "./costexplorer_AnomalySubscriptionThresholdExpressionNot";
import {
  costexplorer_AnomalySubscriptionThresholdExpressionOr,
  costexplorer_AnomalySubscriptionThresholdExpressionOr_GetTypes,
} from "./costexplorer_AnomalySubscriptionThresholdExpressionOr";
import {
  costexplorer_AnomalySubscriptionThresholdExpressionTags,
  costexplorer_AnomalySubscriptionThresholdExpressionTags_GetTypes,
} from "./costexplorer_AnomalySubscriptionThresholdExpressionTags";
import {
  costexplorer_AnomalySubscriptionThresholdExpressionAnd,
  costexplorer_AnomalySubscriptionThresholdExpressionAnd_GetTypes,
} from "./costexplorer_AnomalySubscriptionThresholdExpressionAnd";

export interface costexplorer_AnomalySubscriptionThresholdExpression {
  // Configuration block for the specific Dimension to use for.
  dimension?: costexplorer_AnomalySubscriptionThresholdExpressionDimension;

  // Return results that match both Dimension object.
  not?: costexplorer_AnomalySubscriptionThresholdExpressionNot;

  // Return results that match both Dimension object.
  ors?: Array<costexplorer_AnomalySubscriptionThresholdExpressionOr>;

  // Configuration block for the specific Tag to use for. See Tags below.
  tags?: costexplorer_AnomalySubscriptionThresholdExpressionTags;

  // Return results that match both Dimension objects.
  ands?: Array<costexplorer_AnomalySubscriptionThresholdExpressionAnd>;

  // Configuration block for the filter that's based on  values. See Cost Category below.
  costCategory?: costexplorer_AnomalySubscriptionThresholdExpressionCostCategory;
}

export function costexplorer_AnomalySubscriptionThresholdExpression_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "tags",
      "Configuration block for the specific Tag to use for. See Tags below.",
      () => costexplorer_AnomalySubscriptionThresholdExpressionTags_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ands",
      "Return results that match both Dimension objects.",
      () => costexplorer_AnomalySubscriptionThresholdExpressionAnd_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "costCategory",
      "Configuration block for the filter that's based on  values. See Cost Category below.",
      () =>
        costexplorer_AnomalySubscriptionThresholdExpressionCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dimension",
      "Configuration block for the specific Dimension to use for.",
      () =>
        costexplorer_AnomalySubscriptionThresholdExpressionDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "not",
      "Return results that match both Dimension object.",
      () => costexplorer_AnomalySubscriptionThresholdExpressionNot_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ors",
      "Return results that match both Dimension object.",
      () => costexplorer_AnomalySubscriptionThresholdExpressionOr_GetTypes(),
      false,
      false,
    ),
  ];
}
