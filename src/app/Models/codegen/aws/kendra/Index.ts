import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kendra_IndexIndexStatistic,
  kendra_IndexIndexStatistic_GetTypes,
} from '../types/kendra_IndexIndexStatistic';
import {
  kendra_IndexUserGroupResolutionConfiguration,
  kendra_IndexUserGroupResolutionConfiguration_GetTypes,
} from '../types/kendra_IndexUserGroupResolutionConfiguration';
import {
  kendra_IndexUserTokenConfigurations,
  kendra_IndexUserTokenConfigurations_GetTypes,
} from '../types/kendra_IndexUserTokenConfigurations';
import {
  kendra_IndexCapacityUnits,
  kendra_IndexCapacityUnits_GetTypes,
} from '../types/kendra_IndexCapacityUnits';
import {
  kendra_IndexDocumentMetadataConfigurationUpdate,
  kendra_IndexDocumentMetadataConfigurationUpdate_GetTypes,
} from '../types/kendra_IndexDocumentMetadataConfigurationUpdate';
import {
  kendra_IndexServerSideEncryptionConfiguration,
  kendra_IndexServerSideEncryptionConfiguration_GetTypes,
} from '../types/kendra_IndexServerSideEncryptionConfiguration';

export interface IndexArgs {
  // The Amazon Kendra edition to use for the index. Choose `DEVELOPER_EDITION` for indexes intended for development, testing, or proof of concept. Use `ENTERPRISE_EDITION` for your production databases. Once you set the edition for an index, it can't be changed. Defaults to `ENTERPRISE_EDITION`
  edition?: string;

  // Specifies the name of the Index.
  name?: string;

  // A block that enables fetching access levels of groups and users from an AWS Single Sign-On identity source. To configure this, see [UserGroupResolutionConfiguration](https://docs.aws.amazon.com/kendra/latest/dg/API_UserGroupResolutionConfiguration.html). Detailed below.
  userGroupResolutionConfiguration?: kendra_IndexUserGroupResolutionConfiguration;

  // A block that specifies the user token configuration. Detailed below.
  userTokenConfigurations?: kendra_IndexUserTokenConfigurations;

  // The user context policy. Valid values are `ATTRIBUTE_FILTER` or `USER_TOKEN`. For more information, refer to [UserContextPolicy](https://docs.aws.amazon.com/kendra/latest/APIReference/API_CreateIndex.html#kendra-CreateIndex-request-UserContextPolicy). Defaults to `ATTRIBUTE_FILTER`.
  userContextPolicy?: string;

  // A block that sets the number of additional document storage and query capacity units that should be used by the index. Detailed below.
  capacityUnits?: kendra_IndexCapacityUnits;

  // The description of the Index.
  description?: string;

  // One or more blocks that specify the configuration settings for any metadata applied to the documents in the index. Minimum number of 0 items. Maximum number of 500 items. If specified, you must define all elements, including those that are provided by default. These index fields are documented at [Amazon Kendra Index documentation](https://docs.aws.amazon.com/kendra/latest/dg/hiw-index.html). For an example resource that defines these default index fields, refer to the default example above. For an example resource that appends additional index fields, refer to the append example above. All arguments for each block must be specified. Note that blocks cannot be removed since index fields cannot be deleted. This argument is detailed below.
  documentMetadataConfigurationUpdates?: Array<kendra_IndexDocumentMetadataConfigurationUpdate>;

  // An AWS Identity and Access Management (IAM) role that gives Amazon Kendra permissions to access your Amazon CloudWatch logs and metrics. This is also the role you use when you call the `BatchPutDocument` API to index documents from an Amazon S3 bucket.
  roleArn?: string;

  // A block that specifies the identifier of the AWS KMS customer managed key (CMK) that's used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs. Detailed below.
  serverSideEncryptionConfiguration?: kendra_IndexServerSideEncryptionConfiguration;

  /*
Tags to apply to the Index. If configured with a provider
`default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
*/
  tags?: Map<string, string>;
}
export class Index extends DS_Resource {
  // Specifies the name of the Index.
  public name?: string;

  // The current status of the index. When the value is `ACTIVE`, the index is ready for use. If the Status field value is `FAILED`, the `error_message` field contains a message that explains why.
  public status?: string;

  // A block that specifies the user token configuration. Detailed below.
  public userTokenConfigurations?: kendra_IndexUserTokenConfigurations;

  // The Amazon Kendra edition to use for the index. Choose `DEVELOPER_EDITION` for indexes intended for development, testing, or proof of concept. Use `ENTERPRISE_EDITION` for your production databases. Once you set the edition for an index, it can't be changed. Defaults to `ENTERPRISE_EDITION`
  public edition?: string;

  // A block that provides information about the number of FAQ questions and answers and the number of text documents indexed. Detailed below.
  public indexStatistics?: Array<kendra_IndexIndexStatistic>;

  /*
Tags to apply to the Index. If configured with a provider
`default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
*/
  public tags?: Map<string, string>;

