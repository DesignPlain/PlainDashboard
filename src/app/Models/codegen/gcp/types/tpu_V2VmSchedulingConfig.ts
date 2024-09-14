import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface tpu_V2VmSchedulingConfig {
  // Defines whether the node is preemptible.
  preemptible?: boolean;

  // Whether the node is created under a reservation.
  reserved?: boolean;
}

export function tpu_V2VmSchedulingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "preemptible",
      "Defines whether the node is preemptible.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "reserved",
      "Whether the node is created under a reservation.",
      () => [],
      false,
      true,
    ),
  ];
}
