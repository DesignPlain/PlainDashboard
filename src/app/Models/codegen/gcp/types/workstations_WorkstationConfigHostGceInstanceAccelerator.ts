import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface workstations_WorkstationConfigHostGceInstanceAccelerator {
  // Number of accelerator cards exposed to the instance.
  count?: number;

  // Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100".
  type?: string;
}

export function workstations_WorkstationConfigHostGceInstanceAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "count",
      "Number of accelerator cards exposed to the instance.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      'Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100".',
      () => [],
      true,
      false,
    ),
  ];
}
