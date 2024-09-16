import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  composer_EnvironmentConfigWorkloadsConfigDagProcessor,
  composer_EnvironmentConfigWorkloadsConfigDagProcessor_GetTypes,
} from './composer_EnvironmentConfigWorkloadsConfigDagProcessor';
import {
  composer_EnvironmentConfigWorkloadsConfigScheduler,
  composer_EnvironmentConfigWorkloadsConfigScheduler_GetTypes,
} from './composer_EnvironmentConfigWorkloadsConfigScheduler';
import {
  composer_EnvironmentConfigWorkloadsConfigTriggerer,
  composer_EnvironmentConfigWorkloadsConfigTriggerer_GetTypes,
} from './composer_EnvironmentConfigWorkloadsConfigTriggerer';
import {
  composer_EnvironmentConfigWorkloadsConfigWebServer,
  composer_EnvironmentConfigWorkloadsConfigWebServer_GetTypes,
} from './composer_EnvironmentConfigWorkloadsConfigWebServer';
import {
  composer_EnvironmentConfigWorkloadsConfigWorker,
  composer_EnvironmentConfigWorkloadsConfigWorker_GetTypes,
} from './composer_EnvironmentConfigWorkloadsConfigWorker';

export interface composer_EnvironmentConfigWorkloadsConfig {
  // Configuration for resources used by DAG processor.
  dagProcessor?: composer_EnvironmentConfigWorkloadsConfigDagProcessor;

  // Configuration for resources used by Airflow schedulers.
  scheduler?: composer_EnvironmentConfigWorkloadsConfigScheduler;

  // Configuration for resources used by Airflow triggerers.
  triggerer?: composer_EnvironmentConfigWorkloadsConfigTriggerer;

  // Configuration for resources used by Airflow web server.
  webServer?: composer_EnvironmentConfigWorkloadsConfigWebServer;

  // Configuration for resources used by Airflow workers.
  worker?: composer_EnvironmentConfigWorkloadsConfigWorker;
}

export function composer_EnvironmentConfigWorkloadsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'triggerer',
      'Configuration for resources used by Airflow triggerers.',
      () => composer_EnvironmentConfigWorkloadsConfigTriggerer_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'webServer',
      'Configuration for resources used by Airflow web server.',
      () => composer_EnvironmentConfigWorkloadsConfigWebServer_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'worker',
      'Configuration for resources used by Airflow workers.',
      () => composer_EnvironmentConfigWorkloadsConfigWorker_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'dagProcessor',
      'Configuration for resources used by DAG processor.',
      () => composer_EnvironmentConfigWorkloadsConfigDagProcessor_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'scheduler',
      'Configuration for resources used by Airflow schedulers.',
      () => composer_EnvironmentConfigWorkloadsConfigScheduler_GetTypes(),
      false,
      false,
    ),
  ];
}
