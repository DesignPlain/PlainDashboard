import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ssm_MaintenanceWindowTaskTaskInvocationParametersLambdaParameters {
  // Specify a Lambda function version or alias name.
  qualifier?: string;

  // Pass client-specific information to the Lambda function that you are invoking.
  clientContext?: string;

  // JSON to provide to your Lambda function as input.
  payload?: string;
}

export function ssm_MaintenanceWindowTaskTaskInvocationParametersLambdaParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "qualifier",
      "Specify a Lambda function version or alias name.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientContext",
      "Pass client-specific information to the Lambda function that you are invoking.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "payload",
      "JSON to provide to your Lambda function as input.",
      () => [],
      false,
      false,
    ),
  ];
}
