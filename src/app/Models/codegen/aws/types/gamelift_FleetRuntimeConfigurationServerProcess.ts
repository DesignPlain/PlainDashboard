import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gamelift_FleetRuntimeConfigurationServerProcess {
  // Number of server processes using this configuration to run concurrently on an instance.
  concurrentExecutions?: number;

  // Location of the server executable in a game build. All game builds are installed on instances at the root : for Windows instances `C:\game`, and for Linux instances `/local/game`.
  launchPath?: string;

  // Optional list of parameters to pass to the server executable on launch.
  parameters?: string;
}

export function gamelift_FleetRuntimeConfigurationServerProcess_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'concurrentExecutions',
      'Number of server processes using this configuration to run concurrently on an instance.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'launchPath',
      'Location of the server executable in a game build. All game builds are installed on instances at the root : for Windows instances `C:\\game`, and for Linux instances `/local/game`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'parameters',
      'Optional list of parameters to pass to the server executable on launch.',
      () => [],
      false,
      false,
    ),
  ];
}
