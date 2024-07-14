import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface AccountAssignmentArgs {
  // An identifier for an object in SSO, such as a user or group. PrincipalIds are GUIDs (For example, `f81d4fae-7dec-11d0-a765-00a0c91e6bf6`).
  principalId?: string;

  // The entity type for which the assignment will be created. Valid values: `USER`, `GROUP`.
  principalType?: string;

  // An AWS account identifier, typically a 10-12 digit string.
  targetId?: string;

  // The entity type for which the assignment will be created. Valid values: `AWS_ACCOUNT`.
  targetType?: string;

  // The Amazon Resource Name (ARN) of the SSO Instance.
  instanceArn?: string;

  // The Amazon Resource Name (ARN) of the Permission Set that the admin wants to grant the principal access to.
  permissionSetArn?: string;
}
export class AccountAssignment extends Resource {
  // The Amazon Resource Name (ARN) of the Permission Set that the admin wants to grant the principal access to.
  public permissionSetArn?: string;

  // An identifier for an object in SSO, such as a user or group. PrincipalIds are GUIDs (For example, `f81d4fae-7dec-11d0-a765-00a0c91e6bf6`).
  public principalId?: string;

  // The entity type for which the assignment will be created. Valid values: `USER`, `GROUP`.
  public principalType?: string;

  // An AWS account identifier, typically a 10-12 digit string.
  public targetId?: string;

  // The entity type for which the assignment will be created. Valid values: `AWS_ACCOUNT`.
  public targetType?: string;

  // The Amazon Resource Name (ARN) of the SSO Instance.
  public instanceArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "principalId",
        "An identifier for an object in SSO, such as a user or group. PrincipalIds are GUIDs (For example, `f81d4fae-7dec-11d0-a765-00a0c91e6bf6`).",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "principalType",
        "The entity type for which the assignment will be created. Valid values: `USER`, `GROUP`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetId",
        "An AWS account identifier, typically a 10-12 digit string.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetType",
        "The entity type for which the assignment will be created. Valid values: `AWS_ACCOUNT`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceArn",
        "The Amazon Resource Name (ARN) of the SSO Instance.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "permissionSetArn",
        "The Amazon Resource Name (ARN) of the Permission Set that the admin wants to grant the principal access to.",
        [],
        true,
        true,
      ),
    ];
  }
}
