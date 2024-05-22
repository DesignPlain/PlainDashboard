import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface organizations_getDelegatedAdministratorsDelegatedAdministrator {
  // The status of the delegated administrator's account in the organization.
  status?: string;

  // The ARN of the delegated administrator's account.
  arn?: string;

  // The date when the account was made a delegated administrator.
  delegationEnabledDate?: string;

  // The email address that is associated with the delegated administrator's AWS account.
  email?: string;

  // The unique identifier (ID) of the delegated administrator's account.
  id?: string;

  // The method by which the delegated administrator's account joined the organization.
  joinedMethod?: string;

  // The date when the delegated administrator's account became a part of the organization.
  joinedTimestamp?: string;

  // The friendly name of the delegated administrator's account.
  name?: string;
}

export function organizations_getDelegatedAdministratorsDelegatedAdministrator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "delegationEnabledDate",
      "The date when the account was made a delegated administrator.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "email",
      "The email address that is associated with the delegated administrator's AWS account.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "The unique identifier (ID) of the delegated administrator's account.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "joinedMethod",
      "The method by which the delegated administrator's account joined the organization.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "joinedTimestamp",
      "The date when the delegated administrator's account became a part of the organization.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The friendly name of the delegated administrator's account.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "The status of the delegated administrator's account in the organization.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "arn",
      "The ARN of the delegated administrator's account.",
      [],
      true,
      false,
    ),
  ];
}
