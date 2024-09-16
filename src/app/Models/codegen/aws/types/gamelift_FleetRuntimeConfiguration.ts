import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  gamelift_FleetRuntimeConfigurationServerProcess,
  gamelift_FleetRuntimeConfigurationServerProcess_GetTypes,
} from './gamelift_FleetRuntimeConfigurationServerProcess';

export interface gamelift_FleetRuntimeConfiguration {
  // Maximum amount of time (in seconds) that a game session can remain in status `ACTIVATING`.
  gameSessionActivationTimeoutSeconds?: number;

  // Maximum number of game sessions with status `ACTIVATING` to allow on an instance simultaneously.
  maxConcurrentGameSessionActivations?: number;

  // Collection of server process configurations that describe which server processes to run on each instance in a fleet. See below.
  serverProcesses?: Array<gamelift_FleetRuntimeConfigurationServerProcess>;
}

export function gamelift_FleetRuntimeConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'gameSessionActivationTimeoutSeconds',
      'Maximum amount of time (in seconds) that a game session can remain in status `ACTIVATING`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxConcurrentGameSessionActivations',
      'Maximum number of game sessions with status `ACTIVATING` to allow on an instance simultaneously.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'serverProcesses',
      'Collection of server process configurations that describe which server processes to run on each instance in a fleet. See below.',
      () => gamelift_FleetRuntimeConfigurationServerProcess_GetTypes(),
      false,
      false,
    ),
  ];
}
