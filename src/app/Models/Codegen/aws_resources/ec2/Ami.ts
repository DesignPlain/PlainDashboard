import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_AmiEbsBlockDevice,
  ec2_AmiEbsBlockDevice_GetTypes,
} from "../types/ec2_AmiEbsBlockDevice";
import {
  ec2_AmiEphemeralBlockDevice,
  ec2_AmiEphemeralBlockDevice_GetTypes,
} from "../types/ec2_AmiEphemeralBlockDevice";

export interface AmiArgs {
  /*
Nested block describing an EBS block device that should be
attached to created instances. The structure of this block is described below.
*/
  ebsBlockDevices?: Array<ec2_AmiEbsBlockDevice>;

  // Whether enhanced networking with ENA is enabled. Defaults to `false`.
  enaSupport?: boolean;

  /*
Nested block describing an ephemeral block device that
should be attached to created instances. The structure of this block is described below.
*/
  ephemeralBlockDevices?: Array<ec2_AmiEphemeralBlockDevice>;

  // If EC2 instances started from this image should require the use of the Instance Metadata Service V2 (IMDSv2), set this argument to `v2.0`. For more information, see [Configure instance metadata options for new instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration).
  imdsSupport?: string;

  // Name of the root device (for example, `/dev/sda1`, or `/dev/xvda`).
  rootDeviceName?: string;

  /*
Path to an S3 object containing an image manifest, e.g., created
by the `ec2-upload-bundle` command in the EC2 command line tools.
*/
  imageLocation?: string;

  // Region-unique name for the AMI.
  name?: string;

  /*
When set to "simple" (the default), enables enhanced networking
for created instances. No other value is supported at this time.
*/
  sriovNetSupport?: string;

  // Boot mode of the AMI. For more information, see [Boot modes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html) in the Amazon Elastic Compute Cloud User Guide.
  bootMode?: string;

  // Longer, human-readable description for the AMI.
  description?: string;

  /*
ID of the kernel image (AKI) that will be used as the paravirtual
kernel in created instances.
*/
  kernelId?: string;

  /*
ID of an initrd image (ARI) that will be used when booting the
created instances.
*/
  ramdiskId?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Machine architecture for created instances. Defaults to "x86_64".
  architecture?: string;

  // Date and time to deprecate the AMI. If you specified a value for seconds, Amazon EC2 rounds the seconds to the nearest minute. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)
  deprecationTime?: string;

  // If the image is configured for NitroTPM support, the value is `v2.0`. For more information, see [NitroTPM](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html) in the Amazon Elastic Compute Cloud User Guide.
  tpmSupport?: string;

  /*
Keyword to choose what virtualization mode created instances
will use. Can be either "paravirtual" (the default) or "hvm". The choice of virtualization type
changes the set of further arguments that are required, as described below.
*/
  virtualizationType?: string;
}
export class Ami extends Resource {
  // ARN of the AMI.
  public arn?: string;

  // Whether enhanced networking with ENA is enabled. Defaults to `false`.
  public enaSupport?: boolean;

  // Name of the root device (for example, `/dev/sda1`, or `/dev/xvda`).
  public rootDeviceName?: string;

  // AWS account ID of the image owner.
  public ownerId?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Boot mode of the AMI. For more information, see [Boot modes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html) in the Amazon Elastic Compute Cloud User Guide.
  public bootMode?: string;

  /*
Nested block describing an ephemeral block device that
should be attached to created instances. The structure of this block is described below.
*/
  public ephemeralBlockDevices?: Array<ec2_AmiEphemeralBlockDevice>;

  /*
Path to an S3 object containing an image manifest, e.g., created
by the `ec2-upload-bundle` command in the EC2 command line tools.
*/
  public imageLocation?: string;

  // Whether the image has public launch permissions.
  public public?: boolean;

  /*
ID of an initrd image (ARI) that will be used when booting the
created instances.
*/
  public ramdiskId?: string;

  /*
Keyword to choose what virtualization mode created instances
will use. Can be either "paravirtual" (the default) or "hvm". The choice of virtualization type
changes the set of further arguments that are required, as described below.
*/
  public virtualizationType?: string;

