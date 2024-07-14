import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface tpu_NodeSchedulingConfig {
  // Defines whether the TPU instance is preemptible.
  preemptible?: boolean;
}

export function tpu_NodeSchedulingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "preemptible",
      "Defines whether the TPU instance is preemptible.",
      [],
      true,
      true,
    ),
  ];
}
