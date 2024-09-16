import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface emrcontainers_JobTemplateJobTemplateDataJobDriverSparkSqlJobDriver {
  // The SQL file to be executed.
  entryPoint?: string;

  // The Spark parameters to be included in the Spark SQL command.
  sparkSqlParameters?: string;
}

export function emrcontainers_JobTemplateJobTemplateDataJobDriverSparkSqlJobDriver_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'entryPoint',
      'The SQL file to be executed.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'sparkSqlParameters',
      'The Spark parameters to be included in the Spark SQL command.',
      () => [],
      false,
      true,
    ),
  ];
}
