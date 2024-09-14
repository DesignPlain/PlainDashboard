import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ecs_ServiceServiceConnectConfigurationServiceClientAlias,
  ecs_ServiceServiceConnectConfigurationServiceClientAlias_GetTypes,
} from "./ecs_ServiceServiceConnectConfigurationServiceClientAlias";
import {
  ecs_ServiceServiceConnectConfigurationServiceTimeout,
  ecs_ServiceServiceConnectConfigurationServiceTimeout_GetTypes,
} from "./ecs_ServiceServiceConnectConfigurationServiceTimeout";
import {
  ecs_ServiceServiceConnectConfigurationServiceTls,
  ecs_ServiceServiceConnectConfigurationServiceTls_GetTypes,
} from "./ecs_ServiceServiceConnectConfigurationServiceTls";

export interface ecs_ServiceServiceConnectConfigurationService {
  // List of client aliases for this Service Connect service. You use these to assign names that can be used by client applications. The maximum number of client aliases that you can have in this list is 1. See below.
  clientAlias?: Array<ecs_ServiceServiceConnectConfigurationServiceClientAlias>;

  // Name of the new AWS Cloud Map service that Amazon ECS creates for this Amazon ECS service.
  discoveryName?: string;

  // Port number for the Service Connect proxy to listen on.
  ingressPortOverride?: number;

  // Name of one of the `portMappings` from all the containers in the task definition of this Amazon ECS service.
  portName?: string;

  // Configuration timeouts for Service Connect
  timeout?: ecs_ServiceServiceConnectConfigurationServiceTimeout;

  // Configuration for enabling Transport Layer Security (TLS)
  tls?: ecs_ServiceServiceConnectConfigurationServiceTls;
}

export function ecs_ServiceServiceConnectConfigurationService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "clientAlias",
      "List of client aliases for this Service Connect service. You use these to assign names that can be used by client applications. The maximum number of client aliases that you can have in this list is 1. See below.",
      () => ecs_ServiceServiceConnectConfigurationServiceClientAlias_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "discoveryName",
      "Name of the new AWS Cloud Map service that Amazon ECS creates for this Amazon ECS service.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ingressPortOverride",
      "Port number for the Service Connect proxy to listen on.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "portName",
      "Name of one of the `portMappings` from all the containers in the task definition of this Amazon ECS service.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "timeout",
      "Configuration timeouts for Service Connect",
      () => ecs_ServiceServiceConnectConfigurationServiceTimeout_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tls",
      "Configuration for enabling Transport Layer Security (TLS)",
      () => ecs_ServiceServiceConnectConfigurationServiceTls_GetTypes(),
      false,
      false,
    ),
  ];
}
