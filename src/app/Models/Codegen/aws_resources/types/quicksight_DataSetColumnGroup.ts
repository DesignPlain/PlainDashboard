import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  quicksight_DataSetColumnGroupGeoSpatialColumnGroup,
  quicksight_DataSetColumnGroupGeoSpatialColumnGroup_GetTypes,
} from "./quicksight_DataSetColumnGroupGeoSpatialColumnGroup";

export interface quicksight_DataSetColumnGroup {
  // Geospatial column group that denotes a hierarchy. See geo_spatial_column_group.
  geoSpatialColumnGroup?: quicksight_DataSetColumnGroupGeoSpatialColumnGroup;
}

export function quicksight_DataSetColumnGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "geoSpatialColumnGroup",
      "Geospatial column group that denotes a hierarchy. See geo_spatial_column_group.",
      quicksight_DataSetColumnGroupGeoSpatialColumnGroup_GetTypes(),
      false,
      false,
    ),
  ];
}
