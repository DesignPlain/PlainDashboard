import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  costexplorer_getTagsFilterOrTags,
  costexplorer_getTagsFilterOrTags_GetTypes,
} from "./costexplorer_getTagsFilterOrTags";
import {
  costexplorer_getTagsFilterOrCostCategory,
  costexplorer_getTagsFilterOrCostCategory_GetTypes,
} from "./costexplorer_getTagsFilterOrCostCategory";
import {
  costexplorer_getTagsFilterOrDimension,
  costexplorer_getTagsFilterOrDimension_GetTypes,
} from "./costexplorer_getTagsFilterOrDimension";

export interface costexplorer_getTagsFilterOr {
  // Configuration block for the filter that's based on `CostCategory` values. See `cost_category` block below for details.
  costCategory?: costexplorer_getTagsFilterOrCostCategory;

  // Configuration block for the specific `Dimension` to use for `Expression`. See `dimension` block below for details.
  dimension?: costexplorer_getTagsFilterOrDimension;

  // Tags that match your request.
  tags?: costexplorer_getTagsFilterOrTags;
}

export function costexplorer_getTagsFilterOr_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "costCategory",
      "Configuration block for the filter that's based on `CostCategory` values. See `cost_category` block below for details.",
      () => costexplorer_getTagsFilterOrCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dimension",
      "Configuration block for the specific `Dimension` to use for `Expression`. See `dimension` block below for details.",
      () => costexplorer_getTagsFilterOrDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tags",
      "Tags that match your request.",
      () => costexplorer_getTagsFilterOrTags_GetTypes(),
      false,
      false,
    ),
  ];
}
