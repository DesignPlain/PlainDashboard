import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ApplicationAssignmentArgs {
  // ARN of the application.
  applicationArn?: string;

  // An identifier for an object in IAM Identity Center, such as a user or group.
  principalId?: string;

  // Entity type for which the assignment will be created. Valid values are `USER` or `GROUP`.
  principalType?: string;
}
export class ApplicationAssignment extends DS_Resource {
  // ARN of the application.
  public applicationArn?: string;

  // An identifier for an object in IAM Identity Center, such as a user or group.
  public principalId?: string;

  // Entity type for which the assignment will be created. Valid values are `USER` or `GROUP`.
  public principalType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
      new DynamicUIProps(
        InputType.String,
        "principalType",
        "Entity type for which the assignment will be created. Valid values are `USER` or `GROUP`.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
