import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface organizations_OrganizationNonMasterAccount {
  // The name of the policy type
  name?: string;

  // The status of the policy type as it relates to the associated root
  status?: string;

  // ARN of the root
  arn?: string;

  // Email of the account
  email?: string;

  // Identifier of the root
  id?: string;
}

export function organizations_OrganizationNonMasterAccount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the policy type",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "The status of the policy type as it relates to the associated root",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the root",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "email",
      "Email of the account",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Identifier of the root",
      () => [],
      false,
      false,
    ),
  ];
}
