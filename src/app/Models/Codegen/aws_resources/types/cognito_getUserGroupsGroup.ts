import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cognito_getUserGroupsGroup {
  // Description of the user group.
  description?: string;

  // Name of the user group.
  groupName?: string;

  // Precedence of the user group.
  precedence?: number;

  // ARN of the IAM role to be associated with the user group.
  roleArn?: string;
}

export function cognito_getUserGroupsGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "groupName",
      "Name of the user group.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "precedence",
      "Precedence of the user group.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "ARN of the IAM role to be associated with the user group.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of the user group.",
      [],
      true,
      false,
    ),
  ];
}
