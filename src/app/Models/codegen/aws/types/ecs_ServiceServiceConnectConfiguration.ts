import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ecs_ServiceServiceConnectConfigurationLogConfiguration,
  ecs_ServiceServiceConnectConfigurationLogConfiguration_GetTypes,
} from './ecs_ServiceServiceConnectConfigurationLogConfiguration';
import {
  ecs_ServiceServiceConnectConfigurationService,
  ecs_ServiceServiceConnectConfigurationService_GetTypes,
} from './ecs_ServiceServiceConnectConfigurationService';

export interface ecs_ServiceServiceConnectConfiguration {
  // Log configuration for the container. See below.
  logConfiguration?: ecs_ServiceServiceConnectConfigurationLogConfiguration;

  // Namespace name or ARN of the `aws.servicediscovery.HttpNamespace` for use with Service Connect.
  namespace?: string;

  // List of Service Connect service objects. See below.
  services?: Array<ecs_ServiceServiceConnectConfigurationService>;

  // Whether to use Service Connect with this service.
  enabled?: boolean;
}

export function ecs_ServiceServiceConnectConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'logConfiguration',
      'Log configuration for the container. See below.',
      () => ecs_ServiceServiceConnectConfigurationLogConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'namespace',
      'Namespace name or ARN of the `aws.servicediscovery.HttpNamespace` for use with Service Connect.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'services',
      'List of Service Connect service objects. See below.',
      () => ecs_ServiceServiceConnectConfigurationService_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether to use Service Connect with this service.',
      () => [],
      true,
      false,
    ),
  ];
}