  // A block that enables fetching access levels of groups and users from an AWS Single Sign-On identity source. To configure this, see [UserGroupResolutionConfiguration](https://docs.aws.amazon.com/kendra/latest/dg/API_UserGroupResolutionConfiguration.html). Detailed below.
  public userGroupResolutionConfiguration?: kendra_IndexUserGroupResolutionConfiguration;

  // The Unix datetime that the index was created.
  public createdAt?: string;

  // The description of the Index.
  public description?: string;

  // When the Status field value is `FAILED`, this contains a message that explains why.
  public errorMessage?: string;

  // An AWS Identity and Access Management (IAM) role that gives Amazon Kendra permissions to access your Amazon CloudWatch logs and metrics. This is also the role you use when you call the `BatchPutDocument` API to index documents from an Amazon S3 bucket.
  public roleArn?: string;

  // The Unix datetime that the index was last updated.
  public updatedAt?: string;

  // The Amazon Resource Name (ARN) of the Index.
  public arn?: string;

  // One or more blocks that specify the configuration settings for any metadata applied to the documents in the index. Minimum number of 0 items. Maximum number of 500 items. If specified, you must define all elements, including those that are provided by default. These index fields are documented at [Amazon Kendra Index documentation](https://docs.aws.amazon.com/kendra/latest/dg/hiw-index.html). For an example resource that defines these default index fields, refer to the default example above. For an example resource that appends additional index fields, refer to the append example above. All arguments for each block must be specified. Note that blocks cannot be removed since index fields cannot be deleted. This argument is detailed below.
  public documentMetadataConfigurationUpdates?: Array<kendra_IndexDocumentMetadataConfigurationUpdate>;

  // A block that specifies the identifier of the AWS KMS customer managed key (CMK) that's used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs. Detailed below.
  public serverSideEncryptionConfiguration?: kendra_IndexServerSideEncryptionConfiguration;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The user context policy. Valid values are `ATTRIBUTE_FILTER` or `USER_TOKEN`. For more information, refer to [UserContextPolicy](https://docs.aws.amazon.com/kendra/latest/APIReference/API_CreateIndex.html#kendra-CreateIndex-request-UserContextPolicy). Defaults to `ATTRIBUTE_FILTER`.
  public userContextPolicy?: string;

  // A block that sets the number of additional document storage and query capacity units that should be used by the index. Detailed below.
  public capacityUnits?: kendra_IndexCapacityUnits;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'userContextPolicy',
        'The user context policy. Valid values are `ATTRIBUTE_FILTER` or `USER_TOKEN`. For more information, refer to [UserContextPolicy](https://docs.aws.amazon.com/kendra/latest/APIReference/API_CreateIndex.html#kendra-CreateIndex-request-UserContextPolicy). Defaults to `ATTRIBUTE_FILTER`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'The description of the Index.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'documentMetadataConfigurationUpdates',
        'One or more blocks that specify the configuration settings for any metadata applied to the documents in the index. Minimum number of 0 items. Maximum number of 500 items. If specified, you must define all elements, including those that are provided by default. These index fields are documented at [Amazon Kendra Index documentation](https://docs.aws.amazon.com/kendra/latest/dg/hiw-index.html). For an example resource that defines these default index fields, refer to the default example above. For an example resource that appends additional index fields, refer to the append example above. All arguments for each block must be specified. Note that blocks cannot be removed since index fields cannot be deleted. This argument is detailed below.',
        () => kendra_IndexDocumentMetadataConfigurationUpdate_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'roleArn',
        'An AWS Identity and Access Management (IAM) role that gives Amazon Kendra permissions to access your Amazon CloudWatch logs and metrics. This is also the role you use when you call the `BatchPutDocument` API to index documents from an Amazon S3 bucket.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Tags to apply to the Index. If configured with a provider\n`default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'edition',
        "The Amazon Kendra edition to use for the index. Choose `DEVELOPER_EDITION` for indexes intended for development, testing, or proof of concept. Use `ENTERPRISE_EDITION` for your production databases. Once you set the edition for an index, it can't be changed. Defaults to `ENTERPRISE_EDITION`",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'userGroupResolutionConfiguration',
        'A block that enables fetching access levels of groups and users from an AWS Single Sign-On identity source. To configure this, see [UserGroupResolutionConfiguration](https://docs.aws.amazon.com/kendra/latest/dg/API_UserGroupResolutionConfiguration.html). Detailed below.',
        () => kendra_IndexUserGroupResolutionConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'capacityUnits',
        'A block that sets the number of additional document storage and query capacity units that should be used by the index. Detailed below.',
        () => kendra_IndexCapacityUnits_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'serverSideEncryptionConfiguration',
        "A block that specifies the identifier of the AWS KMS customer managed key (CMK) that's used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs. Detailed below.",
        () => kendra_IndexServerSideEncryptionConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Specifies the name of the Index.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'userTokenConfigurations',
        'A block that specifies the user token configuration. Detailed below.',
        () => kendra_IndexUserTokenConfigurations_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
