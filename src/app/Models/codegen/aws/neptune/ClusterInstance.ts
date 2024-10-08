import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ClusterInstanceArgs {
  // The port on which the DB accepts connections. Defaults to `8182`.
  port?: number;

  // The daily time range during which automated backups are created if automated backups are enabled. Eg: "04:00-09:00"
  preferredBackupWindow?: string;

  // The name of the database engine to be used for the neptune instance. Defaults to `neptune`. Valid Values: `neptune`.
  engine?: string;

  // Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`.
  identifierPrefix?: string;

  // The identifier for the neptune instance, if omitted, this provider will assign a random, unique identifier.
  identifier?: string;

  // Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoter to writer.
  promotionTier?: number;

  // The EC2 Availability Zone that the neptune instance is created in.
  availabilityZone?: string;

  // The identifier of the `aws.neptune.Cluster` in which to launch this instance.
  clusterIdentifier?: string;

  // The neptune engine version. Currently configuring this argumnet has no effect.
  engineVersion?: string;

  // The name of the neptune parameter group to associate with this instance.
  neptuneParameterGroupName?: string;

  /*
The window to perform maintenance in.
Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".
*/
  preferredMaintenanceWindow?: string;

  /*
Specifies whether any instance modifications
are applied immediately, or during the next maintenance window. Default is`false`.
*/
  applyImmediately?: boolean;

  // Indicates that minor engine upgrades will be applied automatically to the instance during the maintenance window. Default is `true`.
  autoMinorVersionUpgrade?: boolean;

  // Bool to control if instance is publicly accessible. Default is `false`.
  publiclyAccessible?: boolean;

  // Determines whether a final DB snapshot is created before the DB instance is deleted.
  skipFinalSnapshot?: boolean;

  // A map of tags to assign to the instance. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The instance class to use.
  instanceClass?: string;

  // A subnet group to associate with this neptune instance. --NOTE:-- This must match the `neptune_subnet_group_name` of the attached `aws.neptune.Cluster`.
  neptuneSubnetGroupName?: string;
}
export class ClusterInstance extends DS_Resource {
  /*
Specifies whether any instance modifications
are applied immediately, or during the next maintenance window. Default is`false`.
*/
  public applyImmediately?: boolean;

  // The ARN for the KMS encryption key if one is set to the neptune cluster.
  public kmsKeyArn?: string;

  // Storage type associated with the cluster `standard/iopt1`.
  public storageType?: string;

  // The instance class to use.
  public instanceClass?: string;

  // The EC2 Availability Zone that the neptune instance is created in.
  public availabilityZone?: string;

  // The region-unique, immutable identifier for the neptune instance.
  public dbiResourceId?: string;

  // The identifier for the neptune instance, if omitted, this provider will assign a random, unique identifier.
  public identifier?: string;

  // Boolean indicating if this instance is writable. `False` indicates this instance is a read replica.
  public writer?: boolean;

  // A map of tags to assign to the instance. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The hostname of the instance. See also `endpoint` and `port`.
  public address?: string;

  // The name of the database engine to be used for the neptune instance. Defaults to `neptune`. Valid Values: `neptune`.
  public engine?: string;

  /*
The window to perform maintenance in.
Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".
*/
  public preferredMaintenanceWindow?: string;

  // Amazon Resource Name (ARN) of neptune instance
  public arn?: string;

  // The identifier of the `aws.neptune.Cluster` in which to launch this instance.
  public clusterIdentifier?: string;

  // The connection endpoint in `address:port` format.
  public endpoint?: string;

  // Indicates that minor engine upgrades will be applied automatically to the instance during the maintenance window. Default is `true`.
  public autoMinorVersionUpgrade?: boolean;

  // The neptune engine version. Currently configuring this argumnet has no effect.
  public engineVersion?: string;

  // Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`.
  public identifierPrefix?: string;

  // The port on which the DB accepts connections. Defaults to `8182`.
  public port?: number;

  // Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoter to writer.
  public promotionTier?: number;

  // Specifies whether the neptune cluster is encrypted.
  public storageEncrypted?: boolean;

  // The name of the neptune parameter group to associate with this instance.
  public neptuneParameterGroupName?: string;

  // A subnet group to associate with this neptune instance. --NOTE:-- This must match the `neptune_subnet_group_name` of the attached `aws.neptune.Cluster`.
  public neptuneSubnetGroupName?: string;

  // The daily time range during which automated backups are created if automated backups are enabled. Eg: "04:00-09:00"
  public preferredBackupWindow?: string;

  // Bool to control if instance is publicly accessible. Default is `false`.
  public publiclyAccessible?: boolean;

  // Determines whether a final DB snapshot is created before the DB instance is deleted.
  public skipFinalSnapshot?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'neptuneSubnetGroupName',
        'A subnet group to associate with this neptune instance. **NOTE:** This must match the `neptune_subnet_group_name` of the attached `aws.neptune.Cluster`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'engine',
        'The name of the database engine to be used for the neptune instance. Defaults to `neptune`. Valid Values: `neptune`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'identifier',
        'The identifier for the neptune instance, if omitted, this provider will assign a random, unique identifier.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'availabilityZone',
        'The EC2 Availability Zone that the neptune instance is created in.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'preferredMaintenanceWindow',
        'The window to perform maintenance in.\nSyntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the instance. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'preferredBackupWindow',
        'The daily time range during which automated backups are created if automated backups are enabled. Eg: "04:00-09:00"',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'promotionTier',
        'Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoter to writer.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'neptuneParameterGroupName',
        'The name of the neptune parameter group to associate with this instance.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'applyImmediately',
        'Specifies whether any instance modifications\nare applied immediately, or during the next maintenance window. Default is`false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'autoMinorVersionUpgrade',
        'Indicates that minor engine upgrades will be applied automatically to the instance during the maintenance window. Default is `true`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'engineVersion',
        'The neptune engine version. Currently configuring this argumnet has no effect.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'skipFinalSnapshot',
        'Determines whether a final DB snapshot is created before the DB instance is deleted.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'port',
        'The port on which the DB accepts connections. Defaults to `8182`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'identifierPrefix',
        'Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'clusterIdentifier',
        'The identifier of the `aws.neptune.Cluster` in which to launch this instance.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'publiclyAccessible',
        'Bool to control if instance is publicly accessible. Default is `false`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'instanceClass',
        'The instance class to use.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
