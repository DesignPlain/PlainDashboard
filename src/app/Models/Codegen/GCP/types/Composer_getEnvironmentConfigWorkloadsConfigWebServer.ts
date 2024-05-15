import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Composer_getEnvironmentConfigWorkloadsConfigWebServer {
  // CPU request and limit for Airflow web server.
  Cpu?: number;

  // Memory (GB) request and limit for Airflow web server.
  MemoryGb?: number;

  // Storage (GB) request and limit for Airflow web server.
  StorageGb?: number;
}

export function Composer_getEnvironmentConfigWorkloadsConfigWebServer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Cpu",
      "CPU request and limit for Airflow web server.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MemoryGb",
      "Memory (GB) request and limit for Airflow web server.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "StorageGb",
      "Storage (GB) request and limit for Airflow web server.",
      [],
      true,
      false,
    ),
  ];
}
