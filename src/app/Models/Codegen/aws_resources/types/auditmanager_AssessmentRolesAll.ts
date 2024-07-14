import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface auditmanager_AssessmentRolesAll {
  // Amazon Resource Name (ARN) of the IAM role.
  roleArn?: string;

  // Type of customer persona. For assessment creation, type must always be `PROCESS_OWNER`.
  roleType?: string;
}

export function auditmanager_AssessmentRolesAll_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "Amazon Resource Name (ARN) of the IAM role.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleType",
      "Type of customer persona. For assessment creation, type must always be `PROCESS_OWNER`.",
      [],
      true,
      false,
    ),
  ];
}
