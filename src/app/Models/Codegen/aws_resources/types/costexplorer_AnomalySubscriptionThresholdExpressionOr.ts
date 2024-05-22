import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  costexplorer_AnomalySubscriptionThresholdExpressionOrCostCategory,
  costexplorer_AnomalySubscriptionThresholdExpressionOrCostCategory_GetTypes,
} from "./costexplorer_AnomalySubscriptionThresholdExpressionOrCostCategory";
import {
  costexplorer_AnomalySubscriptionThresholdExpressionOrDimension,
  costexplorer_AnomalySubscriptionThresholdExpressionOrDimension_GetTypes,
} from "./costexplorer_AnomalySubscriptionThresholdExpressionOrDimension";
import {
  costexplorer_AnomalySubscriptionThresholdExpressionOrTags,
  costexplorer_AnomalySubscriptionThresholdExpressionOrTags_GetTypes,
} from "./costexplorer_AnomalySubscriptionThresholdExpressionOrTags";

export interface costexplorer_AnomalySubscriptionThresholdExpressionOr {
  // Configuration block for the filter that's based on  values. See Cost Category below.
  costCategory?: costexplorer_AnomalySubscriptionThresholdExpressionOrCostCategory;

  // Configuration block for the specific Dimension to use for.
  dimension?: costexplorer_AnomalySubscriptionThresholdExpressionOrDimension;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: costexplorer_AnomalySubscriptionThresholdExpressionOrTags;
}

export function costexplorer_AnomalySubscriptionThresholdExpressionOr_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "tags",
      "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
      costexplorer_AnomalySubscriptionThresholdExpressionOrTags_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "costCategory",
      "Configuration block for the filter that's based on  values. See Cost Category below.",
      costexplorer_AnomalySubscriptionThresholdExpressionOrCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dimension",
      "Configuration block for the specific Dimension to use for.",
      costexplorer_AnomalySubscriptionThresholdExpressionOrDimension_GetTypes(),
      false,
      false,
    ),
  ];
}
