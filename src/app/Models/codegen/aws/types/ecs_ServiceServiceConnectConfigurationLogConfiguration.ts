import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ecs_ServiceServiceConnectConfigurationLogConfigurationSecretOption,
  ecs_ServiceServiceConnectConfigurationLogConfigurationSecretOption_GetTypes,
} from "./ecs_ServiceServiceConnectConfigurationLogConfigurationSecretOption";

export interface ecs_ServiceServiceConnectConfigurationLogConfiguration {
  // Secrets to pass to the log configuration. See below.
  secretOptions?: Array<ecs_ServiceServiceConnectConfigurationLogConfigurationSecretOption>;

  // Log driver to use for the container.
  logDriver?: string;

  // Configuration options to send to the log driver.
  options?: Map<string, string>;
}

export function ecs_ServiceServiceConnectConfigurationLogConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "options",
      "Configuration options to send to the log driver.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "secretOptions",
      "Secrets to pass to the log configuration. See below.",
      () =>
        ecs_ServiceServiceConnectConfigurationLogConfigurationSecretOption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logDriver",
      "Log driver to use for the container.",
      () => [],
      true,
      false,
    ),
  ];
}
