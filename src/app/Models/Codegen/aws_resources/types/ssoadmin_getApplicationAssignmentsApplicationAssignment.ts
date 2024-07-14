import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ssoadmin_getApplicationAssignmentsApplicationAssignment {
  // ARN of the application.
  applicationArn?: string;

  // An identifier for an object in IAM Identity Center, such as a user or group.
  principalId?: string;

  // Entity type for which the assignment will be created. Valid values are `USER` or `GROUP`.
  principalType?: string;
}

export function ssoadmin_getApplicationAssignmentsApplicationAssignment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "principalType",
      "Entity type for which the assignment will be created. Valid values are `USER` or `GROUP`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "applicationArn",
      "ARN of the application.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "principalId",
      "An identifier for an object in IAM Identity Center, such as a user or group.",
      [],
      true,
      false,
    ),
  ];
}
