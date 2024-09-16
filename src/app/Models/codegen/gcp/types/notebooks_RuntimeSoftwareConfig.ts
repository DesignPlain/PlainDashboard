import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  notebooks_RuntimeSoftwareConfigKernel,
  notebooks_RuntimeSoftwareConfigKernel_GetTypes,
} from './notebooks_RuntimeSoftwareConfigKernel';

export interface notebooks_RuntimeSoftwareConfig {
  /*
Specify a custom Cloud Storage path where the GPU driver is stored.
If not specified, we'll automatically choose from official GPU drivers.
*/
  customGpuDriverPath?: string;

  // Verifies core internal services are running. Default: True.
  enableHealthMonitoring?: boolean;

  /*
Time in minutes to wait before shuting down runtime.
Default: 180 minutes
*/
  idleShutdownTimeout?: number;

  // Install Nvidia Driver automatically.
  installGpuDriver?: boolean;

  /*
Use a list of container images to use as Kernels in the notebook instance.
Structure is documented below.
*/
  kernels?: Array<notebooks_RuntimeSoftwareConfigKernel>;

  /*
Cron expression in UTC timezone for schedule instance auto upgrade.
Please follow the [cron format](https://en.wikipedia.org/wiki/Cron).
*/
  notebookUpgradeSchedule?: string;

  /*
Behavior for the post startup script.
Possible values are: `POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED`, `RUN_EVERY_START`, `DOWNLOAD_AND_RUN_EVERY_START`.
*/
  postStartupScriptBehavior?: string;

  /*
Runtime will automatically shutdown after idle_shutdown_time.
Default: True
*/
  idleShutdown?: boolean;

  /*
Path to a Bash script that automatically runs after a notebook instance
fully boots up. The path must be a URL or
Cloud Storage path (gs://path-to-file/file-name).
*/
  postStartupScript?: string;

  /*
(Output)
Bool indicating whether an newer image is available in an image family.
*/
  upgradeable?: boolean;
}

export function notebooks_RuntimeSoftwareConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enableHealthMonitoring',
      'Verifies core internal services are running. Default: True.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'idleShutdownTimeout',
      'Time in minutes to wait before shuting down runtime.\nDefault: 180 minutes',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'installGpuDriver',
      'Install Nvidia Driver automatically.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'kernels',
      'Use a list of container images to use as Kernels in the notebook instance.\nStructure is documented below.',
      () => notebooks_RuntimeSoftwareConfigKernel_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'postStartupScriptBehavior',
      'Behavior for the post startup script.\nPossible values are: `POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED`, `RUN_EVERY_START`, `DOWNLOAD_AND_RUN_EVERY_START`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'postStartupScript',
      'Path to a Bash script that automatically runs after a notebook instance\nfully boots up. The path must be a URL or\nCloud Storage path (gs://path-to-file/file-name).',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'customGpuDriverPath',
      "Specify a custom Cloud Storage path where the GPU driver is stored.\nIf not specified, we'll automatically choose from official GPU drivers.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'notebookUpgradeSchedule',
      'Cron expression in UTC timezone for schedule instance auto upgrade.\nPlease follow the [cron format](https://en.wikipedia.org/wiki/Cron).',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'idleShutdown',
      'Runtime will automatically shutdown after idle_shutdown_time.\nDefault: True',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'upgradeable',
      '(Output)\nBool indicating whether an newer image is available in an image family.',
      () => [],
      false,
      false,
    ),
  ];
}
