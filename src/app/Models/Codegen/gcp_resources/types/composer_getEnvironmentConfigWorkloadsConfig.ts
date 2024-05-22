import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  composer_getEnvironmentConfigWorkloadsConfigWorker,
  composer_getEnvironmentConfigWorkloadsConfigWorker_GetTypes,
} from "./composer_getEnvironmentConfigWorkloadsConfigWorker";
import {
  composer_getEnvironmentConfigWorkloadsConfigDagProcessor,
  composer_getEnvironmentConfigWorkloadsConfigDagProcessor_GetTypes,
} from "./composer_getEnvironmentConfigWorkloadsConfigDagProcessor";
import {
  composer_getEnvironmentConfigWorkloadsConfigScheduler,
  composer_getEnvironmentConfigWorkloadsConfigScheduler_GetTypes,
} from "./composer_getEnvironmentConfigWorkloadsConfigScheduler";
import {
  composer_getEnvironmentConfigWorkloadsConfigTriggerer,
  composer_getEnvironmentConfigWorkloadsConfigTriggerer_GetTypes,
} from "./composer_getEnvironmentConfigWorkloadsConfigTriggerer";
import {
  composer_getEnvironmentConfigWorkloadsConfigWebServer,
  composer_getEnvironmentConfigWorkloadsConfigWebServer_GetTypes,
} from "./composer_getEnvironmentConfigWorkloadsConfigWebServer";

export interface composer_getEnvironmentConfigWorkloadsConfig {
  // Configuration for resources used by DAG processor.
  dagProcessors?: Array<composer_getEnvironmentConfigWorkloadsConfigDagProcessor>;

  // Configuration for resources used by Airflow schedulers.
  schedulers?: Array<composer_getEnvironmentConfigWorkloadsConfigScheduler>;

  // Configuration for resources used by Airflow triggerers.
  triggerers?: Array<composer_getEnvironmentConfigWorkloadsConfigTriggerer>;

  // Configuration for resources used by Airflow web server.
  webServers?: Array<composer_getEnvironmentConfigWorkloadsConfigWebServer>;

  // Configuration for resources used by Airflow workers.
  workers?: Array<composer_getEnvironmentConfigWorkloadsConfigWorker>;
}

export function composer_getEnvironmentConfigWorkloadsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "schedulers",
      "Configuration for resources used by Airflow schedulers.",
      composer_getEnvironmentConfigWorkloadsConfigScheduler_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "triggerers",
      "Configuration for resources used by Airflow triggerers.",
      composer_getEnvironmentConfigWorkloadsConfigTriggerer_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "webServers",
      "Configuration for resources used by Airflow web server.",
      composer_getEnvironmentConfigWorkloadsConfigWebServer_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "workers",
      "Configuration for resources used by Airflow workers.",
      composer_getEnvironmentConfigWorkloadsConfigWorker_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dagProcessors",
      "Configuration for resources used by DAG processor.",
      composer_getEnvironmentConfigWorkloadsConfigDagProcessor_GetTypes(),
      true,
      false,
    ),
  ];
}
