import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_getDataSetColumnGroupGeoSpatialColumnGroup {
  //
  countryCode?: string;

  //
  name?: string;

  //
  columns?: Array<string>;
}

export function quicksight_getDataSetColumnGroupGeoSpatialColumnGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "name", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "columns",
      "",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "countryCode",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
