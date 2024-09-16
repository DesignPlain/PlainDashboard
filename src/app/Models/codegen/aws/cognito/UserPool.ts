import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cognito_UserPoolSchema,
  cognito_UserPoolSchema_GetTypes,
} from '../types/cognito_UserPoolSchema';
import {
  cognito_UserPoolUserPoolAddOns,
  cognito_UserPoolUserPoolAddOns_GetTypes,
} from '../types/cognito_UserPoolUserPoolAddOns';
import {
  cognito_UserPoolAccountRecoverySetting,
  cognito_UserPoolAccountRecoverySetting_GetTypes,
} from '../types/cognito_UserPoolAccountRecoverySetting';
import {
  cognito_UserPoolDeviceConfiguration,
  cognito_UserPoolDeviceConfiguration_GetTypes,
} from '../types/cognito_UserPoolDeviceConfiguration';
import {
  cognito_UserPoolEmailConfiguration,
  cognito_UserPoolEmailConfiguration_GetTypes,
} from '../types/cognito_UserPoolEmailConfiguration';
import {
  cognito_UserPoolUsernameConfiguration,
  cognito_UserPoolUsernameConfiguration_GetTypes,
} from '../types/cognito_UserPoolUsernameConfiguration';
import {
  cognito_UserPoolAdminCreateUserConfig,
  cognito_UserPoolAdminCreateUserConfig_GetTypes,
} from '../types/cognito_UserPoolAdminCreateUserConfig';
import {
  cognito_UserPoolPasswordPolicy,
  cognito_UserPoolPasswordPolicy_GetTypes,
} from '../types/cognito_UserPoolPasswordPolicy';
import {
  cognito_UserPoolSmsConfiguration,
  cognito_UserPoolSmsConfiguration_GetTypes,
} from '../types/cognito_UserPoolSmsConfiguration';
import {
  cognito_UserPoolUserAttributeUpdateSettings,
  cognito_UserPoolUserAttributeUpdateSettings_GetTypes,
} from '../types/cognito_UserPoolUserAttributeUpdateSettings';
import {
  cognito_UserPoolVerificationMessageTemplate,
  cognito_UserPoolVerificationMessageTemplate_GetTypes,
} from '../types/cognito_UserPoolVerificationMessageTemplate';
import {
  cognito_UserPoolSoftwareTokenMfaConfiguration,
  cognito_UserPoolSoftwareTokenMfaConfiguration_GetTypes,
} from '../types/cognito_UserPoolSoftwareTokenMfaConfiguration';
import {
  cognito_UserPoolLambdaConfig,
  cognito_UserPoolLambdaConfig_GetTypes,
} from '../types/cognito_UserPoolLambdaConfig';

export interface UserPoolArgs {
  // Configuration block for Short Message Service (SMS) settings. Detailed below. These settings apply to SMS user verification and SMS Multi-Factor Authentication (MFA). Due to Cognito API restrictions, the SMS configuration cannot be removed without recreating the Cognito User Pool. For user data safety, this resource will ignore the removal of this configuration by disabling drift detection. To force resource recreation after this configuration has been applied, see the `taint` command.
  smsConfiguration?: cognito_UserPoolSmsConfiguration;

  // Configuration block for user attribute update settings. Detailed below.
  userAttributeUpdateSettings?: cognito_UserPoolUserAttributeUpdateSettings;

  // Configuration block for verification message templates. Detailed below.
  verificationMessageTemplate?: cognito_UserPoolVerificationMessageTemplate;

  // When active, DeletionProtection prevents accidental deletion of your user pool. Before you can delete a user pool that you have protected against deletion, you must deactivate this feature. Valid values are `ACTIVE` and `INACTIVE`, Default value is `INACTIVE`.
  deletionProtection?: string;

  // Configuration block for the user pool's device tracking. Detailed below.
  deviceConfiguration?: cognito_UserPoolDeviceConfiguration;

  // String representing the email verification message. Conflicts with `verification_message_template` configuration block `email_message` argument.
  emailVerificationMessage?: string;

  // Configuration block for configuring email. Detailed below.
  emailConfiguration?: cognito_UserPoolEmailConfiguration;

