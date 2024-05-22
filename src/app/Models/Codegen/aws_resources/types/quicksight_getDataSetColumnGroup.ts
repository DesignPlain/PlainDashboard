import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
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
      quicksight_getDataSetColumnGroupGeoSpatialColumnGroup_GetTypes(),
      true,
      false,
    ),
  ];
}
