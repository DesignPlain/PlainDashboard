import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface workspaces_getBundleComputeType {
  // Name of the bundle. You cannot combine this parameter with `bundle_id`.
  name?: string;
}

export function workspaces_getBundleComputeType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the bundle. You cannot combine this parameter with `bundle_id`.",
      [],
      true,
      false,
    ),
  ];
}
