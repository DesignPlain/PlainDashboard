import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Composer_getEnvironmentConfigWorkloadsConfigScheduler {
  // CPU request and limit for a single Airflow scheduler replica
  Cpu?: number;

  // Memory (GB) request and limit for a single Airflow scheduler replica.
  MemoryGb?: number;

  // Storage (GB) request and limit for a single Airflow scheduler replica.
  StorageGb?: number;

  // The number of schedulers.
  Count?: number;
}

export function Composer_getEnvironmentConfigWorkloadsConfigScheduler_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Count",
      "The number of schedulers.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Cpu",
      "CPU request and limit for a single Airflow scheduler replica",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MemoryGb",
      "Memory (GB) request and limit for a single Airflow scheduler replica.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "StorageGb",
      "Storage (GB) request and limit for a single Airflow scheduler replica.",
      [],
      true,
      false,
    ),
  ];
}
