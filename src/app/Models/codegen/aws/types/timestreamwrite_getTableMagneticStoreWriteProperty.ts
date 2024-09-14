import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  timestreamwrite_getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocation,
  timestreamwrite_getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocation_GetTypes,
} from "./timestreamwrite_getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocation";

export interface timestreamwrite_getTableMagneticStoreWriteProperty {
  // Flag that is set based on if magnetic store writes are enabled.
  enableMagneticStoreWrites?: boolean;

  // Object containing the following attributes to describe error reports for records rejected during magnetic store writes.
  magneticStoreRejectedDataLocations?: Array<timestreamwrite_getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocation>;
}

export function timestreamwrite_getTableMagneticStoreWriteProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableMagneticStoreWrites",
      "Flag that is set based on if magnetic store writes are enabled.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "magneticStoreRejectedDataLocations",
      "Object containing the following attributes to describe error reports for records rejected during magnetic store writes.",
      () =>
        timestreamwrite_getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocation_GetTypes(),
      true,
      false,
    ),
  ];
}
