import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lambda_FunctionEventInvokeConfigDestinationConfig,
  lambda_FunctionEventInvokeConfigDestinationConfig_GetTypes,
} from "../types/lambda_FunctionEventInvokeConfigDestinationConfig";

export interface FunctionEventInvokeConfigArgs {
  // Configuration block with destination configuration. See below for details.
  destinationConfig?: lambda_FunctionEventInvokeConfigDestinationConfig;

  /*
Name or Amazon Resource Name (ARN) of the Lambda Function, omitting any version or alias qualifier.

The following arguments are optional:
*/
  functionName?: string;

  // Maximum age of a request that Lambda sends to a function for processing in seconds. Valid values between 60 and 21600.
  maximumEventAgeInSeconds?: number;

  // Maximum number of times to retry when the function returns an error. Valid values between 0 and 2. Defaults to 2.
  maximumRetryAttempts?: number;

  // Lambda Function published version, `$LATEST`, or Lambda Alias name.
  qualifier?: string;
}
export class FunctionEventInvokeConfig extends Resource {
  // Configuration block with destination configuration. See below for details.
  public destinationConfig?: lambda_FunctionEventInvokeConfigDestinationConfig;

  /*
Name or Amazon Resource Name (ARN) of the Lambda Function, omitting any version or alias qualifier.

The following arguments are optional:
*/
  public functionName?: string;

  // Maximum age of a request that Lambda sends to a function for processing in seconds. Valid values between 60 and 21600.
  public maximumEventAgeInSeconds?: number;

  // Maximum number of times to retry when the function returns an error. Valid values between 0 and 2. Defaults to 2.
  public maximumRetryAttempts?: number;

  // Lambda Function published version, `$LATEST`, or Lambda Alias name.
  public qualifier?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "destinationConfig",
        "Configuration block with destination configuration. See below for details.",
        lambda_FunctionEventInvokeConfigDestinationConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "functionName",
        "Name or Amazon Resource Name (ARN) of the Lambda Function, omitting any version or alias qualifier.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maximumEventAgeInSeconds",
        "Maximum age of a request that Lambda sends to a function for processing in seconds. Valid values between 60 and 21600.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maximumRetryAttempts",
        "Maximum number of times to retry when the function returns an error. Valid values between 0 and 2. Defaults to 2.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "qualifier",
        "Lambda Function published version, `$LATEST`, or Lambda Alias name.",
        [],
        false,
        true,
      ),
    ];
  }
}