  // String representing the email verification subject. Conflicts with `verification_message_template` configuration block `email_subject` argument.
  emailVerificationSubject?: string;

  // Configuration block for the schema attributes of a user pool. Detailed below. Schema attributes from the [standard attribute set](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html#cognito-user-pools-standard-attributes) only need to be specified if they are different from the default configuration. Attributes can be added, but not modified or removed. Maximum of 50 attributes.
  schemas?: Array<cognito_UserPoolSchema>;

  // Whether email addresses or phone numbers can be specified as usernames when a user signs up. Conflicts with `alias_attributes`.
  usernameAttributes?: Array<string>;

  // Configuration block for username configuration. Detailed below.
  usernameConfiguration?: cognito_UserPoolUsernameConfiguration;

  // Configuration block for creating a new user profile. Detailed below.
  adminCreateUserConfig?: cognito_UserPoolAdminCreateUserConfig;

  // Attributes supported as an alias for this user pool. Valid values: `phone_number`, `email`, or `preferred_username`. Conflicts with `username_attributes`.
  aliasAttributes?: Array<string>;

  // Attributes to be auto-verified. Valid values: `email`, `phone_number`.
  autoVerifiedAttributes?: Array<string>;

  // Multi-Factor Authentication (MFA) configuration for the User Pool. Defaults of `OFF`. Valid values are `OFF` (MFA Tokens are not required), `ON` (MFA is required for all users to sign in; requires at least one of `sms_configuration` or `software_token_mfa_configuration` to be configured), or `OPTIONAL` (MFA Will be required only for individual users who have MFA Enabled; requires at least one of `sms_configuration` or `software_token_mfa_configuration` to be configured).
  mfaConfiguration?: string;

  // Configuration block for information about the user pool password policy. Detailed below.
  passwordPolicy?: cognito_UserPoolPasswordPolicy;

  // Configuration block for software token Mult-Factor Authentication (MFA) settings. Detailed below.
  softwareTokenMfaConfiguration?: cognito_UserPoolSoftwareTokenMfaConfiguration;

  // String representing the SMS authentication message. The Message must contain the `{####}` placeholder, which will be replaced with the code.
  smsAuthenticationMessage?: string;

  // String representing the SMS verification message. Conflicts with `verification_message_template` configuration block `sms_message` argument.
  smsVerificationMessage?: string;

  // Map of tags to assign to the User Pool. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configuration block for user pool add-ons to enable user pool advanced security mode features. Detailed below.
  userPoolAddOns?: cognito_UserPoolUserPoolAddOns;

  // Configuration block to define which verified available method a user can use to recover their forgotten password. Detailed below.
  accountRecoverySetting?: cognito_UserPoolAccountRecoverySetting;

  // Configuration block for the AWS Lambda triggers associated with the user pool. Detailed below.
  lambdaConfig?: cognito_UserPoolLambdaConfig;

  /*
Name of the user pool.

The following arguments are optional:
*/
  name?: string;
}
export class UserPool extends DS_Resource {
  // Attributes to be auto-verified. Valid values: `email`, `phone_number`.
  public autoVerifiedAttributes?: Array<string>;

  // Configuration block for the user pool's device tracking. Detailed below.
  public deviceConfiguration?: cognito_UserPoolDeviceConfiguration;

  // Configuration block for the AWS Lambda triggers associated with the user pool. Detailed below.
  public lambdaConfig?: cognito_UserPoolLambdaConfig;

  // String representing the email verification message. Conflicts with `verification_message_template` configuration block `email_message` argument.
  public emailVerificationMessage?: string;

  // Endpoint name of the user pool. Example format: `cognito-idp.REGION.amazonaws.com/xxxx_yyyyy`
  public endpoint?: string;

  // Whether email addresses or phone numbers can be specified as usernames when a user signs up. Conflicts with `alias_attributes`.
  public usernameAttributes?: Array<string>;

  // Configuration block for information about the user pool password policy. Detailed below.
  public passwordPolicy?: cognito_UserPoolPasswordPolicy;

  // Configuration block for software token Mult-Factor Authentication (MFA) settings. Detailed below.
  public softwareTokenMfaConfiguration?: cognito_UserPoolSoftwareTokenMfaConfiguration;

