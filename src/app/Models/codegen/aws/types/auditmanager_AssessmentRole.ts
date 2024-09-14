import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface auditmanager_AssessmentRole {
  // Amazon Resource Name (ARN) of the IAM role.
  roleArn?: string;

  // Type of customer persona. For assessment creation, type must always be `PROCESS_OWNER`.
  roleType?: string;
}

export function auditmanager_AssessmentRole_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "Amazon Resource Name (ARN) of the IAM role.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleType",
      "Type of customer persona. For assessment creation, type must always be `PROCESS_OWNER`.",
      () => [],
      true,
      false,
    ),
  ];
}
