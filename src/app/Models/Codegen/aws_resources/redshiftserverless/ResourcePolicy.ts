import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ResourcePolicyArgs {
  // The policy to create or update. For example, the following policy grants a user authorization to restore a snapshot.
  policy?: string;

  // The Amazon Resource Name (ARN) of the account to create or update a resource policy for.
  resourceArn?: string;
}
export class ResourcePolicy extends Resource {
  // The policy to create or update. For example, the following policy grants a user authorization to restore a snapshot.
  public policy?: string;

  // The Amazon Resource Name (ARN) of the account to create or update a resource policy for.
  public resourceArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "resourceArn",
        "The Amazon Resource Name (ARN) of the account to create or update a resource policy for.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The policy to create or update. For example, the following policy grants a user authorization to restore a snapshot.",
        [],
        true,
        false,
      ),
    ];
  }
}
