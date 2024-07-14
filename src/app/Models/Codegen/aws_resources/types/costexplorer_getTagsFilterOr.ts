import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  costexplorer_getTagsFilterOrCostCategory,
  costexplorer_getTagsFilterOrCostCategory_GetTypes,
} from "./costexplorer_getTagsFilterOrCostCategory";
import {
  costexplorer_getTagsFilterOrDimension,
  costexplorer_getTagsFilterOrDimension_GetTypes,
} from "./costexplorer_getTagsFilterOrDimension";
import {
  costexplorer_getTagsFilterOrTags,
  costexplorer_getTagsFilterOrTags_GetTypes,
} from "./costexplorer_getTagsFilterOrTags";

export interface costexplorer_getTagsFilterOr {
  // Configuration block for the filter that's based on `CostCategory` values. See below.
  costCategory?: costexplorer_getTagsFilterOrCostCategory;

  // Configuration block for the specific `Dimension` to use for `Expression`. See below.
  dimension?: costexplorer_getTagsFilterOrDimension;

  // Tags that match your request.
  tags?: costexplorer_getTagsFilterOrTags;
}

export function costexplorer_getTagsFilterOr_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "costCategory",
      "Configuration block for the filter that's based on `CostCategory` values. See below.",
      costexplorer_getTagsFilterOrCostCategory_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dimension",
      "Configuration block for the specific `Dimension` to use for `Expression`. See below.",
      costexplorer_getTagsFilterOrDimension_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tags",
      "Tags that match your request.",
      costexplorer_getTagsFilterOrTags_GetTypes(),
      false,
      false,
    ),
  ];
}
