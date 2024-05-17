import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionInstanceGroupManagerAllInstancesConfig {
  /*
, The label key-value pairs that you want to patch onto the instance.

- - -
*/
  Labels?: Map<string, string>;

  // , The metadata key-value pairs that you want to patch onto the instance. For more information, see [Project and instance metadata](https://cloud.google.com/compute/docs/metadata#project_and_instance_metadata).
  Metadata?: Map<string, string>;
}

export function Compute_RegionInstanceGroupManagerAllInstancesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      ", The label key-value pairs that you want to patch onto the instance.\n\n- - -",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Metadata",
      ", The metadata key-value pairs that you want to patch onto the instance. For more information, see [Project and instance metadata](https://cloud.google.com/compute/docs/metadata#project_and_instance_metadata).",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
