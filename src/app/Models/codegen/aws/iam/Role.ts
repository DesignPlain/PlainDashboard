import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  iam_RoleInlinePolicy,
  iam_RoleInlinePolicy_GetTypes,
} from '../types/iam_RoleInlinePolicy';

export interface RoleArgs {
  // Description of the role.
  description?: string;

  // Whether to force detaching any policies the role has before destroying it. Defaults to `false`.
  forceDetachPolicies?: boolean;

  // Friendly name of the role. If omitted, the provider will assign a random, unique name. See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more information.
  name?: string;

  // Key-value mapping of tags for the IAM role. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
Policy that grants an entity permission to assume the role.

> --NOTE:-- The `assume_role_policy` is very similar to but slightly different than a standard IAM policy and cannot use an `aws.iam.Policy` resource.  However, it _can_ use an `aws.iam.getPolicyDocument` data source. See the example above of how this works.

The following arguments are optional:
*/
  assumeRolePolicy?: string;

  // Configuration block defining an exclusive set of IAM inline policies associated with the IAM role. See below. If no blocks are configured, the provider will not manage any inline policies in this resource. Configuring one empty block (i.e., `inline_policy {}`) will cause the provider to remove _all_ inline policies added out of band on `apply`.
  inlinePolicies?: Array<iam_RoleInlinePolicy>;

  //
  managedPolicyArns?: Array<string>;

  // Maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 1 hour to 12 hours.
  maxSessionDuration?: number;

  // Creates a unique friendly name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;

  // Path to the role. See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more information.
  path?: string;

  // ARN of the policy that is used to set the permissions boundary for the role.
  permissionsBoundary?: string;
}
export class Role extends DS_Resource {
  // ARN of the policy that is used to set the permissions boundary for the role.
  public permissionsBoundary?: string;

  // Stable and unique string identifying the role.
  public uniqueId?: string;

  // Creation date of the IAM role.
  public createDate?: string;

  // Path to the role. See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more information.
  public path?: string;

  // Key-value mapping of tags for the IAM role. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Whether to force detaching any policies the role has before destroying it. Defaults to `false`.
  public forceDetachPolicies?: boolean;

  // Maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 1 hour to 12 hours.
  public maxSessionDuration?: number;

  // Amazon Resource Name (ARN) specifying the role.
  public arn?: string;

  // Creates a unique friendly name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  // Configuration block defining an exclusive set of IAM inline policies associated with the IAM role. See below. If no blocks are configured, the provider will not manage any inline policies in this resource. Configuring one empty block (i.e., `inline_policy {}`) will cause the provider to remove _all_ inline policies added out of band on `apply`.
  public inlinePolicies?: Array<iam_RoleInlinePolicy>;

  //
  public managedPolicyArns?: Array<string>;

  // Friendly name of the role. If omitted, the provider will assign a random, unique name. See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more information.
  public name?: string;

  /*
Policy that grants an entity permission to assume the role.

> --NOTE:-- The `assume_role_policy` is very similar to but slightly different than a standard IAM policy and cannot use an `aws.iam.Policy` resource.  However, it _can_ use an `aws.iam.getPolicyDocument` data source. See the example above of how this works.

The following arguments are optional:
*/
  public assumeRolePolicy?: string;

  // Description of the role.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the role.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Friendly name of the role. If omitted, the provider will assign a random, unique name. See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more information.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'inlinePolicies',
        'Configuration block defining an exclusive set of IAM inline policies associated with the IAM role. See below. If no blocks are configured, the provider will not manage any inline policies in this resource. Configuring one empty block (i.e., `inline_policy {}`) will cause the provider to remove _all_ inline policies added out of band on `apply`.',
        () => iam_RoleInlinePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'managedPolicyArns',
        '',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'namePrefix',
        'Creates a unique friendly name beginning with the specified prefix. Conflicts with `name`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'path',
        'Path to the role. See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more information.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'permissionsBoundary',
        'ARN of the policy that is used to set the permissions boundary for the role.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'forceDetachPolicies',
        'Whether to force detaching any policies the role has before destroying it. Defaults to `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value mapping of tags for the IAM role. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'assumeRolePolicy',
        'Policy that grants an entity permission to assume the role.\n\n> **NOTE:** The `assume_role_policy` is very similar to but slightly different than a standard IAM policy and cannot use an `aws.iam.Policy` resource.  However, it _can_ use an `aws.iam.getPolicyDocument` data source. See the example above of how this works.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'maxSessionDuration',
        'Maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 1 hour to 12 hours.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
