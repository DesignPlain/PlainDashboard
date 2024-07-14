import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  emrcontainers_JobTemplateJobTemplateDataConfigurationOverrides,
  emrcontainers_JobTemplateJobTemplateDataConfigurationOverrides_GetTypes,
} from "./emrcontainers_JobTemplateJobTemplateDataConfigurationOverrides";
import {
  emrcontainers_JobTemplateJobTemplateDataJobDriver,
  emrcontainers_JobTemplateJobTemplateDataJobDriver_GetTypes,
} from "./emrcontainers_JobTemplateJobTemplateDataJobDriver";

export interface emrcontainers_JobTemplateJobTemplateData {
  // The release version of Amazon EMR.
  releaseLabel?: string;

  // The configuration settings that are used to override defaults configuration.
  configurationOverrides?: emrcontainers_JobTemplateJobTemplateDataConfigurationOverrides;

  // The execution role ARN of the job run.
  executionRoleArn?: string;

  // Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver.
  jobDriver?: emrcontainers_JobTemplateJobTemplateDataJobDriver;

  // The tags assigned to jobs started using the job template.
  jobTags?: Map<string, string>;
}

export function emrcontainers_JobTemplateJobTemplateData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "executionRoleArn",
      "The execution role ARN of the job run.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jobDriver",
      "Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver.",
      emrcontainers_JobTemplateJobTemplateDataJobDriver_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "jobTags",
      "The tags assigned to jobs started using the job template.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "releaseLabel",
      "The release version of Amazon EMR.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "configurationOverrides",
      "The configuration settings that are used to override defaults configuration.",
      emrcontainers_JobTemplateJobTemplateDataConfigurationOverrides_GetTypes(),
      false,
      true,
    ),
  ];
}
