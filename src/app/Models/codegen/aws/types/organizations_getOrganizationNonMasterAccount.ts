import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface organizations_getOrganizationNonMasterAccount {
  // The status of the policy type as it relates to the associated root
  status?: string;

  // ARN of the root
  arn?: string;

  // Email of the account
  email?: string;

  // Identifier of the root
  id?: string;

  // The name of the policy type
  name?: string;
}

export function organizations_getOrganizationNonMasterAccount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "Identifier of the root",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the policy type",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "The status of the policy type as it relates to the associated root",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the root",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "email",
      "Email of the account",
      () => [],
      true,
      false,
    ),
  ];
}
