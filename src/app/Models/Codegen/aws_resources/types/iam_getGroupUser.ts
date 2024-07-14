import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface iam_getGroupUser {
  // User ARN.
  arn?: string;

  // Path to the IAM user.
  path?: string;

  // Stable and unique string identifying the IAM user.
  userId?: string;

  // Name of the IAM user.
  userName?: string;
}

export function iam_getGroupUser_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "userName",
      "Name of the IAM user.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "arn", "User ARN.", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Path to the IAM user.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userId",
      "Stable and unique string identifying the IAM user.",
      [],
      true,
      false,
    ),
  ];
}
