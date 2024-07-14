import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ReplicationInstanceArgs {
  // Indicates whether the changes should be applied immediately or during the next maintenance window. Only used when updating an existing resource.
  applyImmediately?: boolean;

  // A list of VPC security group IDs to be used with the replication instance. The VPC security groups must work with the VPC containing the replication instance.
  vpcSecurityGroupIds?: Array<string>;

  // Specifies if the replication instance is a multi-az deployment. You cannot set the `availability_zone` parameter if the `multi_az` parameter is set to `true`.
  multiAz?: boolean;

  // The amount of storage (in gigabytes) to be initially allocated for the replication instance.
  allocatedStorage?: number;

  // The Amazon Resource Name (ARN) for the KMS key that will be used to encrypt the connection parameters. If you do not specify a value for `kms_key_arn`, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region.
  kmsKeyArn?: string;

  /*
The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).

- Default: A 30-minute window selected at random from an 8-hour block of time per region, occurring on a random day of the week.
- Format: `ddd:hh24:mi-ddd:hh24:mi`
- Valid Days: `mon, tue, wed, thu, fri, sat, sun`
- Constraints: Minimum 30-minute window.
*/
  preferredMaintenanceWindow?: string;

  /*
The replication instance identifier. This parameter is stored as a lowercase string.

- Must contain from 1 to 63 alphanumeric characters or hyphens.
- First character must be a letter.
- Cannot end with a hyphen
- Cannot contain two consecutive hyphens.
*/
  replicationInstanceId?: string;

  // A subnet group to associate with the replication instance.
  replicationSubnetGroupId?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Indicates that minor engine upgrades will be applied automatically to the replication instance during the maintenance window.
  autoMinorVersionUpgrade?: boolean;

  // The EC2 Availability Zone that the replication instance will be created in.
  availabilityZone?: string;

  // The type of IP address protocol used by a replication instance. Valid values: `IPV4`, `DUAL`.
  networkType?: string;

  // Specifies the accessibility options for the replication instance. A value of true represents an instance with a public IP address. A value of false represents an instance with a private IP address.
  publiclyAccessible?: boolean;

  // The compute and memory capacity of the replication instance as specified by the replication instance class. See [AWS DMS User Guide](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.Types.html) for available instance sizes and advice on which one to choose.
  replicationInstanceClass?: string;

  // Indicates that major version upgrades are allowed.
  allowMajorVersionUpgrade?: boolean;

  // The engine version number of the replication instance.
  engineVersion?: string;
}
export class ReplicationInstance extends Resource {
  // The engine version number of the replication instance.
  public engineVersion?: string;

  /*
The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).

- Default: A 30-minute window selected at random from an 8-hour block of time per region, occurring on a random day of the week.
- Format: `ddd:hh24:mi-ddd:hh24:mi`
- Valid Days: `mon, tue, wed, thu, fri, sat, sun`
- Constraints: Minimum 30-minute window.
*/
  public preferredMaintenanceWindow?: string;

  // Specifies the accessibility options for the replication instance. A value of true represents an instance with a public IP address. A value of false represents an instance with a private IP address.
  public publiclyAccessible?: boolean;

  // The Amazon Resource Name (ARN) of the replication instance.
  public replicationInstanceArn?: string;

  /*
The replication instance identifier. This parameter is stored as a lowercase string.

- Must contain from 1 to 63 alphanumeric characters or hyphens.
- First character must be a letter.
- Cannot end with a hyphen
- Cannot contain two consecutive hyphens.
*/
  public replicationInstanceId?: string;

  // Indicates that major version upgrades are allowed.
  public allowMajorVersionUpgrade?: boolean;

  // Indicates that minor engine upgrades will be applied automatically to the replication instance during the maintenance window.
  public autoMinorVersionUpgrade?: boolean;

  // A subnet group to associate with the replication instance.
  public replicationSubnetGroupId?: string;

  // The EC2 Availability Zone that the replication instance will be created in.
  public availabilityZone?: string;

  // Specifies if the replication instance is a multi-az deployment. You cannot set the `availability_zone` parameter if the `multi_az` parameter is set to `true`.
  public multiAz?: boolean;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A list of the public IP addresses of the replication instance.
  public replicationInstancePublicIps?: Array<string>;

  // A list of VPC security group IDs to be used with the replication instance. The VPC security groups must work with the VPC containing the replication instance.
  public vpcSecurityGroupIds?: Array<string>;

  // The amount of storage (in gigabytes) to be initially allocated for the replication instance.
  public allocatedStorage?: number;

  // Indicates whether the changes should be applied immediately or during the next maintenance window. Only used when updating an existing resource.
  public applyImmediately?: boolean;

  // The Amazon Resource Name (ARN) for the KMS key that will be used to encrypt the connection parameters. If you do not specify a value for `kms_key_arn`, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region.
  public kmsKeyArn?: string;

  // The type of IP address protocol used by a replication instance. Valid values: `IPV4`, `DUAL`.
  public networkType?: string;

  // The compute and memory capacity of the replication instance as specified by the replication instance class. See [AWS DMS User Guide](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.Types.html) for available instance sizes and advice on which one to choose.
  public replicationInstanceClass?: string;

  // A list of the private IP addresses of the replication instance.
  public replicationInstancePrivateIps?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "allowMajorVersionUpgrade",
        "Indicates that major version upgrades are allowed.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "engineVersion",
        "The engine version number of the replication instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "applyImmediately",
        "Indicates whether the changes should be applied immediately or during the next maintenance window. Only used when updating an existing resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "vpcSecurityGroupIds",
        "A list of VPC security group IDs to be used with the replication instance. The VPC security groups must work with the VPC containing the replication instance.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "replicationSubnetGroupId",
        "A subnet group to associate with the replication instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoMinorVersionUpgrade",
        "Indicates that minor engine upgrades will be applied automatically to the replication instance during the maintenance window.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "The EC2 Availability Zone that the replication instance will be created in.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "multiAz",
        "Specifies if the replication instance is a multi-az deployment. You cannot set the `availability_zone` parameter if the `multi_az` parameter is set to `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyArn",
        "The Amazon Resource Name (ARN) for the KMS key that will be used to encrypt the connection parameters. If you do not specify a value for `kms_key_arn`, then AWS DMS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS region.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "preferredMaintenanceWindow",
        "The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).\n\n- Default: A 30-minute window selected at random from an 8-hour block of time per region, occurring on a random day of the week.\n- Format: `ddd:hh24:mi-ddd:hh24:mi`\n- Valid Days: `mon, tue, wed, thu, fri, sat, sun`\n- Constraints: Minimum 30-minute window.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "publiclyAccessible",
        "Specifies the accessibility options for the replication instance. A value of true represents an instance with a public IP address. A value of false represents an instance with a private IP address.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "replicationInstanceClass",
        "The compute and memory capacity of the replication instance as specified by the replication instance class. See [AWS DMS User Guide](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.Types.html) for available instance sizes and advice on which one to choose.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "allocatedStorage",
        "The amount of storage (in gigabytes) to be initially allocated for the replication instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "replicationInstanceId",
        "The replication instance identifier. This parameter is stored as a lowercase string.\n\n- Must contain from 1 to 63 alphanumeric characters or hyphens.\n- First character must be a letter.\n- Cannot end with a hyphen\n- Cannot contain two consecutive hyphens.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "networkType",
        "The type of IP address protocol used by a replication instance. Valid values: `IPV4`, `DUAL`.",
        [],
        false,
        false,
      ),
    ];
  }
}
