import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_getInstanceGroupManagerAllInstancesConfig {
  // The metadata key-value pairs that you want to patch onto the instance. For more information, see Project and instance metadata,
  metadata?: Map<string, string>;

  // The label key-value pairs that you want to patch onto the instance,
  labels?: Map<string, string>;
}

export function compute_getInstanceGroupManagerAllInstancesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "metadata",
      "The metadata key-value pairs that you want to patch onto the instance. For more information, see Project and instance metadata,",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "The label key-value pairs that you want to patch onto the instance,",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
