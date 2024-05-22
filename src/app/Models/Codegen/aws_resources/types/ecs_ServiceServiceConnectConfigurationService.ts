import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ecs_ServiceServiceConnectConfigurationServiceTimeout,
  ecs_ServiceServiceConnectConfigurationServiceTimeout_GetTypes,
} from "./ecs_ServiceServiceConnectConfigurationServiceTimeout";
import {
  ecs_ServiceServiceConnectConfigurationServiceTls,
  ecs_ServiceServiceConnectConfigurationServiceTls_GetTypes,
} from "./ecs_ServiceServiceConnectConfigurationServiceTls";
import {
  ecs_ServiceServiceConnectConfigurationServiceClientAlias,
  ecs_ServiceServiceConnectConfigurationServiceClientAlias_GetTypes,
} from "./ecs_ServiceServiceConnectConfigurationServiceClientAlias";

export interface ecs_ServiceServiceConnectConfigurationService {
  // The port number for the Service Connect proxy to listen on.
  ingressPortOverride?: number;

  // The name of one of the `portMappings` from all the containers in the task definition of this Amazon ECS service.
  portName?: string;

  // Configuration timeouts for Service Connect
  timeout?: ecs_ServiceServiceConnectConfigurationServiceTimeout;

  // The configuration for enabling Transport Layer Security (TLS)
  tls?: ecs_ServiceServiceConnectConfigurationServiceTls;

  // The list of client aliases for this Service Connect service. You use these to assign names that can be used by client applications. The maximum number of client aliases that you can have in this list is 1. See below.
  clientAlias?: Array<ecs_ServiceServiceConnectConfigurationServiceClientAlias>;

  // The name of the new AWS Cloud Map service that Amazon ECS creates for this Amazon ECS service.
  discoveryName?: string;
}

export function ecs_ServiceServiceConnectConfigurationService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "timeout",
      "Configuration timeouts for Service Connect",
      ecs_ServiceServiceConnectConfigurationServiceTimeout_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tls",
      "The configuration for enabling Transport Layer Security (TLS)",
      ecs_ServiceServiceConnectConfigurationServiceTls_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "clientAlias",
      "The list of client aliases for this Service Connect service. You use these to assign names that can be used by client applications. The maximum number of client aliases that you can have in this list is 1. See below.",
      ecs_ServiceServiceConnectConfigurationServiceClientAlias_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "discoveryName",
      "The name of the new AWS Cloud Map service that Amazon ECS creates for this Amazon ECS service.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ingressPortOverride",
      "The port number for the Service Connect proxy to listen on.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "portName",
      "The name of one of the `portMappings` from all the containers in the task definition of this Amazon ECS service.",
      [],
      true,
      false,
    ),
  ];
}
