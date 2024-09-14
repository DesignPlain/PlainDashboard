import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface composer_getEnvironmentConfigWorkloadsConfigScheduler {
  // Memory (GB) request and limit for a single Airflow scheduler replica.
  memoryGb?: number;

  // Storage (GB) request and limit for a single Airflow scheduler replica.
  storageGb?: number;

  // The number of schedulers.
  count?: number;

  // CPU request and limit for a single Airflow scheduler replica
  cpu?: number;
}

export function composer_getEnvironmentConfigWorkloadsConfigScheduler_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "memoryGb",
      "Memory (GB) request and limit for a single Airflow scheduler replica.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "storageGb",
      "Storage (GB) request and limit for a single Airflow scheduler replica.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "count",
      "The number of schedulers.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "cpu",
      "CPU request and limit for a single Airflow scheduler replica",
      () => [],
      true,
      false,
    ),
  ];
}
