import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  secretsmanager_SecretRotationRotationRules,
  secretsmanager_SecretRotationRotationRules_GetTypes,
} from '../types/secretsmanager_SecretRotationRotationRules';

export interface SecretRotationArgs {
  // A structure that defines the rotation configuration for this secret. Defined below.
  rotationRules?: secretsmanager_SecretRotationRotationRules;

  // Specifies the secret to which you want to add a new version. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret. The secret must already exist.
  secretId?: string;

  // Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window. The rotation schedule is defined in `rotation_rules`. For secrets that use a Lambda rotation function to rotate, if you don't immediately rotate the secret, Secrets Manager tests the rotation configuration by running the testSecret step (https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html) of the Lambda rotation function. The test creates an AWSPENDING version of the secret and then removes it. Defaults to `true`.
  rotateImmediately?: boolean;

  // Specifies the ARN of the Lambda function that can rotate the secret. Must be supplied if the secret is not managed by AWS.
  rotationLambdaArn?: string;
}
export class SecretRotation extends DS_Resource {
  // Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window. The rotation schedule is defined in `rotation_rules`. For secrets that use a Lambda rotation function to rotate, if you don't immediately rotate the secret, Secrets Manager tests the rotation configuration by running the testSecret step (https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html) of the Lambda rotation function. The test creates an AWSPENDING version of the secret and then removes it. Defaults to `true`.
  public rotateImmediately?: boolean;

  // Specifies whether automatic rotation is enabled for this secret.
  public rotationEnabled?: boolean;

  // Specifies the ARN of the Lambda function that can rotate the secret. Must be supplied if the secret is not managed by AWS.
  public rotationLambdaArn?: string;

  // A structure that defines the rotation configuration for this secret. Defined below.
  public rotationRules?: secretsmanager_SecretRotationRotationRules;

  // Specifies the secret to which you want to add a new version. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret. The secret must already exist.
  public secretId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'rotationRules',
        'A structure that defines the rotation configuration for this secret. Defined below.',
        () => secretsmanager_SecretRotationRotationRules_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'secretId',
        'Specifies the secret to which you want to add a new version. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret. The secret must already exist.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'rotateImmediately',
        "Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window. The rotation schedule is defined in `rotation_rules`. For secrets that use a Lambda rotation function to rotate, if you don't immediately rotate the secret, Secrets Manager tests the rotation configuration by running the testSecret step (https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotate-secrets_how.html) of the Lambda rotation function. The test creates an AWSPENDING version of the secret and then removes it. Defaults to `true`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'rotationLambdaArn',
        'Specifies the ARN of the Lambda function that can rotate the secret. Must be supplied if the secret is not managed by AWS.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
