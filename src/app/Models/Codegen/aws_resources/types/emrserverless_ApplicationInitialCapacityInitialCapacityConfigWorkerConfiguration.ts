import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface emrserverless_ApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration {
  // The memory requirements for every worker instance of the worker type.
  memory?: string;

  // The CPU requirements for every worker instance of the worker type.
  cpu?: string;

  // The disk requirements for every worker instance of the worker type.
  disk?: string;
}

export function emrserverless_ApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "memory",
      "The memory requirements for every worker instance of the worker type.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cpu",
      "The CPU requirements for every worker instance of the worker type.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "disk",
      "The disk requirements for every worker instance of the worker type.",
      [],
      false,
      false,
    ),
  ];
}
