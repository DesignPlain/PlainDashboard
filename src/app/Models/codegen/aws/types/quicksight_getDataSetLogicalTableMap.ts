import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_getDataSetLogicalTableMapSource,
  quicksight_getDataSetLogicalTableMapSource_GetTypes,
} from "./quicksight_getDataSetLogicalTableMapSource";
import {
  quicksight_getDataSetLogicalTableMapDataTransform,
  quicksight_getDataSetLogicalTableMapDataTransform_GetTypes,
} from "./quicksight_getDataSetLogicalTableMapDataTransform";

export interface quicksight_getDataSetLogicalTableMap {
  //
  logicalTableMapId?: string;

  //
  sources?: Array<quicksight_getDataSetLogicalTableMapSource>;

  //
  alias?: string;

  //
  dataTransforms?: Array<quicksight_getDataSetLogicalTableMapDataTransform>;
}

export function quicksight_getDataSetLogicalTableMap_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "alias", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "dataTransforms",
      "",
      () => quicksight_getDataSetLogicalTableMapDataTransform_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logicalTableMapId",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sources",
      "",
      () => quicksight_getDataSetLogicalTableMapSource_GetTypes(),
      true,
      false,
    ),
  ];
}
