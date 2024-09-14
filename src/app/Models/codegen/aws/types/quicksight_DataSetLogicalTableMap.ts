import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_DataSetLogicalTableMapDataTransform,
  quicksight_DataSetLogicalTableMapDataTransform_GetTypes,
} from "./quicksight_DataSetLogicalTableMapDataTransform";
import {
  quicksight_DataSetLogicalTableMapSource,
  quicksight_DataSetLogicalTableMapSource_GetTypes,
} from "./quicksight_DataSetLogicalTableMapSource";

export interface quicksight_DataSetLogicalTableMap {
  // Source of this logical table. See source.
  source?: quicksight_DataSetLogicalTableMapSource;

  // A display name for the logical table.
  alias?: string;

  // Transform operations that act on this logical table. For this structure to be valid, only one of the attributes can be non-null. See data_transforms.
  dataTransforms?: Array<quicksight_DataSetLogicalTableMapDataTransform>;

  // Key of the logical table map.
  logicalTableMapId?: string;
}

export function quicksight_DataSetLogicalTableMap_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "source",
      "Source of this logical table. See source.",
      () => quicksight_DataSetLogicalTableMapSource_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "alias",
      "A display name for the logical table.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dataTransforms",
      "Transform operations that act on this logical table. For this structure to be valid, only one of the attributes can be non-null. See data_transforms.",
      () => quicksight_DataSetLogicalTableMapDataTransform_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logicalTableMapId",
      "Key of the logical table map.",
      () => [],
      true,
      false,
    ),
  ];
}
