import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface workspaces_getBundleRootStorage {
  // Size of the user storage.
  capacity?: string;
}

export function workspaces_getBundleRootStorage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "capacity",
      "Size of the user storage.",
      [],
      true,
      false,
    ),
  ];
}
