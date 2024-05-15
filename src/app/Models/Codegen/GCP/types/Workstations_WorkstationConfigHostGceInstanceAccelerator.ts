import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Workstations_WorkstationConfigHostGceInstanceAccelerator {
  // Number of accelerator cards exposed to the instance.
  Count?: number;

  // Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100".
  Type?: string;
}

export function Workstations_WorkstationConfigHostGceInstanceAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Count",
      "Number of accelerator cards exposed to the instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      'Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100".',
      [],
      true,
      false,
    ),
  ];
}
