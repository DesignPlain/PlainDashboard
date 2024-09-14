import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  costexplorer_AnomalySubscriptionThresholdExpressionAndCostCategory,
  costexplorer_AnomalySubscriptionThresholdExpressionAndCostCategory_GetTypes,
} from "./costexplorer_AnomalySubscriptionThresholdExpressionAndCostCategory";
import {
  costexplorer_AnomalySubscriptionThresholdExpressionAndDimension,
  costexplorer_AnomalySubscriptionThresholdExpressionAndDimension_GetTypes,
} from "./costexplorer_AnomalySubscriptionThresholdExpressionAndDimension";
import {
  costexplorer_AnomalySubscriptionThresholdExpressionAndTags,
  costexplorer_AnomalySubscriptionThresholdExpressionAndTags_GetTypes,
} from "./costexplorer_AnomalySubscriptionThresholdExpressionAndTags";

export interface costexplorer_AnomalySubscriptionThresholdExpressionAnd {
  // Configuration block for the filter that's based on  values. See Cost Category below.
  costCategory?: costexplorer_AnomalySubscriptionThresholdExpressionAndCostCategory;

  // Configuration block for the specific Dimension to use for.
  dimension?: costexplorer_AnomalySubscriptionThresholdExpressionAndDimension;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: costexplorer_AnomalySubscriptionThresholdExpressionAndTags;
}

export function costexplorer_AnomalySubscriptionThresholdExpressionAnd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "costCategory",
      "Configuration block for the filter that's based on  values. See Cost Category below.",
      () =>
        costexplorer_AnomalySubscriptionThresholdExpressionAndCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dimension",
      "Configuration block for the specific Dimension to use for.",
      () =>
        costexplorer_AnomalySubscriptionThresholdExpressionAndDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tags",
      "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
      () =>
        costexplorer_AnomalySubscriptionThresholdExpressionAndTags_GetTypes(),
      false,
      false,
    ),
  ];
}
