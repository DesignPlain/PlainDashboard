import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_getDataSetColumnGroupGeoSpatialColumnGroup,
  quicksight_getDataSetColumnGroupGeoSpatialColumnGroup_GetTypes,
} from "./quicksight_getDataSetColumnGroupGeoSpatialColumnGroup";

export interface quicksight_getDataSetColumnGroup {
  //
  geoSpatialColumnGroups?: Array<quicksight_getDataSetColumnGroupGeoSpatialColumnGroup>;
}

export function quicksight_getDataSetColumnGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "geoSpatialColumnGroups",
      "",
      () => quicksight_getDataSetColumnGroupGeoSpatialColumnGroup_GetTypes(),
      true,
      false,
    ),
  ];
}
