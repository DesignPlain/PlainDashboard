import { RuntimeSoftwareConfigKernel } from "./RuntimeSoftwareConfigKernel";

export interface RuntimeSoftwareConfig {
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
  Kernels?: Array<RuntimeSoftwareConfigKernel>;

  /*
Cron expression in UTC timezone for schedule instance auto upgrade.
Please follow the [cron format](https://en.wikipedia.org/wiki/Cron).
*/
  NotebookUpgradeSchedule?: string;

  /*
Path to a Bash script that automatically runs after a notebook instance
fully boots up. The path must be a URL or
Cloud Storage path (gs://path-to-file/file-name).
*/
  PostStartupScript?: string;

  /*
Specify a custom Cloud Storage path where the GPU driver is stored.
If not specified, we'll automatically choose from official GPU drivers.
*/
  CustomGpuDriverPath?: string;

  // Verifies core internal services are running. Default: True.
  EnableHealthMonitoring?: boolean;

  /*
Runtime will automatically shutdown after idle_shutdown_time.
Default: True
*/
  IdleShutdown?: boolean;
}
