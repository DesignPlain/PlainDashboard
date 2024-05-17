import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Composer_getEnvironmentConfigWorkloadsConfigTriggerer {
  // The number of triggerers.
  Count?: number;

  // CPU request and limit for a single Airflow triggerer replica.
  Cpu?: number;

  // Memory (GB) request and limit for a single Airflow triggerer replica.
  MemoryGb?: number;
}

export function Composer_getEnvironmentConfigWorkloadsConfigTriggerer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Count",
      "The number of triggerers.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Cpu",
      "CPU request and limit for a single Airflow triggerer replica.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MemoryGb",
      "Memory (GB) request and limit for a single Airflow triggerer replica.",
      [],
      true,
      false,
    ),
  ];
}
