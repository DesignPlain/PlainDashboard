import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ecr_RepositoryCreationTemplateEncryptionConfiguration,
  ecr_RepositoryCreationTemplateEncryptionConfiguration_GetTypes,
} from '../types/ecr_RepositoryCreationTemplateEncryptionConfiguration';

export interface RepositoryCreationTemplateArgs {
  //
  repositoryPolicy?: string;

  // A map of tags to assign to any created repositories.
  resourceTags?: Map<string, string>;

  // A custom IAM role to use for repository creation. Required if using repository tags or KMS encryption.
  customRoleArn?: string;

  // The description for this template.
  description?: string;

  // The tag mutability setting for any created repositories. Must be one of: `MUTABLE` or `IMMUTABLE`. Defaults to `MUTABLE`.
  imageTagMutability?: string;

  // The lifecycle policy document to apply to any created repositories. See more details about [Policy Parameters](http://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html#lifecycle_policy_parameters) in the official AWS docs. Consider using the `aws.ecr.getLifecyclePolicyDocument` data_source to generate/manage the JSON document used for the `lifecycle_policy` argument.
  lifecyclePolicy?: string;

  // The repository name prefix to match against. Use `ROOT` to match any prefix that doesn't explicitly match another template.
  prefix?: string;

  // Which features this template applies to. Must contain one or more of `PULL_THROUGH_CACHE` or `REPLICATION`.
  appliedFors?: Array<string>;

  // Encryption configuration for any created repositories. See below for schema.
  encryptionConfigurations?: Array<ecr_RepositoryCreationTemplateEncryptionConfiguration>;
}
export class RepositoryCreationTemplate extends DS_Resource {
  // The lifecycle policy document to apply to any created repositories. See more details about [Policy Parameters](http://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html#lifecycle_policy_parameters) in the official AWS docs. Consider using the `aws.ecr.getLifecyclePolicyDocument` data_source to generate/manage the JSON document used for the `lifecycle_policy` argument.
  public lifecyclePolicy?: string;

  // The description for this template.
  public description?: string;

  // Encryption configuration for any created repositories. See below for schema.
  public encryptionConfigurations?: Array<ecr_RepositoryCreationTemplateEncryptionConfiguration>;

  // The tag mutability setting for any created repositories. Must be one of: `MUTABLE` or `IMMUTABLE`. Defaults to `MUTABLE`.
  public imageTagMutability?: string;

  // The repository name prefix to match against. Use `ROOT` to match any prefix that doesn't explicitly match another template.
  public prefix?: string;

  // The registry ID the repository creation template applies to.
  public registryId?: string;

  //
  public repositoryPolicy?: string;

  // Which features this template applies to. Must contain one or more of `PULL_THROUGH_CACHE` or `REPLICATION`.
  public appliedFors?: Array<string>;

  // A custom IAM role to use for repository creation. Required if using repository tags or KMS encryption.
  public customRoleArn?: string;

  // A map of tags to assign to any created repositories.
  public resourceTags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'resourceTags',
        'A map of tags to assign to any created repositories.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'The description for this template.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'imageTagMutability',
        'The tag mutability setting for any created repositories. Must be one of: `MUTABLE` or `IMMUTABLE`. Defaults to `MUTABLE`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'encryptionConfigurations',
        'Encryption configuration for any created repositories. See below for schema.',
        () => ecr_RepositoryCreationTemplateEncryptionConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'repositoryPolicy',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'customRoleArn',
        'A custom IAM role to use for repository creation. Required if using repository tags or KMS encryption.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'lifecyclePolicy',
        'The lifecycle policy document to apply to any created repositories. See more details about [Policy Parameters](http://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html#lifecycle_policy_parameters) in the official AWS docs. Consider using the `aws.ecr.getLifecyclePolicyDocument` data_source to generate/manage the JSON document used for the `lifecycle_policy` argument.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'prefix',
        "The repository name prefix to match against. Use `ROOT` to match any prefix that doesn't explicitly match another template.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'appliedFors',
        'Which features this template applies to. Must contain one or more of `PULL_THROUGH_CACHE` or `REPLICATION`.',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
