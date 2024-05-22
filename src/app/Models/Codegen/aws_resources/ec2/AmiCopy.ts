import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_AmiCopyEbsBlockDevice,
  ec2_AmiCopyEbsBlockDevice_GetTypes,
} from "../types/ec2_AmiCopyEbsBlockDevice";
import {
  ec2_AmiCopyEphemeralBlockDevice,
  ec2_AmiCopyEphemeralBlockDevice_GetTypes,
} from "../types/ec2_AmiCopyEphemeralBlockDevice";

export interface AmiCopyArgs {
  // Full ARN of the KMS Key to use when encrypting the snapshots of an image during a copy operation. If not specified, then the default AWS KMS Key will be used
  kmsKeyId?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Date and time to deprecate the AMI. If you specified a value for seconds, Amazon EC2 rounds the seconds to the nearest minute. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)
  deprecationTime?: string;

  // Whether the destination snapshots of the copied image should be encrypted. Defaults to `false`
  encrypted?: boolean;

  /*
Nested block describing an EBS block device that should be
attached to created instances. The structure of this block is described below.
*/
  ebsBlockDevices?: Array<ec2_AmiCopyEbsBlockDevice>;

  /*
Nested block describing an ephemeral block device that
should be attached to created instances. The structure of this block is described below.
*/
  ephemeralBlockDevices?: Array<ec2_AmiCopyEphemeralBlockDevice>;

  // Region-unique name for the AMI.
  name?: string;

  /*
Id of the AMI to copy. This id must be valid in the region
given by `source_ami_region`.
*/
  sourceAmiId?: string;

  /*
Region from which the AMI will be copied. This may be the
same as the AWS provider region in order to create a copy within the same region.
*/
  sourceAmiRegion?: string;

  // Longer, human-readable description for the AMI.
  description?: string;

  /*
ARN of the Outpost to which to copy the AMI.
Only specify this parameter when copying an AMI from an AWS Region to an Outpost. The AMI must be in the Region of the destination Outpost.
*/
  destinationOutpostArn?: string;
}
export class AmiCopy extends Resource {
  //
  public platformDetails?: string;

  /*
ID of an initrd image (ARI) that will be used when booting the
created instances.
*/
  public ramdiskId?: string;

  /*
Id of the AMI to copy. This id must be valid in the region
given by `source_ami_region`.
*/
  public sourceAmiId?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // If the image is configured for NitroTPM support, the value is `v2.0`. For more information, see [NitroTPM](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html) in the Amazon Elastic Compute Cloud User Guide.
  public tpmSupport?: string;

  /*
Nested block describing an EBS block device that should be
attached to created instances. The structure of this block is described below.
*/
  public ebsBlockDevices?: Array<ec2_AmiCopyEbsBlockDevice>;

  // If EC2 instances started from this image should require the use of the Instance Metadata Service V2 (IMDSv2), set this argument to `v2.0`. For more information, see [Configure instance metadata options for new instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration).
  public imdsSupport?: string;

  /*
ID of the kernel image (AKI) that will be used as the paravirtual
kernel in created instances.
*/
  public kernelId?: string;

  //
  public rootSnapshotId?: string;

  //
  public tagsAll?: Map<string, string>;

  // Longer, human-readable description for the AMI.
  public description?: string;

  // Whether enhanced networking with ENA is enabled. Defaults to `false`.
  public enaSupport?: boolean;

  //
  public manageEbsSnapshots?: boolean;

  // Machine architecture for created instances. Defaults to "x86_64".
  public architecture?: string;

  /*
Region from which the AMI will be copied. This may be the
same as the AWS provider region in order to create a copy within the same region.
*/
  public sourceAmiRegion?: string;

  /*
Keyword to choose what virtualization mode created instances
will use. Can be either "paravirtual" (the default) or "hvm". The choice of virtualization type
changes the set of further arguments that are required, as described below.
*/
  public virtualizationType?: string;

  /*
ARN of the Outpost to which to copy the AMI.
Only specify this parameter when copying an AMI from an AWS Region to an Outpost. The AMI must be in the Region of the destination Outpost.
*/
  public destinationOutpostArn?: string;

  //
  public hypervisor?: string;

  //
  public imageType?: string;

  /*
Path to an S3 object containing an image manifest, e.g., created
by the `ec2-upload-bundle` command in the EC2 command line tools.
*/
  public imageLocation?: string;

  // Full ARN of the KMS Key to use when encrypting the snapshots of an image during a copy operation. If not specified, then the default AWS KMS Key will be used
  public kmsKeyId?: string;

  // Name of the root device (for example, `/dev/sda1`, or `/dev/xvda`).
  public rootDeviceName?: string;

  // ARN of the AMI.
  public arn?: string;

  // Boot mode of the AMI. For more information, see [Boot modes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html) in the Amazon Elastic Compute Cloud User Guide.
  public bootMode?: string;

  // Date and time to deprecate the AMI. If you specified a value for seconds, Amazon EC2 rounds the seconds to the nearest minute. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)
  public deprecationTime?: string;

  // Whether the destination snapshots of the copied image should be encrypted. Defaults to `false`
  public encrypted?: boolean;

  /*
When set to "simple" (the default), enables enhanced networking
for created instances. No other value is supported at this time.
*/
  public sriovNetSupport?: string;

  //
  public usageOperation?: string;

  /*
Nested block describing an ephemeral block device that
should be attached to created instances. The structure of this block is described below.
*/
  public ephemeralBlockDevices?: Array<ec2_AmiCopyEphemeralBlockDevice>;

  //
  public ownerId?: string;

  //
  public public?: boolean;

  //
  public imageOwnerAlias?: string;

  // Region-unique name for the AMI.
  public name?: string;

  //
  public platform?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        "deprecationTime",
        "Date and time to deprecate the AMI. If you specified a value for seconds, Amazon EC2 rounds the seconds to the nearest minute. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ephemeralBlockDevices",
        "Nested block describing an ephemeral block device that\nshould be attached to created instances. The structure of this block is described below.",
        ec2_AmiCopyEphemeralBlockDevice_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceAmiId",
        "Id of the AMI to copy. This id must be valid in the region\ngiven by `source_ami_region`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "Full ARN of the KMS Key to use when encrypting the snapshots of an image during a copy operation. If not specified, then the default AWS KMS Key will be used",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "encrypted",
        "Whether the destination snapshots of the copied image should be encrypted. Defaults to `false`",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ebsBlockDevices",
        "Nested block describing an EBS block device that should be\nattached to created instances. The structure of this block is described below.",
        ec2_AmiCopyEbsBlockDevice_GetTypes(),
        false,
        false,
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
        "sourceAmiRegion",
        "Region from which the AMI will be copied. This may be the\nsame as the AWS provider region in order to create a copy within the same region.",
        [],
        true,
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
        InputType.String,
        "destinationOutpostArn",
        "ARN of the Outpost to which to copy the AMI.\nOnly specify this parameter when copying an AMI from an AWS Region to an Outpost. The AMI must be in the Region of the destination Outpost.",
        [],
        false,
        false,
      ),
    ];
  }
}
