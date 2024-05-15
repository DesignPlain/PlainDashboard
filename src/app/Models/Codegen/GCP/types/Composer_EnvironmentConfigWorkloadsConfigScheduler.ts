import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Composer_EnvironmentConfigWorkloadsConfigScheduler {
  // The number of schedulers.
  Count?: number;

  // CPU request and limit for a single Airflow scheduler replica
  Cpu?: number;

  // Memory (GB) request and limit for a single Airflow scheduler replica.
  MemoryGb?: number;

  // Storage (GB) request and limit for a single Airflow scheduler replica.
  StorageGb?: number;
}

export function Composer_EnvironmentConfigWorkloadsConfigScheduler_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Count",
      "The number of schedulers.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Cpu",
      "CPU request and limit for a single Airflow scheduler replica",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MemoryGb",
      "Memory (GB) request and limit for a single Airflow scheduler replica.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "StorageGb",
      "Storage (GB) request and limit for a single Airflow scheduler replica.",
      [],
      false,
      false,
    ),
  ];
}
