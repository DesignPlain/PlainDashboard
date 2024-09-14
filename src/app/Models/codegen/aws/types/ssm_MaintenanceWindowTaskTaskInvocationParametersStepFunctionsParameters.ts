import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ssm_MaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters {
  // The inputs for the STEP_FUNCTION task.
  input?: string;

  // The name of the STEP_FUNCTION task.
  name?: string;
}

export function ssm_MaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "input",
      "The inputs for the STEP_FUNCTION task.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the STEP_FUNCTION task.",
      () => [],
      false,
      false,
    ),
  ];
}