  // Date the user pool was created.
  public creationDate?: string;

  // When active, DeletionProtection prevents accidental deletion of your user pool. Before you can delete a user pool that you have protected against deletion, you must deactivate this feature. Valid values are `ACTIVE` and `INACTIVE`, Default value is `INACTIVE`.
  public deletionProtection?: string;

  // Multi-Factor Authentication (MFA) configuration for the User Pool. Defaults of `OFF`. Valid values are `OFF` (MFA Tokens are not required), `ON` (MFA is required for all users to sign in; requires at least one of `sms_configuration` or `software_token_mfa_configuration` to be configured), or `OPTIONAL` (MFA Will be required only for individual users who have MFA Enabled; requires at least one of `sms_configuration` or `software_token_mfa_configuration` to be configured).
  public mfaConfiguration?: string;

  // ARN of the user pool.
  public arn?: string;

  // String representing the SMS verification message. Conflicts with `verification_message_template` configuration block `sms_message` argument.
  public smsVerificationMessage?: string;

  // Configuration block for username configuration. Detailed below.
  public usernameConfiguration?: cognito_UserPoolUsernameConfiguration;

  // Map of tags to assign to the User Pool. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Configuration block for creating a new user profile. Detailed below.
  public adminCreateUserConfig?: cognito_UserPoolAdminCreateUserConfig;

  // Attributes supported as an alias for this user pool. Valid values: `phone_number`, `email`, or `preferred_username`. Conflicts with `username_attributes`.
  public aliasAttributes?: Array<string>;

  // Date the user pool was last modified.
  public lastModifiedDate?: string;

  // Configuration block for the schema attributes of a user pool. Detailed below. Schema attributes from the [standard attribute set](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html#cognito-user-pools-standard-attributes) only need to be specified if they are different from the default configuration. Attributes can be added, but not modified or removed. Maximum of 50 attributes.
  public schemas?: Array<cognito_UserPoolSchema>;

  // Configuration block for Short Message Service (SMS) settings. Detailed below. These settings apply to SMS user verification and SMS Multi-Factor Authentication (MFA). Due to Cognito API restrictions, the SMS configuration cannot be removed without recreating the Cognito User Pool. For user data safety, this resource will ignore the removal of this configuration by disabling drift detection. To force resource recreation after this configuration has been applied, see the `taint` command.
  public smsConfiguration?: cognito_UserPoolSmsConfiguration;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Configuration block for user pool add-ons to enable user pool advanced security mode features. Detailed below.
  public userPoolAddOns?: cognito_UserPoolUserPoolAddOns;

  // Configuration block for verification message templates. Detailed below.
  public verificationMessageTemplate?: cognito_UserPoolVerificationMessageTemplate;

  // Configuration block to define which verified available method a user can use to recover their forgotten password. Detailed below.
  public accountRecoverySetting?: cognito_UserPoolAccountRecoverySetting;

  // Holds the domain prefix if the user pool has a domain associated with it.
  public domain?: string;

  // A number estimating the size of the user pool.
  public estimatedNumberOfUsers?: number;

  /*
Name of the user pool.

The following arguments are optional:
*/
  public name?: string;

  // String representing the SMS authentication message. The Message must contain the `{####}` placeholder, which will be replaced with the code.
  public smsAuthenticationMessage?: string;

  // Configuration block for user attribute update settings. Detailed below.
  public userAttributeUpdateSettings?: cognito_UserPoolUserAttributeUpdateSettings;

  // A custom domain name that you provide to Amazon Cognito. This parameter applies only if you use a custom domain to host the sign-up and sign-in pages for your application. For example: `auth.example.com`.
  public customDomain?: string;

  // Configuration block for configuring email. Detailed below.
  public emailConfiguration?: cognito_UserPoolEmailConfiguration;

