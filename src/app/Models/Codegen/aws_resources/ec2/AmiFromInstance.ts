import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ec2_AmiFromInstanceEbsBlockDevice,
  ec2_AmiFromInstanceEbsBlockDevice_GetTypes,
} from "../types/ec2_AmiFromInstanceEbsBlockDevice";
import {
  ec2_AmiFromInstanceEphemeralBlockDevice,
  ec2_AmiFromInstanceEphemeralBlockDevice_GetTypes,
} from "../types/ec2_AmiFromInstanceEphemeralBlockDevice";

export interface AmiFromInstanceArgs {
  // Region-unique name for the AMI.
  name?: string;

  /*
Boolean that overrides the behavior of stopping
the instance before snapshotting. This is risky since it may cause a snapshot of an
inconsistent filesystem state, but can be used to avoid downtime if the user otherwise
guarantees that no filesystem writes will be underway at the time of snapshot.
*/
  snapshotWithoutReboot?: boolean;

  // ID of the instance to use as the basis of the AMI.
  sourceInstanceId?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Date and time to deprecate the AMI. If you specified a value for seconds, Amazon EC2 rounds the seconds to the nearest minute. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)
  deprecationTime?: string;

  // Longer, human-readable description for the AMI.
  description?: string;

  /*
Nested block describing an EBS block device that should be
attached to created instances. The structure of this block is described below.
*/
  ebsBlockDevices?: Array<ec2_AmiFromInstanceEbsBlockDevice>;

  /*
Nested block describing an ephemeral block device that
should be attached to created instances. The structure of this block is described below.
*/
  ephemeralBlockDevices?: Array<ec2_AmiFromInstanceEphemeralBlockDevice>;
}
export class AmiFromInstance extends Resource {
  /*
Nested block describing an EBS block device that should be
attached to created instances. The structure of this block is described below.
*/
  public ebsBlockDevices?: Array<ec2_AmiFromInstanceEbsBlockDevice>;

  //
  public ownerId?: string;

  //
  public rootSnapshotId?: string;

  // If the image is configured for NitroTPM support, the value is `v2.0`. For more information, see [NitroTPM](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitrotpm.html) in the Amazon Elastic Compute Cloud User Guide.
  public tpmSupport?: string;

  // Machine architecture for created instances. Defaults to "x86_64".
  public architecture?: string;

  // If EC2 instances started from this image should require the use of the Instance Metadata Service V2 (IMDSv2), set this argument to `v2.0`. For more information, see [Configure instance metadata options for new instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-new-instances.html#configure-IMDS-new-instances-ami-configuration).
  public imdsSupport?: string;

  // Region-unique name for the AMI.
  public name?: string;

  //
  public platformDetails?: string;

  // Whether enhanced networking with ENA is enabled. Defaults to `false`.
  public enaSupport?: boolean;

  //
  public hypervisor?: string;

  //
  public manageEbsSnapshots?: boolean;

  //
  public platform?: string;

  //
  public public?: boolean;

  // ID of the instance to use as the basis of the AMI.
  public sourceInstanceId?: string;

  //
  public tagsAll?: Map<string, string>;

  //
  public usageOperation?: string;

  /*
ID of the kernel image (AKI) that will be used as the paravirtual
kernel in created instances.
*/
  public kernelId?: string;

  /*
Keyword to choose what virtualization mode created instances
will use. Can be either "paravirtual" (the default) or "hvm". The choice of virtualization type
changes the set of further arguments that are required, as described below.
*/
  public virtualizationType?: string;

  // ARN of the AMI.
  public arn?: string;

  // Longer, human-readable description for the AMI.
  public description?: string;

  /*
When set to "simple" (the default), enables enhanced networking
for created instances. No other value is supported at this time.
*/
  public sriovNetSupport?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Date and time to deprecate the AMI. If you specified a value for seconds, Amazon EC2 rounds the seconds to the nearest minute. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)
  public deprecationTime?: string;

  /*
Nested block describing an ephemeral block device that
should be attached to created instances. The structure of this block is described below.
*/
  public ephemeralBlockDevices?: Array<ec2_AmiFromInstanceEphemeralBlockDevice>;

  /*
Path to an S3 object containing an image manifest, e.g., created
by the `ec2-upload-bundle` command in the EC2 command line tools.
*/
  public imageLocation?: string;

  // Boot mode of the AMI. For more information, see [Boot modes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-boot.html) in the Amazon Elastic Compute Cloud User Guide.
  public bootMode?: string;

  //
  public imageOwnerAlias?: string;

  // Name of the root device (for example, `/dev/sda1`, or `/dev/xvda`).
  public rootDeviceName?: string;

  /*
Boolean that overrides the behavior of stopping
the instance before snapshotting. This is risky since it may cause a snapshot of an
inconsistent filesystem state, but can be used to avoid downtime if the user otherwise
guarantees that no filesystem writes will be underway at the time of snapshot.
*/
  public snapshotWithoutReboot?: boolean;

  //
  public imageType?: string;

  /*
ID of an initrd image (ARI) that will be used when booting the
created instances.
*/
  public ramdiskId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Region-unique name for the AMI.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "snapshotWithoutReboot",
        "Boolean that overrides the behavior of stopping\nthe instance before snapshotting. This is risky since it may cause a snapshot of an\ninconsistent filesystem state, but can be used to avoid downtime if the user otherwise\nguarantees that no filesystem writes will be underway at the time of snapshot.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceInstanceId",
        "ID of the instance to use as the basis of the AMI.",
        [],
        true,
        true,
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
        "deprecationTime",
        "Date and time to deprecate the AMI. If you specified a value for seconds, Amazon EC2 rounds the seconds to the nearest minute. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)",
        [],
        false,
        false,
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
        InputType.Array,
        "ebsBlockDevices",
        "Nested block describing an EBS block device that should be\nattached to created instances. The structure of this block is described below.",
        ec2_AmiFromInstanceEbsBlockDevice_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ephemeralBlockDevices",
        "Nested block describing an ephemeral block device that\nshould be attached to created instances. The structure of this block is described below.",
        ec2_AmiFromInstanceEphemeralBlockDevice_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
