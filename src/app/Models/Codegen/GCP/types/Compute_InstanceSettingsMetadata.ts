import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_InstanceSettingsMetadata {
  // A metadata key/value items map. The total size of all keys and values must be less than 512KB
  Items?: Map<string, string>;
}

export function Compute_InstanceSettingsMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "Items",
      "A metadata key/value items map. The total size of all keys and values must be less than 512KB",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
