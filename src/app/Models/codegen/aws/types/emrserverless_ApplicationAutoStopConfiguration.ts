import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface emrserverless_ApplicationAutoStopConfiguration {
  // The amount of idle time in minutes after which your application will automatically stop. Defaults to `15` minutes.
  idleTimeoutMinutes?: number;

  // Enables the application to automatically stop after a certain amount of time being idle. Defaults to `true`.
  enabled?: boolean;
}

export function emrserverless_ApplicationAutoStopConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "idleTimeoutMinutes",
      "The amount of idle time in minutes after which your application will automatically stop. Defaults to `15` minutes.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enables the application to automatically stop after a certain amount of time being idle. Defaults to `true`.",
      () => [],
      false,
      false,
    ),
  ];
}
