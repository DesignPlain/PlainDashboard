import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ecs_ServiceServiceConnectConfigurationServiceClientAlias {
  // Name that you use in the applications of client tasks to connect to this service.
  dnsName?: string;

  // Listening port number for the Service Connect proxy. This port is available inside of all of the tasks within the same namespace.
  port?: number;
}

export function ecs_ServiceServiceConnectConfigurationServiceClientAlias_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'dnsName',
      'Name that you use in the applications of client tasks to connect to this service.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'port',
      'Listening port number for the Service Connect proxy. This port is available inside of all of the tasks within the same namespace.',
      () => [],
      true,
      false,
    ),
  ];
}
