import { EnvironmentConfigWorkloadsConfigTriggerer } from "./EnvironmentConfigWorkloadsConfigTriggerer";
import { EnvironmentConfigWorkloadsConfigWebServer } from "./EnvironmentConfigWorkloadsConfigWebServer";
import { EnvironmentConfigWorkloadsConfigWorker } from "./EnvironmentConfigWorkloadsConfigWorker";
import { EnvironmentConfigWorkloadsConfigDagProcessor } from "./EnvironmentConfigWorkloadsConfigDagProcessor";
import { EnvironmentConfigWorkloadsConfigScheduler } from "./EnvironmentConfigWorkloadsConfigScheduler";

export interface EnvironmentConfigWorkloadsConfig {
  // Configuration for resources used by DAG processor.
  DagProcessor?: EnvironmentConfigWorkloadsConfigDagProcessor;

  // Configuration for resources used by Airflow schedulers.
  Scheduler?: EnvironmentConfigWorkloadsConfigScheduler;

  // Configuration for resources used by Airflow triggerers.
  Triggerer?: EnvironmentConfigWorkloadsConfigTriggerer;

  // Configuration for resources used by Airflow web server.
  WebServer?: EnvironmentConfigWorkloadsConfigWebServer;

  // Configuration for resources used by Airflow workers.
  Worker?: EnvironmentConfigWorkloadsConfigWorker;
}
