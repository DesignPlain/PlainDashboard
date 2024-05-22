import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ecs_ServiceServiceConnectConfigurationLogConfiguration,
  ecs_ServiceServiceConnectConfigurationLogConfiguration_GetTypes,
} from "./ecs_ServiceServiceConnectConfigurationLogConfiguration";
import {
  ecs_ServiceServiceConnectConfigurationService,
  ecs_ServiceServiceConnectConfigurationService_GetTypes,
} from "./ecs_ServiceServiceConnectConfigurationService";

export interface ecs_ServiceServiceConnectConfiguration {
  // Specifies whether to use Service Connect with this service.
  enabled?: boolean;

  // The log configuration for the container. See below.
  logConfiguration?: ecs_ServiceServiceConnectConfigurationLogConfiguration;

  // The namespace name or ARN of the `aws.servicediscovery.HttpNamespace` for use with Service Connect.
  namespace?: string;

  // The list of Service Connect service objects. See below.
  services?: Array<ecs_ServiceServiceConnectConfigurationService>;
}

export function ecs_ServiceServiceConnectConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Specifies whether to use Service Connect with this service.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "logConfiguration",
      "The log configuration for the container. See below.",
      ecs_ServiceServiceConnectConfigurationLogConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "The namespace name or ARN of the `aws.servicediscovery.HttpNamespace` for use with Service Connect.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "services",
      "The list of Service Connect service objects. See below.",
      ecs_ServiceServiceConnectConfigurationService_GetTypes(),
      false,
      false,
    ),
  ];
}
