import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  emrcontainers_JobTemplateJobTemplateDataJobDriverSparkSqlJobDriver,
  emrcontainers_JobTemplateJobTemplateDataJobDriverSparkSqlJobDriver_GetTypes,
} from "./emrcontainers_JobTemplateJobTemplateDataJobDriverSparkSqlJobDriver";
import {
  emrcontainers_JobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver,
  emrcontainers_JobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver_GetTypes,
} from "./emrcontainers_JobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver";

export interface emrcontainers_JobTemplateJobTemplateDataJobDriver {
  // The job driver for job type.
  sparkSqlJobDriver?: emrcontainers_JobTemplateJobTemplateDataJobDriverSparkSqlJobDriver;

  // The job driver parameters specified for spark submit.
  sparkSubmitJobDriver?: emrcontainers_JobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver;
}

export function emrcontainers_JobTemplateJobTemplateDataJobDriver_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "sparkSqlJobDriver",
      "The job driver for job type.",
      () =>
        emrcontainers_JobTemplateJobTemplateDataJobDriverSparkSqlJobDriver_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sparkSubmitJobDriver",
      "The job driver parameters specified for spark submit.",
      () =>
        emrcontainers_JobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver_GetTypes(),
      false,
      true,
    ),
  ];
}
