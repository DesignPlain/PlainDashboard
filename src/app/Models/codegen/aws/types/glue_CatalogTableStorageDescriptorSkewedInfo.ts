import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface glue_CatalogTableStorageDescriptorSkewedInfo {
  // List of names of columns that contain skewed values.
  skewedColumnNames?: Array<string>;

  // List of values that appear so frequently as to be considered skewed.
  skewedColumnValueLocationMaps?: Map<string, string>;

  // Map of skewed values to the columns that contain them.
  skewedColumnValues?: Array<string>;
}

export function glue_CatalogTableStorageDescriptorSkewedInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "skewedColumnValues",
      "Map of skewed values to the columns that contain them.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "skewedColumnNames",
      "List of names of columns that contain skewed values.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "skewedColumnValueLocationMaps",
      "List of values that appear so frequently as to be considered skewed.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
