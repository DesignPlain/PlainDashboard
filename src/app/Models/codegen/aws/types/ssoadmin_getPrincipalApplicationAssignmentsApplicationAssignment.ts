import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ssoadmin_getPrincipalApplicationAssignmentsApplicationAssignment {
  // Entity type for which the assignment will be created. Valid values are `USER` or `GROUP`.
  principalType?: string;

  // ARN of the application.
  applicationArn?: string;

  // An identifier for an object in IAM Identity Center, such as a user or group.
  principalId?: string;
}

export function ssoadmin_getPrincipalApplicationAssignmentsApplicationAssignment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "principalType",
      "Entity type for which the assignment will be created. Valid values are `USER` or `GROUP`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "applicationArn",
      "ARN of the application.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "principalId",
      "An identifier for an object in IAM Identity Center, such as a user or group.",
      () => [],
      true,
      false,
    ),
  ];
}
