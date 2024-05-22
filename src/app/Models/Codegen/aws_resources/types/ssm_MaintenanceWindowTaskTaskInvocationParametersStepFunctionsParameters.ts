import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ssm_MaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters {
  // The name of the STEP_FUNCTION task.
  name?: string;

  // The inputs for the STEP_FUNCTION task.
  input?: string;
}

export function ssm_MaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the STEP_FUNCTION task.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "input",
      "The inputs for the STEP_FUNCTION task.",
      [],
      false,
      false,
    ),
  ];
}
