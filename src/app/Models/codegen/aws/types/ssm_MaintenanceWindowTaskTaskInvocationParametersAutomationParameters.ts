import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ssm_MaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter,
  ssm_MaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter_GetTypes,
} from './ssm_MaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter';

export interface ssm_MaintenanceWindowTaskTaskInvocationParametersAutomationParameters {
  // The version of an Automation document to use during task execution.
  documentVersion?: string;

  // The parameters for the RUN_COMMAND task execution. Documented below.
  parameters?: Array<ssm_MaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter>;
}

export function ssm_MaintenanceWindowTaskTaskInvocationParametersAutomationParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'documentVersion',
      'The version of an Automation document to use during task execution.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'parameters',
      'The parameters for the RUN_COMMAND task execution. Documented below.',
      () =>
        ssm_MaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter_GetTypes(),
      false,
      false,
    ),
  ];
}
