import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getInstanceGroupManagerAllInstancesConfig {
  // The label key-value pairs that you want to patch onto the instance,
  Labels?: Map<string, string>;

  // The metadata key-value pairs that you want to patch onto the instance. For more information, see Project and instance metadata,
  Metadata?: Map<string, string>;
}

export function Compute_getInstanceGroupManagerAllInstancesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "Metadata",
      "The metadata key-value pairs that you want to patch onto the instance. For more information, see Project and instance metadata,",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "The label key-value pairs that you want to patch onto the instance,",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
