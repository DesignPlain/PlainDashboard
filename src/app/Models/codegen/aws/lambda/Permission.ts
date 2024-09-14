import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface PermissionArgs {
  // The AWS Lambda action you want to allow in this statement. (e.g., `lambda:InvokeFunction`)
  action?: string;

  // Name of the Lambda function whose resource policy you are updating
  function?: string;

  /*
The identifier for your organization in AWS Organizations. Use this to grant permissions to all the AWS accounts under this organization.

[1]: https://developer.amazon.com/docs/custom-skills/host-a-custom-skill-as-an-aws-lambda-function.html#use-aws-cli
[2]: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html
[3]: https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html
*/
  principalOrgId?: string;

  // Query parameter to specify function version or alias name. The permission will then apply to the specific qualified ARN e.g., `arn:aws:lambda:aws-region:acct-id:function:function-name:2`
  qualifier?: string;

  // A statement identifier prefix. The provider will generate a unique suffix. Conflicts with `statement_id`.
  statementIdPrefix?: string;

  // The Event Source Token to validate.  Used with [Alexa Skills](https://developer.amazon.com/docs/custom-skills/host-a-custom-skill-as-an-aws-lambda-function.html#use-aws-cli).
  eventSourceToken?: string;

  // Lambda Function URLs [authentication type](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html). Valid values are: `AWS_IAM` or `NONE`. Only supported for `lambda:InvokeFunctionUrl` action.
  functionUrlAuthType?: string;

  // The principal who is getting this permission e.g., `s3.amazonaws.com`, an AWS account ID, or AWS IAM principal, or AWS service principal such as `events.amazonaws.com` or `sns.amazonaws.com`.
  principal?: string;

  // This parameter is used when allowing cross-account access, or for S3 and SES. The AWS account ID (without a hyphen) of the source owner.
  sourceAccount?: string;

  /*
When the principal is an AWS service, the ARN of the specific resource within that service to grant permission to.
Without this, any resource from `principal` will be granted permission – even if that resource is from another account.
For S3, this should be the ARN of the S3 Bucket.
For EventBridge events, this should be the ARN of the EventBridge Rule.
For API Gateway, this should be the ARN of the API, as described [here](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html).
*/
  sourceArn?: string;

  // A unique statement identifier. By default generated by the provider.
  statementId?: string;
}
export class Permission extends DS_Resource {
  // The AWS Lambda action you want to allow in this statement. (e.g., `lambda:InvokeFunction`)
  public action?: string;

  // The Event Source Token to validate.  Used with [Alexa Skills](https://developer.amazon.com/docs/custom-skills/host-a-custom-skill-as-an-aws-lambda-function.html#use-aws-cli).
  public eventSourceToken?: string;

  // This parameter is used when allowing cross-account access, or for S3 and SES. The AWS account ID (without a hyphen) of the source owner.
  public sourceAccount?: string;

  // A statement identifier prefix. The provider will generate a unique suffix. Conflicts with `statement_id`.
  public statementIdPrefix?: string;

  /*
When the principal is an AWS service, the ARN of the specific resource within that service to grant permission to.
Without this, any resource from `principal` will be granted permission – even if that resource is from another account.
For S3, this should be the ARN of the S3 Bucket.
For EventBridge events, this should be the ARN of the EventBridge Rule.
For API Gateway, this should be the ARN of the API, as described [here](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html).
*/
  public sourceArn?: string;

  // A unique statement identifier. By default generated by the provider.
  public statementId?: string;

  // Name of the Lambda function whose resource policy you are updating
  public function?: string;

  // Lambda Function URLs [authentication type](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html). Valid values are: `AWS_IAM` or `NONE`. Only supported for `lambda:InvokeFunctionUrl` action.
  public functionUrlAuthType?: string;

  // The principal who is getting this permission e.g., `s3.amazonaws.com`, an AWS account ID, or AWS IAM principal, or AWS service principal such as `events.amazonaws.com` or `sns.amazonaws.com`.
  public principal?: string;

  /*
The identifier for your organization in AWS Organizations. Use this to grant permissions to all the AWS accounts under this organization.

[1]: https://developer.amazon.com/docs/custom-skills/host-a-custom-skill-as-an-aws-lambda-function.html#use-aws-cli
[2]: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html
[3]: https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html
*/
  public principalOrgId?: string;

  // Query parameter to specify function version or alias name. The permission will then apply to the specific qualified ARN e.g., `arn:aws:lambda:aws-region:acct-id:function:function-name:2`
  public qualifier?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "sourceAccount",
        "This parameter is used when allowing cross-account access, or for S3 and SES. The AWS account ID (without a hyphen) of the source owner.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "statementId",
        "A unique statement identifier. By default generated by the provider.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "action",
        "The AWS Lambda action you want to allow in this statement. (e.g., `lambda:InvokeFunction`)",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "principalOrgId",
        "The identifier for your organization in AWS Organizations. Use this to grant permissions to all the AWS accounts under this organization.\n\n[1]: https://developer.amazon.com/docs/custom-skills/host-a-custom-skill-as-an-aws-lambda-function.html#use-aws-cli\n[2]: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html\n[3]: https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "qualifier",
        "Query parameter to specify function version or alias name. The permission will then apply to the specific qualified ARN e.g., `arn:aws:lambda:aws-region:acct-id:function:function-name:2`",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "statementIdPrefix",
        "A statement identifier prefix. The provider will generate a unique suffix. Conflicts with `statement_id`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceArn",
        "When the principal is an AWS service, the ARN of the specific resource within that service to grant permission to.\nWithout this, any resource from `principal` will be granted permission – even if that resource is from another account.\nFor S3, this should be the ARN of the S3 Bucket.\nFor EventBridge events, this should be the ARN of the EventBridge Rule.\nFor API Gateway, this should be the ARN of the API, as described [here](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html).",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "function",
        "Name of the Lambda function whose resource policy you are updating",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "eventSourceToken",
        "The Event Source Token to validate.  Used with [Alexa Skills](https://developer.amazon.com/docs/custom-skills/host-a-custom-skill-as-an-aws-lambda-function.html#use-aws-cli).",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "functionUrlAuthType",
        "Lambda Function URLs [authentication type](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html). Valid values are: `AWS_IAM` or `NONE`. Only supported for `lambda:InvokeFunctionUrl` action.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "principal",
        "The principal who is getting this permission e.g., `s3.amazonaws.com`, an AWS account ID, or AWS IAM principal, or AWS service principal such as `events.amazonaws.com` or `sns.amazonaws.com`.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
