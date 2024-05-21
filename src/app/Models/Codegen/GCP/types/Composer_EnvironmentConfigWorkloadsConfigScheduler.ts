import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface composer_EnvironmentConfigWorkloadsConfigScheduler {
  // Memory (GB) request and limit for a single Airflow scheduler replica.
  memoryGb?: number;

  // Storage (GB) request and limit for a single Airflow scheduler replica.
  storageGb?: number;

  // The number of schedulers.
  count?: number;

  // CPU request and limit for a single Airflow scheduler replica
  cpu?: number;
}

export function composer_EnvironmentConfigWorkloadsConfigScheduler_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "memoryGb",
      "Memory (GB) request and limit for a single Airflow scheduler replica.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "storageGb",
      "Storage (GB) request and limit for a single Airflow scheduler replica.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "count",
      "The number of schedulers.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "cpu",
      "CPU request and limit for a single Airflow scheduler replica",
      [],
      false,
      false,
    ),
  ];
}
