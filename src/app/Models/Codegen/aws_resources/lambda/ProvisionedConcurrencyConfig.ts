import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ProvisionedConcurrencyConfigArgs {
  // Amount of capacity to allocate. Must be greater than or equal to `1`.
  provisionedConcurrentExecutions?: number;

  /*
Lambda Function version or Lambda Alias name.

The following arguments are optional:
*/
  qualifier?: string;

  // Whether to retain the provisoned concurrency configuration upon destruction. Defaults to `false`. If set to `true`, the resource in simply removed from state instead.
  skipDestroy?: boolean;

  // Name or Amazon Resource Name (ARN) of the Lambda Function.
  functionName?: string;
}
export class ProvisionedConcurrencyConfig extends Resource {
  // Name or Amazon Resource Name (ARN) of the Lambda Function.
  public functionName?: string;

  // Amount of capacity to allocate. Must be greater than or equal to `1`.
  public provisionedConcurrentExecutions?: number;

  /*
Lambda Function version or Lambda Alias name.

The following arguments are optional:
*/
  public qualifier?: string;

  // Whether to retain the provisoned concurrency configuration upon destruction. Defaults to `false`. If set to `true`, the resource in simply removed from state instead.
  public skipDestroy?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "qualifier",
        "Lambda Function version or Lambda Alias name.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "skipDestroy",
        "Whether to retain the provisoned concurrency configuration upon destruction. Defaults to `false`. If set to `true`, the resource in simply removed from state instead.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "functionName",
        "Name or Amazon Resource Name (ARN) of the Lambda Function.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "provisionedConcurrentExecutions",
        "Amount of capacity to allocate. Must be greater than or equal to `1`.",
        [],
        true,
        false,
      ),
    ];
  }
}
