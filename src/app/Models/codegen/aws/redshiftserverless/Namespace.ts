import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface NamespaceArgs {
  // The types of logs the namespace can export. Available export types are `userlog`, `connectionlog`, and `useractivitylog`.
  logExports?: Array<string>;

  /*
Whether to use AWS SecretManager to manage namespace's admin credentials.
Conflicts with `admin_user_password`.
*/
  manageAdminPassword?: boolean;

  // The name of the namespace.
  namespaceName?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
The password of the administrator for the first database created in the namespace.
Conflicts with `manage_admin_password`.
*/
  adminUserPassword?: string;

  // The username of the administrator for the first database created in the namespace.
  adminUsername?: string;

  // The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace. When specifying `default_iam_role_arn`, it also must be part of `iam_roles`.
  defaultIamRoleArn?: string;

  // The ARN of the Amazon Web Services Key Management Service key used to encrypt your data.
  kmsKeyId?: string;

  // ID of the KMS key used to encrypt the namespace's admin credentials secret.
  adminPasswordSecretKmsKeyId?: string;

  // The name of the first database created in the namespace.
  dbName?: string;

  // A list of IAM roles to associate with the namespace.
  iamRoles?: Array<string>;
}
export class Namespace extends DS_Resource {
  /*
Whether to use AWS SecretManager to manage namespace's admin credentials.
Conflicts with `admin_user_password`.
*/
  public manageAdminPassword?: boolean;

  /*
The password of the administrator for the first database created in the namespace.
Conflicts with `manage_admin_password`.
*/
  public adminUserPassword?: string;

  // The username of the administrator for the first database created in the namespace.
  public adminUsername?: string;

  // The types of logs the namespace can export. Available export types are `userlog`, `connectionlog`, and `useractivitylog`.
  public logExports?: Array<string>;

  // A list of IAM roles to associate with the namespace.
  public iamRoles?: Array<string>;

  // The ARN of the Amazon Web Services Key Management Service key used to encrypt your data.
  public kmsKeyId?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public adminPasswordSecretArn?: string;

  // Amazon Resource Name (ARN) of the Redshift Serverless Namespace.
  public arn?: string;

  // The name of the first database created in the namespace.
  public dbName?: string;

  // ID of the KMS key used to encrypt the namespace's admin credentials secret.
  public adminPasswordSecretKmsKeyId?: string;

  // The name of the namespace.
  public namespaceName?: string;

  // The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace. When specifying `default_iam_role_arn`, it also must be part of `iam_roles`.
  public defaultIamRoleArn?: string;

  // The Redshift Namespace ID.
  public namespaceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'adminUsername',
        'The username of the administrator for the first database created in the namespace.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'defaultIamRoleArn',
        'The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace. When specifying `default_iam_role_arn`, it also must be part of `iam_roles`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'kmsKeyId',
        'The ARN of the Amazon Web Services Key Management Service key used to encrypt your data.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'adminPasswordSecretKmsKeyId',
        "ID of the KMS key used to encrypt the namespace's admin credentials secret.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'logExports',
        'The types of logs the namespace can export. Available export types are `userlog`, `connectionlog`, and `useractivitylog`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'manageAdminPassword',
        "Whether to use AWS SecretManager to manage namespace's admin credentials.\nConflicts with `admin_user_password`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'namespaceName',
        'The name of the namespace.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'adminUserPassword',
        'The password of the administrator for the first database created in the namespace.\nConflicts with `manage_admin_password`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'dbName',
        'The name of the first database created in the namespace.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'iamRoles',
        'A list of IAM roles to associate with the namespace.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
