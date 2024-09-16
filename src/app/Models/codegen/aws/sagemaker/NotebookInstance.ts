import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_NotebookInstanceInstanceMetadataServiceConfiguration,
  sagemaker_NotebookInstanceInstanceMetadataServiceConfiguration_GetTypes,
} from '../types/sagemaker_NotebookInstanceInstanceMetadataServiceConfiguration';

export interface NotebookInstanceArgs {
  // A list of Elastic Inference (EI) instance types to associate with this notebook instance. See [Elastic Inference Accelerator](https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html) for more details. Valid values: `ml.eia1.medium`, `ml.eia1.large`, `ml.eia1.xlarge`, `ml.eia2.medium`, `ml.eia2.large`, `ml.eia2.xlarge`.
  acceleratorTypes?: Array<string>;

  // The Git repository associated with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in [AWS CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html) or in any other Git repository.
  defaultCodeRepository?: string;

  // Set to `Disabled` to disable internet access to notebook. Requires `security_groups` and `subnet_id` to be set. Supported values: `Enabled` (Default) or `Disabled`. If set to `Disabled`, the notebook instance will be able to access resources only in your VPC, and will not be able to connect to Amazon SageMaker training and endpoint services unless your configure a NAT Gateway in your VPC.
  directInternetAccess?: string;

  // Information on the IMDS configuration of the notebook instance. Conflicts with `instance_metadata_service_configuration`. see details below.
  instanceMetadataServiceConfiguration?: sagemaker_NotebookInstanceInstanceMetadataServiceConfiguration;

  // The name of a lifecycle configuration to associate with the notebook instance.
  lifecycleConfigName?: string;

  // The platform identifier of the notebook instance runtime environment. This value can be either `notebook-al1-v1`, `notebook-al2-v1`, or  `notebook-al2-v2`, depending on which version of Amazon Linux you require.
  platformIdentifier?: string;

  // The name of ML compute instance type.
  instanceType?: string;

  // The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
  kmsKeyId?: string;

  // The ARN of the IAM role to be used by the notebook instance which allows SageMaker to call other services on your behalf.
  roleArn?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
An array of up to three Git repositories to associate with the notebook instance.
These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in [AWS CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html) or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance.
*/
  additionalCodeRepositories?: Array<string>;

  // Whether root access is `Enabled` or `Disabled` for users of the notebook instance. The default value is `Enabled`.
  rootAccess?: string;

  // The associated security groups.
  securityGroups?: Array<string>;

  // The size, in GB, of the ML storage volume to attach to the notebook instance. The default value is 5 GB.
  volumeSize?: number;

  // The name of the notebook instance (must be unique).
  name?: string;

  // The VPC subnet ID.
  subnetId?: string;
}
export class NotebookInstance extends DS_Resource {
  // Set to `Disabled` to disable internet access to notebook. Requires `security_groups` and `subnet_id` to be set. Supported values: `Enabled` (Default) or `Disabled`. If set to `Disabled`, the notebook instance will be able to access resources only in your VPC, and will not be able to connect to Amazon SageMaker training and endpoint services unless your configure a NAT Gateway in your VPC.
  public directInternetAccess?: string;

  // The name of ML compute instance type.
  public instanceType?: string;

  // The platform identifier of the notebook instance runtime environment. This value can be either `notebook-al1-v1`, `notebook-al2-v1`, or  `notebook-al2-v2`, depending on which version of Amazon Linux you require.
  public platformIdentifier?: string;

  // The ARN of the IAM role to be used by the notebook instance which allows SageMaker to call other services on your behalf.
  public roleArn?: string;

  // The VPC subnet ID.
  public subnetId?: string;

  // The Git repository associated with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in [AWS CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html) or in any other Git repository.
  public defaultCodeRepository?: string;

  // The name of the notebook instance (must be unique).
  public name?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A list of Elastic Inference (EI) instance types to associate with this notebook instance. See [Elastic Inference Accelerator](https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html) for more details. Valid values: `ml.eia1.medium`, `ml.eia1.large`, `ml.eia1.xlarge`, `ml.eia2.medium`, `ml.eia2.large`, `ml.eia2.xlarge`.
  public acceleratorTypes?: Array<string>;

  /*
An array of up to three Git repositories to associate with the notebook instance.
These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in [AWS CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html) or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance.
*/
  public additionalCodeRepositories?: Array<string>;

  // The URL that you use to connect to the Jupyter notebook that is running in your notebook instance.
  public url?: string;

  // The size, in GB, of the ML storage volume to attach to the notebook instance. The default value is 5 GB.
  public volumeSize?: number;

  // The associated security groups.
  public securityGroups?: Array<string>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) assigned by AWS to this notebook instance.
  public arn?: string;

  // Information on the IMDS configuration of the notebook instance. Conflicts with `instance_metadata_service_configuration`. see details below.
  public instanceMetadataServiceConfiguration?: sagemaker_NotebookInstanceInstanceMetadataServiceConfiguration;

  // The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
  public kmsKeyId?: string;

  // The name of a lifecycle configuration to associate with the notebook instance.
  public lifecycleConfigName?: string;

  // The network interface ID that Amazon SageMaker created at the time of creating the instance. Only available when setting `subnet_id`.
  public networkInterfaceId?: string;

  // Whether root access is `Enabled` or `Disabled` for users of the notebook instance. The default value is `Enabled`.
  public rootAccess?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'acceleratorTypes',
        'A list of Elastic Inference (EI) instance types to associate with this notebook instance. See [Elastic Inference Accelerator](https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html) for more details. Valid values: `ml.eia1.medium`, `ml.eia1.large`, `ml.eia1.xlarge`, `ml.eia2.medium`, `ml.eia2.large`, `ml.eia2.xlarge`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'directInternetAccess',
        'Set to `Disabled` to disable internet access to notebook. Requires `security_groups` and `subnet_id` to be set. Supported values: `Enabled` (Default) or `Disabled`. If set to `Disabled`, the notebook instance will be able to access resources only in your VPC, and will not be able to connect to Amazon SageMaker training and endpoint services unless your configure a NAT Gateway in your VPC.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'securityGroups',
        'The associated security groups.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'subnetId',
        'The VPC subnet ID.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'roleArn',
        'The ARN of the IAM role to be used by the notebook instance which allows SageMaker to call other services on your behalf.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'instanceType',
        'The name of ML compute instance type.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'kmsKeyId',
        'The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'additionalCodeRepositories',
        'An array of up to three Git repositories to associate with the notebook instance.\nThese can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in [AWS CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html) or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'defaultCodeRepository',
        'The Git repository associated with the notebook instance as its default code repository. This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in [AWS CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html) or in any other Git repository.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'instanceMetadataServiceConfiguration',
        'Information on the IMDS configuration of the notebook instance. Conflicts with `instance_metadata_service_configuration`. see details below.',
        () =>
          sagemaker_NotebookInstanceInstanceMetadataServiceConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'lifecycleConfigName',
        'The name of a lifecycle configuration to associate with the notebook instance.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'platformIdentifier',
        'The platform identifier of the notebook instance runtime environment. This value can be either `notebook-al1-v1`, `notebook-al2-v1`, or  `notebook-al2-v2`, depending on which version of Amazon Linux you require.',
        () => [],
        false,
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
        'rootAccess',
        'Whether root access is `Enabled` or `Disabled` for users of the notebook instance. The default value is `Enabled`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'volumeSize',
        'The size, in GB, of the ML storage volume to attach to the notebook instance. The default value is 5 GB.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the notebook instance (must be unique).',
        () => [],
        false,
        true,
      ),
    ];
  }
}
