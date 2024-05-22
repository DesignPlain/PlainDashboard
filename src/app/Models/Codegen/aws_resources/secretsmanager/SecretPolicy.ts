import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SecretPolicyArgs {
  // Makes an optional API call to Zelkova to validate the Resource Policy to prevent broad access to your secret.
  blockPublicPolicy?: boolean;

  // Valid JSON document representing a [resource policy](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html). Unlike `aws.secretsmanager.Secret`, where `policy` can be set to `"{}"` to delete the policy, `"{}"` is not a valid policy since `policy` is required.
  policy?: string;

  /*
Secret ARN.

The following arguments are optional:
*/
  secretArn?: string;
}
export class SecretPolicy extends Resource {
  // Makes an optional API call to Zelkova to validate the Resource Policy to prevent broad access to your secret.
  public blockPublicPolicy?: boolean;

  // Valid JSON document representing a [resource policy](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html). Unlike `aws.secretsmanager.Secret`, where `policy` can be set to `"{}"` to delete the policy, `"{}"` is not a valid policy since `policy` is required.
  public policy?: string;

  /*
Secret ARN.

The following arguments are optional:
*/
  public secretArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "blockPublicPolicy",
        "Makes an optional API call to Zelkova to validate the Resource Policy to prevent broad access to your secret.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        'Valid JSON document representing a [resource policy](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html). Unlike `aws.secretsmanager.Secret`, where `policy` can be set to `"{}"` to delete the policy, `"{}"` is not a valid policy since `policy` is required.',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "secretArn",
        "Secret ARN.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
    ];
  }
}
