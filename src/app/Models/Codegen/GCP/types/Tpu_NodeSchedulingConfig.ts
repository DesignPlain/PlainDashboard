import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Tpu_NodeSchedulingConfig {
  // Defines whether the TPU instance is preemptible.
  Preemptible?: boolean;
}

export function Tpu_NodeSchedulingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Preemptible",
      "Defines whether the TPU instance is preemptible.",
      [],
      true,
      true,
    ),
  ];
}
