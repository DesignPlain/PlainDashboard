import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Tpu_V2VmSchedulingConfig {
  // Defines whether the node is preemptible.
  Preemptible?: boolean;

  // Whether the node is created under a reservation.
  Reserved?: boolean;
}

export function Tpu_V2VmSchedulingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Preemptible",
      "Defines whether the node is preemptible.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Reserved",
      "Whether the node is created under a reservation.",
      [],
      false,
      true,
    ),
  ];
}
