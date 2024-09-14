import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface RuntimeManagementConfigArgs {
  /*
Name or ARN of the Lambda function.

The following arguments are optional:
*/
  functionName?: string;

  // Version of the function. This can be `$LATEST` or a published version number. If omitted, this resource will manage the runtime configuration for `$LATEST`.
  qualifier?: string;

  // ARN of the runtime version. Only required when `update_runtime_on` is `Manual`.
  runtimeVersionArn?: string;

  // Runtime update mode. Valid values are `Auto`, `FunctionUpdate`, and `Manual`. When a function is created, the default mode is `Auto`.
  updateRuntimeOn?: string;
}
export class RuntimeManagementConfig extends DS_Resource {
  // ARN of the function.
  public functionArn?: string;

  /*
Name or ARN of the Lambda function.

The following arguments are optional:
*/
  public functionName?: string;

  // Version of the function. This can be `$LATEST` or a published version number. If omitted, this resource will manage the runtime configuration for `$LATEST`.
  public qualifier?: string;

  // ARN of the runtime version. Only required when `update_runtime_on` is `Manual`.
  public runtimeVersionArn?: string;

  // Runtime update mode. Valid values are `Auto`, `FunctionUpdate`, and `Manual`. When a function is created, the default mode is `Auto`.
  public updateRuntimeOn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "runtimeVersionArn",
        "ARN of the runtime version. Only required when `update_runtime_on` is `Manual`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "updateRuntimeOn",
        "Runtime update mode. Valid values are `Auto`, `FunctionUpdate`, and `Manual`. When a function is created, the default mode is `Auto`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "functionName",
        "Name or ARN of the Lambda function.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "qualifier",
        "Version of the function. This can be `$LATEST` or a published version number. If omitted, this resource will manage the runtime configuration for `$LATEST`.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
