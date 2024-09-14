import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface amp_WorkspaceLoggingConfiguration {
  // The ARN of the CloudWatch log group to which the vended log data will be published. This log group must exist.
  logGroupArn?: string;
}

export function amp_WorkspaceLoggingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "logGroupArn",
      "The ARN of the CloudWatch log group to which the vended log data will be published. This log group must exist.",
      () => [],
      true,
      false,
    ),
  ];
}
