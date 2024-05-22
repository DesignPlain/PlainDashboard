import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface LoggingOptionsArgs {
  // The default logging level. Valid Values: `"DEBUG"`, `"INFO"`, `"ERROR"`, `"WARN"`, `"DISABLED"`.
  defaultLogLevel?: string;

  // If `true` all logs are disabled. The default is `false`.
  disableAllLogs?: boolean;

  // The ARN of the role that allows IoT to write to Cloudwatch logs.
  roleArn?: string;
}
export class LoggingOptions extends Resource {
  // The default logging level. Valid Values: `"DEBUG"`, `"INFO"`, `"ERROR"`, `"WARN"`, `"DISABLED"`.
  public defaultLogLevel?: string;

  // If `true` all logs are disabled. The default is `false`.
  public disableAllLogs?: boolean;

  // The ARN of the role that allows IoT to write to Cloudwatch logs.
  public roleArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "defaultLogLevel",
        'The default logging level. Valid Values: `"DEBUG"`, `"INFO"`, `"ERROR"`, `"WARN"`, `"DISABLED"`.',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disableAllLogs",
        "If `true` all logs are disabled. The default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The ARN of the role that allows IoT to write to Cloudwatch logs.",
        [],
        true,
        false,
      ),
    ];
  }
}
