import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface organizations_getOrganizationAccount {
  // ARN of the root
  arn?: string;

  // Email of the account
  email?: string;

  // Identifier of the root
  id?: string;

  // The name of the policy type
  name?: string;

  // The status of the policy type as it relates to the associated root
  status?: string;
}

export function organizations_getOrganizationAccount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the root",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "email",
      "Email of the account",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Identifier of the root",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the policy type",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "The status of the policy type as it relates to the associated root",
      [],
      true,
      false,
    ),
  ];
}
