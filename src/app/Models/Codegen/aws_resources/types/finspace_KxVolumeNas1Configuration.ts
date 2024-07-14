import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface finspace_KxVolumeNas1Configuration {
  // The size of the network attached storage.
  size?: number;

  // The type of file system volume. Currently, FinSpace only supports the `NAS_1` volume type. When you select the `NAS_1` volume type, you must also provide `nas1_configuration`.
  type?: string;
}

export function finspace_KxVolumeNas1Configuration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "size",
      "The size of the network attached storage.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of file system volume. Currently, FinSpace only supports the `NAS_1` volume type. When you select the `NAS_1` volume type, you must also provide `nas1_configuration`.",
      [],
      true,
      true,
    ),
  ];
}
