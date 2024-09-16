import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_AmiEbsBlockDevice,
  ec2_AmiEbsBlockDevice_GetTypes,
} from '../types/ec2_AmiEbsBlockDevice';
import {
  ec2_AmiEphemeralBlockDevice,
  ec2_AmiEphemeralBlockDevice_GetTypes,
} from '../types/ec2_AmiEphemeralBlockDevice';

export interface AmiArgs {
  //
  kernelId?: string;

  /*
Nested block describing an EBS block device that should be
attached to created instances. The structure of this block is described below.
*/
  ebsBlockDevices?: Array<ec2_AmiEbsBlockDevice>;

  //
  imageLocation?: string;

  // If EC2 instances started from this image should require the use of the Instance Metadata Service V2 (IMDSv2), set this argument to `v2.0`. For more information, see [Configure instance metadata options for new instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration).
  imdsSupport?: string;

  // Machine architecture for created instances. Defaults to "x86_64".
  architecture?: string;

  // Boot mode of the AMI. For more information, see [Boot modes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html) in the Amazon Elastic Compute Cloud User Guide.
  bootMode?: string;

  // Date and time to deprecate the AMI. If you specified a value for seconds, Amazon EC2 rounds the seconds to the nearest minute. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)
  deprecationTime?: string;

  // Whether enhanced networking with ENA is enabled. Defaults to `false`.
  enaSupport?: boolean;

  /*
Nested block describing an ephemeral block device that
should be attached to created instances. The structure of this block is described below.
*/
  ephemeralBlockDevices?: Array<ec2_AmiEphemeralBlockDevice>;

  // Region-unique name for the AMI.
  name?: string;

  //
  ramdiskId?: string;

  // Name of the root device (for example, `/dev/sda1`, or `/dev/xvda`).
  rootDeviceName?: string;

  //
  sriovNetSupport?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
Keyword to choose what virtualization mode created instances
will use. Can be either "paravirtual" (the default) or "hvm". The choice of virtualization type
changes the set of further arguments that are required, as described below.
*/
  virtualizationType?: string;

  // Longer, human-readable description for the AMI.
  description?: string;

  // If the image is configured for NitroTPM support, the value is `v2.0`. For more information, see [NitroTPM](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html) in the Amazon Elastic Compute Cloud User Guide.
  tpmSupport?: string;
}
export class Ami extends DS_Resource {
  // ARN of the AMI.
  public arn?: string;

  // If the image is configured for NitroTPM support, the value is `v2.0`. For more information, see [NitroTPM](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html) in the Amazon Elastic Compute Cloud User Guide.
  public tpmSupport?: string;

  // Whether enhanced networking with ENA is enabled. Defaults to `false`.
  public enaSupport?: boolean;

  /*
Nested block describing an ephemeral block device that
should be attached to created instances. The structure of this block is described below.
*/
  public ephemeralBlockDevices?: Array<ec2_AmiEphemeralBlockDevice>;

  // AWS account alias (for example, amazon, self) or the AWS account ID of the AMI owner.
  public imageOwnerAlias?: string;

  // This value is set to windows for Windows AMIs; otherwise, it is blank.
  public platform?: string;

  // Platform details associated with the billing code of the AMI.
  public platformDetails?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Whether the image has public launch permissions.
  public public?: boolean;

  // Snapshot ID for the root volume (for EBS-backed AMIs)
  public rootSnapshotId?: string;

  //
  public sriovNetSupport?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Operation of the Amazon EC2 instance and the billing code that is associated with the AMI.
  public usageOperation?: string;

  // Boot mode of the AMI. For more information, see [Boot modes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html) in the Amazon Elastic Compute Cloud User Guide.
  public bootMode?: string;

  //
  public manageEbsSnapshots?: boolean;

  // Machine architecture for created instances. Defaults to "x86_64".
  public architecture?: string;

  // Date and time to deprecate the AMI. If you specified a value for seconds, Amazon EC2 rounds the seconds to the nearest minute. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)
  public deprecationTime?: string;

  // Longer, human-readable description for the AMI.
  public description?: string;

  // Type of image.
  public imageType?: string;

  /*
Nested block describing an EBS block device that should be
attached to created instances. The structure of this block is described below.
*/
  public ebsBlockDevices?: Array<ec2_AmiEbsBlockDevice>;

  // Hypervisor type of the image.
  public hypervisor?: string;

  //
  public imageLocation?: string;

  // If EC2 instances started from this image should require the use of the Instance Metadata Service V2 (IMDSv2), set this argument to `v2.0`. For more information, see [Configure instance metadata options for new instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration).
  public imdsSupport?: string;

  // AWS account ID of the image owner.
  public ownerId?: string;

  //
  public ramdiskId?: string;

  /*
Keyword to choose what virtualization mode created instances
will use. Can be either "paravirtual" (the default) or "hvm". The choice of virtualization type
changes the set of further arguments that are required, as described below.
*/
  public virtualizationType?: string;

  //
  public kernelId?: string;

  // Region-unique name for the AMI.
  public name?: string;

  // Name of the root device (for example, `/dev/sda1`, or `/dev/xvda`).
  public rootDeviceName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'Longer, human-readable description for the AMI.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'ebsBlockDevices',
        'Nested block describing an EBS block device that should be\nattached to created instances. The structure of this block is described below.',
        () => ec2_AmiEbsBlockDevice_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'architecture',
        'Machine architecture for created instances. Defaults to "x86_64".',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'deprecationTime',
        'Date and time to deprecate the AMI. If you specified a value for seconds, Amazon EC2 rounds the seconds to the nearest minute. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Region-unique name for the AMI.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'ephemeralBlockDevices',
        'Nested block describing an ephemeral block device that\nshould be attached to created instances. The structure of this block is described below.',
        () => ec2_AmiEphemeralBlockDevice_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'ramdiskId',
        '',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'tpmSupport',
        'If the image is configured for NitroTPM support, the value is `v2.0`. For more information, see [NitroTPM](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html) in the Amazon Elastic Compute Cloud User Guide.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'imageLocation',
        '',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'rootDeviceName',
        'Name of the root device (for example, `/dev/sda1`, or `/dev/xvda`).',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'sriovNetSupport',
        '',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'virtualizationType',
        'Keyword to choose what virtualization mode created instances\nwill use. Can be either "paravirtual" (the default) or "hvm". The choice of virtualization type\nchanges the set of further arguments that are required, as described below.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'kernelId',
        '',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'imdsSupport',
        'If EC2 instances started from this image should require the use of the Instance Metadata Service V2 (IMDSv2), set this argument to `v2.0`. For more information, see [Configure instance metadata options for new instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration).',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'bootMode',
        'Boot mode of the AMI. For more information, see [Boot modes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html) in the Amazon Elastic Compute Cloud User Guide.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enaSupport',
        'Whether enhanced networking with ENA is enabled. Defaults to `false`.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
