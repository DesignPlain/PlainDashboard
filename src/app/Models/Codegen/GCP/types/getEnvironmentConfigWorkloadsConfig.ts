import { getEnvironmentConfigWorkloadsConfigTriggerer } from "./getEnvironmentConfigWorkloadsConfigTriggerer";
import { getEnvironmentConfigWorkloadsConfigWebServer } from "./getEnvironmentConfigWorkloadsConfigWebServer";
import { getEnvironmentConfigWorkloadsConfigWorker } from "./getEnvironmentConfigWorkloadsConfigWorker";
import { getEnvironmentConfigWorkloadsConfigDagProcessor } from "./getEnvironmentConfigWorkloadsConfigDagProcessor";
import { getEnvironmentConfigWorkloadsConfigScheduler } from "./getEnvironmentConfigWorkloadsConfigScheduler";

export interface getEnvironmentConfigWorkloadsConfig {
  // Configuration for resources used by Airflow triggerers.
  Triggerers?: Array<getEnvironmentConfigWorkloadsConfigTriggerer>;

  // Configuration for resources used by Airflow web server.
  WebServers?: Array<getEnvironmentConfigWorkloadsConfigWebServer>;

  // Configuration for resources used by Airflow workers.
  Workers?: Array<getEnvironmentConfigWorkloadsConfigWorker>;

  // Configuration for resources used by DAG processor.
  DagProcessors?: Array<getEnvironmentConfigWorkloadsConfigDagProcessor>;

  // Configuration for resources used by Airflow schedulers.
  Schedulers?: Array<getEnvironmentConfigWorkloadsConfigScheduler>;
}
