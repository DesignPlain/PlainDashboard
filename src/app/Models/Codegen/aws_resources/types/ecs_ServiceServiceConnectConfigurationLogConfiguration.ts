import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ecs_ServiceServiceConnectConfigurationLogConfigurationSecretOption,
  ecs_ServiceServiceConnectConfigurationLogConfigurationSecretOption_GetTypes,
} from "./ecs_ServiceServiceConnectConfigurationLogConfigurationSecretOption";

export interface ecs_ServiceServiceConnectConfigurationLogConfiguration {
  // The log driver to use for the container.
  logDriver?: string;

  // The configuration options to send to the log driver.
  options?: Map<string, string>;

  // The secrets to pass to the log configuration. See below.
  secretOptions?: Array<ecs_ServiceServiceConnectConfigurationLogConfigurationSecretOption>;
}

export function ecs_ServiceServiceConnectConfigurationLogConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "secretOptions",
      "The secrets to pass to the log configuration. See below.",
      ecs_ServiceServiceConnectConfigurationLogConfigurationSecretOption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logDriver",
      "The log driver to use for the container.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "options",
      "The configuration options to send to the log driver.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
