import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_DataSetColumnGroupGeoSpatialColumnGroup {
  // Columns in this hierarchy.
  columns?: Array<string>;

  // Country code. Valid values are `US`.
  countryCode?: string;

  // A display name for the hierarchy.
  name?: string;
}

export function quicksight_DataSetColumnGroupGeoSpatialColumnGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "countryCode",
      "Country code. Valid values are `US`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "A display name for the hierarchy.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "columns",
      "Columns in this hierarchy.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
