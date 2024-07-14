import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sfn_StateMachineLoggingConfiguration {
  // Determines whether execution data is included in your log. When set to `false`, data is excluded.
  includeExecutionData?: boolean;

  // Defines which category of execution history events are logged. Valid values: `ALL`, `ERROR`, `FATAL`, `OFF`
  level?: string;

  // Amazon Resource Name (ARN) of a CloudWatch log group. Make sure the State Machine has the correct IAM policies for logging. The ARN must end with `:-`
  logDestination?: string;
}

export function sfn_StateMachineLoggingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "includeExecutionData",
      "Determines whether execution data is included in your log. When set to `false`, data is excluded.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "level",
      "Defines which category of execution history events are logged. Valid values: `ALL`, `ERROR`, `FATAL`, `OFF`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logDestination",
      "Amazon Resource Name (ARN) of a CloudWatch log group. Make sure the State Machine has the correct IAM policies for logging. The ARN must end with `:*`",
      [],
      false,
      false,
    ),
  ];
}
