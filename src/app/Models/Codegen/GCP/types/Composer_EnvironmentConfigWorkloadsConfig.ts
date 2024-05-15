import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Composer_EnvironmentConfigWorkloadsConfigWorker,
  Composer_EnvironmentConfigWorkloadsConfigWorker_GetTypes,
} from "./Composer_EnvironmentConfigWorkloadsConfigWorker";
import {
  Composer_EnvironmentConfigWorkloadsConfigDagProcessor,
  Composer_EnvironmentConfigWorkloadsConfigDagProcessor_GetTypes,
} from "./Composer_EnvironmentConfigWorkloadsConfigDagProcessor";
import {
  Composer_EnvironmentConfigWorkloadsConfigScheduler,
  Composer_EnvironmentConfigWorkloadsConfigScheduler_GetTypes,
} from "./Composer_EnvironmentConfigWorkloadsConfigScheduler";
import {
  Composer_EnvironmentConfigWorkloadsConfigTriggerer,
  Composer_EnvironmentConfigWorkloadsConfigTriggerer_GetTypes,
} from "./Composer_EnvironmentConfigWorkloadsConfigTriggerer";
import {
  Composer_EnvironmentConfigWorkloadsConfigWebServer,
  Composer_EnvironmentConfigWorkloadsConfigWebServer_GetTypes,
} from "./Composer_EnvironmentConfigWorkloadsConfigWebServer";

export interface Composer_EnvironmentConfigWorkloadsConfig {
  // Configuration for resources used by Airflow schedulers.
  Scheduler?: Composer_EnvironmentConfigWorkloadsConfigScheduler;

  // Configuration for resources used by Airflow triggerers.
  Triggerer?: Composer_EnvironmentConfigWorkloadsConfigTriggerer;

  // Configuration for resources used by Airflow web server.
  WebServer?: Composer_EnvironmentConfigWorkloadsConfigWebServer;

  // Configuration for resources used by Airflow workers.
  Worker?: Composer_EnvironmentConfigWorkloadsConfigWorker;

  // Configuration for resources used by DAG processor.
  DagProcessor?: Composer_EnvironmentConfigWorkloadsConfigDagProcessor;
}

export function Composer_EnvironmentConfigWorkloadsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Triggerer",
      "Configuration for resources used by Airflow triggerers.",
      Composer_EnvironmentConfigWorkloadsConfigTriggerer_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "WebServer",
      "Configuration for resources used by Airflow web server.",
      Composer_EnvironmentConfigWorkloadsConfigWebServer_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Worker",
      "Configuration for resources used by Airflow workers.",
      Composer_EnvironmentConfigWorkloadsConfigWorker_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DagProcessor",
      "Configuration for resources used by DAG processor.",
      Composer_EnvironmentConfigWorkloadsConfigDagProcessor_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Scheduler",
      "Configuration for resources used by Airflow schedulers.",
      Composer_EnvironmentConfigWorkloadsConfigScheduler_GetTypes(),
      false,
      false,
    ),
  ];
}