  // String representing the email verification subject. Conflicts with `verification_message_template` configuration block `email_subject` argument.
  public emailVerificationSubject?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'deviceConfiguration',
        "Configuration block for the user pool's device tracking. Detailed below.",
        () => cognito_UserPoolDeviceConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'emailConfiguration',
        'Configuration block for configuring email. Detailed below.',
        () => cognito_UserPoolEmailConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the user pool.\n\nThe following arguments are optional:',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'schemas',
        'Configuration block for the schema attributes of a user pool. Detailed below. Schema attributes from the [standard attribute set](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html#cognito-user-pools-standard-attributes) only need to be specified if they are different from the default configuration. Attributes can be added, but not modified or removed. Maximum of 50 attributes.',
        () => cognito_UserPoolSchema_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'passwordPolicy',
        'Configuration block for information about the user pool password policy. Detailed below.',
        () => cognito_UserPoolPasswordPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'userPoolAddOns',
        'Configuration block for user pool add-ons to enable user pool advanced security mode features. Detailed below.',
        () => cognito_UserPoolUserPoolAddOns_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'smsConfiguration',
        'Configuration block for Short Message Service (SMS) settings. Detailed below. These settings apply to SMS user verification and SMS Multi-Factor Authentication (MFA). Due to Cognito API restrictions, the SMS configuration cannot be removed without recreating the Cognito User Pool. For user data safety, this resource will ignore the removal of this configuration by disabling drift detection. To force resource recreation after this configuration has been applied, see the `taint` command.',
        () => cognito_UserPoolSmsConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'deletionProtection',
        'When active, DeletionProtection prevents accidental deletion of your user pool. Before you can delete a user pool that you have protected against deletion, you must deactivate this feature. Valid values are `ACTIVE` and `INACTIVE`, Default value is `INACTIVE`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'emailVerificationMessage',
        'String representing the email verification message. Conflicts with `verification_message_template` configuration block `email_message` argument.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'emailVerificationSubject',
        'String representing the email verification subject. Conflicts with `verification_message_template` configuration block `email_subject` argument.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'smsVerificationMessage',
        'String representing the SMS verification message. Conflicts with `verification_message_template` configuration block `sms_message` argument.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'accountRecoverySetting',
        'Configuration block to define which verified available method a user can use to recover their forgotten password. Detailed below.',
        () => cognito_UserPoolAccountRecoverySetting_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'userAttributeUpdateSettings',
        'Configuration block for user attribute update settings. Detailed below.',
        () => cognito_UserPoolUserAttributeUpdateSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'usernameAttributes',
        'Whether email addresses or phone numbers can be specified as usernames when a user signs up. Conflicts with `alias_attributes`.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'adminCreateUserConfig',
        'Configuration block for creating a new user profile. Detailed below.',
        () => cognito_UserPoolAdminCreateUserConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'mfaConfiguration',
        'Multi-Factor Authentication (MFA) configuration for the User Pool. Defaults of `OFF`. Valid values are `OFF` (MFA Tokens are not required), `ON` (MFA is required for all users to sign in; requires at least one of `sms_configuration` or `software_token_mfa_configuration` to be configured), or `OPTIONAL` (MFA Will be required only for individual users who have MFA Enabled; requires at least one of `sms_configuration` or `software_token_mfa_configuration` to be configured).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'softwareTokenMfaConfiguration',
        'Configuration block for software token Mult-Factor Authentication (MFA) settings. Detailed below.',
        () => cognito_UserPoolSoftwareTokenMfaConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'smsAuthenticationMessage',
        'String representing the SMS authentication message. The Message must contain the `{####}` placeholder, which will be replaced with the code.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of tags to assign to the User Pool. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'lambdaConfig',
        'Configuration block for the AWS Lambda triggers associated with the user pool. Detailed below.',
        () => cognito_UserPoolLambdaConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'verificationMessageTemplate',
        'Configuration block for verification message templates. Detailed below.',
        () => cognito_UserPoolVerificationMessageTemplate_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'usernameConfiguration',
        'Configuration block for username configuration. Detailed below.',
        () => cognito_UserPoolUsernameConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'aliasAttributes',
        'Attributes supported as an alias for this user pool. Valid values: `phone_number`, `email`, or `preferred_username`. Conflicts with `username_attributes`.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'autoVerifiedAttributes',
        'Attributes to be auto-verified. Valid values: `email`, `phone_number`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
