import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Notebooks_RuntimeSoftwareConfigKernel,
  Notebooks_RuntimeSoftwareConfigKernel_GetTypes,
} from "./Notebooks_RuntimeSoftwareConfigKernel";

export interface Notebooks_RuntimeSoftwareConfig {
  /*
Specify a custom Cloud Storage path where the GPU driver is stored.
If not specified, we'll automatically choose from official GPU drivers.
*/
  CustomGpuDriverPath?: string;

  // Verifies core internal services are running. Default: True.
  EnableHealthMonitoring?: boolean;

  /*
Path to a Bash script that automatically runs after a notebook instance
fully boots up. The path must be a URL or
Cloud Storage path (gs://path-to-file/file-name).
*/
  PostStartupScript?: string;

  /*
Behavior for the post startup script.
Possible values are: `POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED`, `RUN_EVERY_START`, `DOWNLOAD_AND_RUN_EVERY_START`.
*/
  PostStartupScriptBehavior?: string;

  /*
(Output)
Bool indicating whether an newer image is available in an image family.
*/
  Upgradeable?: boolean;

  /*
Runtime will automatically shutdown after idle_shutdown_time.
Default: True
*/
  IdleShutdown?: boolean;

  /*
Time in minutes to wait before shuting down runtime.
Default: 180 minutes
*/
  IdleShutdownTimeout?: number;

  // Install Nvidia Driver automatically.
  InstallGpuDriver?: boolean;

  /*
Use a list of container images to use as Kernels in the notebook instance.
Structure is documented below.
*/
  Kernels?: Array<Notebooks_RuntimeSoftwareConfigKernel>;

  /*
Cron expression in UTC timezone for schedule instance auto upgrade.
Please follow the [cron format](https://en.wikipedia.org/wiki/Cron).
*/
  NotebookUpgradeSchedule?: string;
}

export function Notebooks_RuntimeSoftwareConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableHealthMonitoring",
      "Verifies core internal services are running. Default: True.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PostStartupScriptBehavior",
      "Behavior for the post startup script.\nPossible values are: `POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED`, `RUN_EVERY_START`, `DOWNLOAD_AND_RUN_EVERY_START`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Upgradeable",
      "(Output)\nBool indicating whether an newer image is available in an image family.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IdleShutdown",
      "Runtime will automatically shutdown after idle_shutdown_time.\nDefault: True",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "IdleShutdownTimeout",
      "Time in minutes to wait before shuting down runtime.\nDefault: 180 minutes",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "InstallGpuDriver",
      "Install Nvidia Driver automatically.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Kernels",
      "Use a list of container images to use as Kernels in the notebook instance.\nStructure is documented below.",
      Notebooks_RuntimeSoftwareConfigKernel_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NotebookUpgradeSchedule",
      "Cron expression in UTC timezone for schedule instance auto upgrade.\nPlease follow the [cron format](https://en.wikipedia.org/wiki/Cron).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CustomGpuDriverPath",
      "Specify a custom Cloud Storage path where the GPU driver is stored.\nIf not specified, we'll automatically choose from official GPU drivers.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PostStartupScript",
      "Path to a Bash script that automatically runs after a notebook instance\nfully boots up. The path must be a URL or\nCloud Storage path (gs://path-to-file/file-name).",
      [],
      false,
      false,
    ),
  ];
}
