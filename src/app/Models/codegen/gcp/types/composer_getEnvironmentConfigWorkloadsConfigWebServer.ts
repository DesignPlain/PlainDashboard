import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface composer_getEnvironmentConfigWorkloadsConfigWebServer {
  // Storage (GB) request and limit for Airflow web server.
  storageGb?: number;

  // CPU request and limit for Airflow web server.
  cpu?: number;

  // Memory (GB) request and limit for Airflow web server.
  memoryGb?: number;
}

export function composer_getEnvironmentConfigWorkloadsConfigWebServer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "storageGb",
      "Storage (GB) request and limit for Airflow web server.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "cpu",
      "CPU request and limit for Airflow web server.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "memoryGb",
      "Memory (GB) request and limit for Airflow web server.",
      () => [],
      true,
      false,
    ),
  ];
}
