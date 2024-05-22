import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface emrcontainers_JobTemplateJobTemplateDataJobDriverSparkSqlJobDriver {
  // The Spark parameters to be included in the Spark SQL command.
  sparkSqlParameters?: string;

  // The SQL file to be executed.
  entryPoint?: string;
}

export function emrcontainers_JobTemplateJobTemplateDataJobDriverSparkSqlJobDriver_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sparkSqlParameters",
      "The Spark parameters to be included in the Spark SQL command.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "entryPoint",
      "The SQL file to be executed.",
      [],
      false,
      true,
    ),
  ];
}
