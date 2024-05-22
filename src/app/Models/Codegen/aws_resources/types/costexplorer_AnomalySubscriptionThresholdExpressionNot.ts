import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  costexplorer_AnomalySubscriptionThresholdExpressionNotCostCategory,
  costexplorer_AnomalySubscriptionThresholdExpressionNotCostCategory_GetTypes,
} from "./costexplorer_AnomalySubscriptionThresholdExpressionNotCostCategory";
import {
  costexplorer_AnomalySubscriptionThresholdExpressionNotDimension,
  costexplorer_AnomalySubscriptionThresholdExpressionNotDimension_GetTypes,
} from "./costexplorer_AnomalySubscriptionThresholdExpressionNotDimension";
import {
  costexplorer_AnomalySubscriptionThresholdExpressionNotTags,
  costexplorer_AnomalySubscriptionThresholdExpressionNotTags_GetTypes,
} from "./costexplorer_AnomalySubscriptionThresholdExpressionNotTags";

export interface costexplorer_AnomalySubscriptionThresholdExpressionNot {
  // Configuration block for the filter that's based on  values. See Cost Category below.
  costCategory?: costexplorer_AnomalySubscriptionThresholdExpressionNotCostCategory;

  // Configuration block for the specific Dimension to use for.
  dimension?: costexplorer_AnomalySubscriptionThresholdExpressionNotDimension;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: costexplorer_AnomalySubscriptionThresholdExpressionNotTags;
}

export function costexplorer_AnomalySubscriptionThresholdExpressionNot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "costCategory",
      "Configuration block for the filter that's based on  values. See Cost Category below.",
      costexplorer_AnomalySubscriptionThresholdExpressionNotCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dimension",
      "Configuration block for the specific Dimension to use for.",
      costexplorer_AnomalySubscriptionThresholdExpressionNotDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tags",
      "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
      costexplorer_AnomalySubscriptionThresholdExpressionNotTags_GetTypes(),
      false,
      false,
    ),
  ];
}
