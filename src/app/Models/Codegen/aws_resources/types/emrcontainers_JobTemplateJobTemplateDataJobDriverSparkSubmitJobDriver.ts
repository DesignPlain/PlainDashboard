import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface emrcontainers_JobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver {
  // The entry point of job application.
  entryPoint?: string;

  // The arguments for job application.
  entryPointArguments?: Array<string>;

  // The Spark submit parameters that are used for job runs.
  sparkSubmitParameters?: string;
}

export function emrcontainers_JobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sparkSubmitParameters",
      "The Spark submit parameters that are used for job runs.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "entryPoint",
      "The entry point of job application.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "entryPointArguments",
      "The arguments for job application.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
