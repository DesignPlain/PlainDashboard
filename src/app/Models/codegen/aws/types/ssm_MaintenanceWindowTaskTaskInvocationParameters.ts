import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssm_MaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters,
  ssm_MaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters_GetTypes,
} from "./ssm_MaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters";
import {
  ssm_MaintenanceWindowTaskTaskInvocationParametersAutomationParameters,
  ssm_MaintenanceWindowTaskTaskInvocationParametersAutomationParameters_GetTypes,
} from "./ssm_MaintenanceWindowTaskTaskInvocationParametersAutomationParameters";
import {
  ssm_MaintenanceWindowTaskTaskInvocationParametersLambdaParameters,
  ssm_MaintenanceWindowTaskTaskInvocationParametersLambdaParameters_GetTypes,
} from "./ssm_MaintenanceWindowTaskTaskInvocationParametersLambdaParameters";
import {
  ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParameters,
  ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParameters_GetTypes,
} from "./ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParameters";

export interface ssm_MaintenanceWindowTaskTaskInvocationParameters {
  // The parameters for an AUTOMATION task type. Documented below.
  automationParameters?: ssm_MaintenanceWindowTaskTaskInvocationParametersAutomationParameters;

  // The parameters for a LAMBDA task type. Documented below.
  lambdaParameters?: ssm_MaintenanceWindowTaskTaskInvocationParametersLambdaParameters;

  // The parameters for a RUN_COMMAND task type. Documented below.
  runCommandParameters?: ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParameters;

  // The parameters for a STEP_FUNCTIONS task type. Documented below.
  stepFunctionsParameters?: ssm_MaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters;
}

export function ssm_MaintenanceWindowTaskTaskInvocationParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "automationParameters",
      "The parameters for an AUTOMATION task type. Documented below.",
      () =>
        ssm_MaintenanceWindowTaskTaskInvocationParametersAutomationParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "lambdaParameters",
      "The parameters for a LAMBDA task type. Documented below.",
      () =>
        ssm_MaintenanceWindowTaskTaskInvocationParametersLambdaParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "runCommandParameters",
      "The parameters for a RUN_COMMAND task type. Documented below.",
      () =>
        ssm_MaintenanceWindowTaskTaskInvocationParametersRunCommandParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "stepFunctionsParameters",
      "The parameters for a STEP_FUNCTIONS task type. Documented below.",
      () =>
        ssm_MaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters_GetTypes(),
      false,
      false,
    ),
  ];
}