  /*
Nested block describing an EBS block device that should be
attached to created instances. The structure of this block is described below.
*/
  public ebsBlockDevices?: Array<ec2_AmiEbsBlockDevice>;

  // Type of image.
  public imageType?: string;

  //
  public manageEbsSnapshots?: boolean;

  // Region-unique name for the AMI.
  public name?: string;

  // This value is set to windows for Windows AMIs; otherwise, it is blank.
  public platform?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Machine architecture for created instances. Defaults to "x86_64".
  public architecture?: string;

  // Date and time to deprecate the AMI. If you specified a value for seconds, Amazon EC2 rounds the seconds to the nearest minute. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)
  public deprecationTime?: string;

  /*
ID of the kernel image (AKI) that will be used as the paravirtual
kernel in created instances.
*/
  public kernelId?: string;

  // Hypervisor type of the image.
  public hypervisor?: string;

  // Snapshot ID for the root volume (for EBS-backed AMIs)
  public rootSnapshotId?: string;

  // Operation of the Amazon EC2 instance and the billing code that is associated with the AMI.
  public usageOperation?: string;

  // Longer, human-readable description for the AMI.
  public description?: string;

  // If EC2 instances started from this image should require the use of the Instance Metadata Service V2 (IMDSv2), set this argument to `v2.0`. For more information, see [Configure instance metadata options for new instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration).
  public imdsSupport?: string;

  // If the image is configured for NitroTPM support, the value is `v2.0`. For more information, see [NitroTPM](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html) in the Amazon Elastic Compute Cloud User Guide.
  public tpmSupport?: string;

  // AWS account alias (for example, amazon, self) or the AWS account ID of the AMI owner.
  public imageOwnerAlias?: string;

  // Platform details associated with the billing code of the AMI.
  public platformDetails?: string;

  /*
When set to "simple" (the default), enables enhanced networking
for created instances. No other value is supported at this time.
*/
  public sriovNetSupport?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "kernelId",
        "ID of the kernel image (AKI) that will be used as the paravirtual\nkernel in created instances.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ramdiskId",
        "ID of an initrd image (ARI) that will be used when booting the\ncreated instances.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "virtualizationType",
        'Keyword to choose what virtualization mode created instances\nwill use. Can be either "paravirtual" (the default) or "hvm". The choice of virtualization type\nchanges the set of further arguments that are required, as described below.',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "imageLocation",
        "Path to an S3 object containing an image manifest, e.g., created\nby the `ec2-upload-bundle` command in the EC2 command line tools.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sriovNetSupport",
        'When set to "simple" (the default), enables enhanced networking\nfor created instances. No other value is supported at this time.',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "architecture",
        'Machine architecture for created instances. Defaults to "x86_64".',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ephemeralBlockDevices",
        "Nested block describing an ephemeral block device that\nshould be attached to created instances. The structure of this block is described below.",
        ec2_AmiEphemeralBlockDevice_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Region-unique name for the AMI.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "bootMode",
        "Boot mode of the AMI. For more information, see [Boot modes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html) in the Amazon Elastic Compute Cloud User Guide.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Longer, human-readable description for the AMI.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tpmSupport",
        "If the image is configured for NitroTPM support, the value is `v2.0`. For more information, see [NitroTPM](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html) in the Amazon Elastic Compute Cloud User Guide.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "rootDeviceName",
        "Name of the root device (for example, `/dev/sda1`, or `/dev/xvda`).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enaSupport",
        "Whether enhanced networking with ENA is enabled. Defaults to `false`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "imdsSupport",
        "If EC2 instances started from this image should require the use of the Instance Metadata Service V2 (IMDSv2), set this argument to `v2.0`. For more information, see [Configure instance metadata options for new instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "deprecationTime",
        "Date and time to deprecate the AMI. If you specified a value for seconds, Amazon EC2 rounds the seconds to the nearest minute. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ebsBlockDevices",
        "Nested block describing an EBS block device that should be\nattached to created instances. The structure of this block is described below.",
        ec2_AmiEbsBlockDevice_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
