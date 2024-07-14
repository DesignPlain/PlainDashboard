import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_InputInputDevice {
  // The unique ID for the device.
  id?: string;
}

export function medialive_InputInputDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "The unique ID for the device.",
      [],
      true,
      false,
    ),
  ];
}
