import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Composer_getEnvironmentConfigWorkloadsConfigDagProcessor,
  Composer_getEnvironmentConfigWorkloadsConfigDagProcessor_GetTypes,
} from "./Composer_getEnvironmentConfigWorkloadsConfigDagProcessor";
import {
  Composer_getEnvironmentConfigWorkloadsConfigScheduler,
  Composer_getEnvironmentConfigWorkloadsConfigScheduler_GetTypes,
} from "./Composer_getEnvironmentConfigWorkloadsConfigScheduler";
import {
  Composer_getEnvironmentConfigWorkloadsConfigTriggerer,
  Composer_getEnvironmentConfigWorkloadsConfigTriggerer_GetTypes,
} from "./Composer_getEnvironmentConfigWorkloadsConfigTriggerer";
import {
  Composer_getEnvironmentConfigWorkloadsConfigWebServer,
  Composer_getEnvironmentConfigWorkloadsConfigWebServer_GetTypes,
} from "./Composer_getEnvironmentConfigWorkloadsConfigWebServer";
import {
  Composer_getEnvironmentConfigWorkloadsConfigWorker,
  Composer_getEnvironmentConfigWorkloadsConfigWorker_GetTypes,
} from "./Composer_getEnvironmentConfigWorkloadsConfigWorker";

export interface Composer_getEnvironmentConfigWorkloadsConfig {
  // Configuration for resources used by Airflow web server.
  WebServers?: Array<Composer_getEnvironmentConfigWorkloadsConfigWebServer>;

  // Configuration for resources used by Airflow workers.
  Workers?: Array<Composer_getEnvironmentConfigWorkloadsConfigWorker>;

  // Configuration for resources used by DAG processor.
  DagProcessors?: Array<Composer_getEnvironmentConfigWorkloadsConfigDagProcessor>;

  // Configuration for resources used by Airflow schedulers.
  Schedulers?: Array<Composer_getEnvironmentConfigWorkloadsConfigScheduler>;

  // Configuration for resources used by Airflow triggerers.
  Triggerers?: Array<Composer_getEnvironmentConfigWorkloadsConfigTriggerer>;
}

export function Composer_getEnvironmentConfigWorkloadsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "DagProcessors",
      "Configuration for resources used by DAG processor.",
      Composer_getEnvironmentConfigWorkloadsConfigDagProcessor_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Schedulers",
      "Configuration for resources used by Airflow schedulers.",
      Composer_getEnvironmentConfigWorkloadsConfigScheduler_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Triggerers",
      "Configuration for resources used by Airflow triggerers.",
      Composer_getEnvironmentConfigWorkloadsConfigTriggerer_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "WebServers",
      "Configuration for resources used by Airflow web server.",
      Composer_getEnvironmentConfigWorkloadsConfigWebServer_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Workers",
      "Configuration for resources used by Airflow workers.",
      Composer_getEnvironmentConfigWorkloadsConfigWorker_GetTypes(),
      true,
      false,
    ),
  ];
}
