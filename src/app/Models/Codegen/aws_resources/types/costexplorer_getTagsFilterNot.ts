import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  costexplorer_getTagsFilterNotCostCategory,
  costexplorer_getTagsFilterNotCostCategory_GetTypes,
} from "./costexplorer_getTagsFilterNotCostCategory";
import {
  costexplorer_getTagsFilterNotDimension,
  costexplorer_getTagsFilterNotDimension_GetTypes,
} from "./costexplorer_getTagsFilterNotDimension";
import {
  costexplorer_getTagsFilterNotTags,
  costexplorer_getTagsFilterNotTags_GetTypes,
} from "./costexplorer_getTagsFilterNotTags";

export interface costexplorer_getTagsFilterNot {
  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategory?: costexplorer_getTagsFilterNotCostCategory;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimension?: costexplorer_getTagsFilterNotDimension;

  // Tags that match your request.
  tags?: costexplorer_getTagsFilterNotTags;
}

export function costexplorer_getTagsFilterNot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "costCategory",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      costexplorer_getTagsFilterNotCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dimension",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      costexplorer_getTagsFilterNotDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tags",
      "Tags that match your request.",
      costexplorer_getTagsFilterNotTags_GetTypes(),
      false,
      false,
    ),
  ];
}
