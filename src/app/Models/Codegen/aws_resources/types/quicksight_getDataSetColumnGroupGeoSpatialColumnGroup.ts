import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface quicksight_getDataSetColumnGroupGeoSpatialColumnGroup {
  //
  columns?: Array<string>;

  //
  countryCode?: string;

  //
  name?: string;
}

export function quicksight_getDataSetColumnGroupGeoSpatialColumnGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "columns",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "countryCode", "", [], true, false),
    new DynamicUIProps(InputType.String, "name", "", [], true, false),
  ];
}
