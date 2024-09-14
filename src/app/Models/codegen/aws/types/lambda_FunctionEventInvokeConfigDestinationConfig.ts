import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lambda_FunctionEventInvokeConfigDestinationConfigOnFailure,
  lambda_FunctionEventInvokeConfigDestinationConfigOnFailure_GetTypes,
} from "./lambda_FunctionEventInvokeConfigDestinationConfigOnFailure";
import {
  lambda_FunctionEventInvokeConfigDestinationConfigOnSuccess,
  lambda_FunctionEventInvokeConfigDestinationConfigOnSuccess_GetTypes,
} from "./lambda_FunctionEventInvokeConfigDestinationConfigOnSuccess";

export interface lambda_FunctionEventInvokeConfigDestinationConfig {
  // Configuration block with destination configuration for failed asynchronous invocations. See below for details.
  onFailure?: lambda_FunctionEventInvokeConfigDestinationConfigOnFailure;

  // Configuration block with destination configuration for successful asynchronous invocations. See below for details.
  onSuccess?: lambda_FunctionEventInvokeConfigDestinationConfigOnSuccess;
}

export function lambda_FunctionEventInvokeConfigDestinationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "onFailure",
      "Configuration block with destination configuration for failed asynchronous invocations. See below for details.",
      () =>
        lambda_FunctionEventInvokeConfigDestinationConfigOnFailure_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "onSuccess",
      "Configuration block with destination configuration for successful asynchronous invocations. See below for details.",
      () =>
        lambda_FunctionEventInvokeConfigDestinationConfigOnSuccess_GetTypes(),
      false,
      false,
    ),
  ];
}
