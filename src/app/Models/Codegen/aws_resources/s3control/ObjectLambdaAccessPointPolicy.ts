import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ObjectLambdaAccessPointPolicyArgs {
  // The AWS account ID for the account that owns the Object Lambda Access Point. Defaults to automatically determined account ID of the AWS provider.
  accountId?: string;

  // The name of the Object Lambda Access Point.
  name?: string;

  // The Object Lambda Access Point resource policy document.
  policy?: string;
}
export class ObjectLambdaAccessPointPolicy extends Resource {
  // The AWS account ID for the account that owns the Object Lambda Access Point. Defaults to automatically determined account ID of the AWS provider.
  public accountId?: string;

  // Indicates whether this access point currently has a policy that allows public access.
  public hasPublicAccessPolicy?: boolean;

  // The name of the Object Lambda Access Point.
  public name?: string;

  // The Object Lambda Access Point resource policy document.
  public policy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "The AWS account ID for the account that owns the Object Lambda Access Point. Defaults to automatically determined account ID of the AWS provider.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Object Lambda Access Point.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The Object Lambda Access Point resource policy document.",
        [],
        true,
        false,
      ),
    ];
  }
}
