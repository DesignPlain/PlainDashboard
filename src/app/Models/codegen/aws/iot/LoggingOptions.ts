import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface LoggingOptionsArgs {
  // If `true` all logs are disabled. The default is `false`.
  disableAllLogs?: boolean;

  // The ARN of the role that allows IoT to write to Cloudwatch logs.
  roleArn?: string;

  // The default logging level. Valid Values: `"DEBUG"`, `"INFO"`, `"ERROR"`, `"WARN"`, `"DISABLED"`.
  defaultLogLevel?: string;
}
export class LoggingOptions extends DS_Resource {
  // The ARN of the role that allows IoT to write to Cloudwatch logs.
  public roleArn?: string;

  // The default logging level. Valid Values: `"DEBUG"`, `"INFO"`, `"ERROR"`, `"WARN"`, `"DISABLED"`.
  public defaultLogLevel?: string;

  // If `true` all logs are disabled. The default is `false`.
  public disableAllLogs?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'disableAllLogs',
        'If `true` all logs are disabled. The default is `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'roleArn',
        'The ARN of the role that allows IoT to write to Cloudwatch logs.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'defaultLogLevel',
        'The default logging level. Valid Values: `"DEBUG"`, `"INFO"`, `"ERROR"`, `"WARN"`, `"DISABLED"`.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
