import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration,
  emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration_GetTypes,
} from "./emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration";
import {
  emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration,
  emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration_GetTypes,
} from "./emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration";

export interface emrcontainers_JobTemplateJobTemplateDataConfigurationOverrides {
  // The configurations for the application running by the job run.
  applicationConfigurations?: Array<emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration>;

  // The configurations for monitoring.
  monitoringConfiguration?: emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration;
}

export function emrcontainers_JobTemplateJobTemplateDataConfigurationOverrides_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "applicationConfigurations",
      "The configurations for the application running by the job run.",
      () =>
        emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "monitoringConfiguration",
      "The configurations for monitoring.",
      () =>
        emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration_GetTypes(),
      false,
      true,
    ),
  ];
}
