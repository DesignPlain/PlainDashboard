import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  costexplorer_getTagsFilterAndCostCategory,
  costexplorer_getTagsFilterAndCostCategory_GetTypes,
} from "./costexplorer_getTagsFilterAndCostCategory";
import {
  costexplorer_getTagsFilterAndDimension,
  costexplorer_getTagsFilterAndDimension_GetTypes,
} from "./costexplorer_getTagsFilterAndDimension";
import {
  costexplorer_getTagsFilterAndTags,
  costexplorer_getTagsFilterAndTags_GetTypes,
} from "./costexplorer_getTagsFilterAndTags";

export interface costexplorer_getTagsFilterAnd {
  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategory?: costexplorer_getTagsFilterAndCostCategory;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimension?: costexplorer_getTagsFilterAndDimension;

  // Tags that match your request.
  tags?: costexplorer_getTagsFilterAndTags;
}

export function costexplorer_getTagsFilterAnd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "costCategory",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      costexplorer_getTagsFilterAndCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dimension",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      costexplorer_getTagsFilterAndDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tags",
      "Tags that match your request.",
      costexplorer_getTagsFilterAndTags_GetTypes(),
      false,
      false,
    ),
  ];
}
