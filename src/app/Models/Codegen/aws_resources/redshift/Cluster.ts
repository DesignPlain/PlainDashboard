import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  redshift_ClusterSnapshotCopy,
  redshift_ClusterSnapshotCopy_GetTypes,
} from "../types/redshift_ClusterSnapshotCopy";
import {
  redshift_ClusterLogging,
  redshift_ClusterLogging_GetTypes,
} from "../types/redshift_ClusterLogging";
import {
  redshift_ClusterClusterNode,
  redshift_ClusterClusterNode_GetTypes,
} from "../types/redshift_ClusterClusterNode";

export interface ClusterArgs {
  // The name of a cluster subnet group to be associated with this cluster. If this parameter is not provided the resulting cluster will be deployed outside virtual private cloud (VPC).
  clusterSubnetGroupName?: string;

  // The Elastic IP (EIP) address for the cluster.
  elasticIp?: string;

  // Specifies if the Redshift cluster is multi-AZ.
  multiAz?: boolean;

  // If true, the cluster can be relocated to another availabity zone, either automatically by AWS or when requested. Default is `false`. Available for use on clusters from the RA3 instance family.
  availabilityZoneRelocationEnabled?: boolean;

  /*
The version of the Amazon Redshift engine software that you want to deploy on the cluster.
The version selected runs on all the nodes in the cluster.
*/
  clusterVersion?: string;

  // The AWS customer account used to create or copy the snapshot. Required if you are restoring a snapshot you do not own, optional if you own the snapshot.
  ownerAccount?: string;

  // If true, the cluster can be accessed from a public network. Default is `true`.
  publiclyAccessible?: boolean;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The specific revision number of the database in the cluster
  clusterRevisionNumber?: string;

  // The name of the maintenance track for the restored cluster. When you take a snapshot, the snapshot inherits the MaintenanceTrack value from the cluster. The snapshot might be on a different track than the cluster that was the source for the snapshot. For example, suppose that you take a snapshot of  a cluster that is on the current track and then change the cluster to be on the trailing track. In this case, the snapshot and the source cluster are on different tracks. Default value is `current`.
  maintenanceTrackName?: string;

  /*
Whether to use AWS SecretsManager to manage the cluster admin credentials.
Conflicts with `master_password`.
One of `master_password` or `manage_master_password` is required unless `snapshot_identifier` is provided.
*/
  manageMasterPassword?: boolean;

  // The ARN for the KMS encryption key. When specifying `kms_key_id`, `encrypted` needs to be set to true.
  kmsKeyId?: string;

  // The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was created.
  defaultIamRoleArn?: string;

  // The connection endpoint
  endpoint?: string;

  // If true , enhanced VPC routing is enabled.
  enhancedVpcRouting?: boolean;

  // The node type to be provisioned for the cluster.
  nodeType?: string;

  // The cluster type to use. Either `single-node` or `multi-node`.
  clusterType?: string;

  // If true , the data in the cluster is encrypted at rest.
  encrypted?: boolean;

  /*
The weekly time range (in UTC) during which automated cluster maintenance can occur.
Format: ddd:hh24:mi-ddd:hh24:mi
*/
  preferredMaintenanceWindow?: string;

  // The name of the cluster the source snapshot was created from.
  snapshotClusterIdentifier?: string;

  // The Cluster Identifier. Must be a lower case string.
  clusterIdentifier?: string;

  // Specifies whether any cluster modifications are applied immediately, or during the next maintenance window. Default is `false`.
  applyImmediately?: boolean;

  // The public key for the cluster
  clusterPublicKey?: string;

  /*
The name of the first database to be created when the cluster is created.
If you do not provide a name, Amazon Redshift will create a default database called `dev`.
*/
  databaseName?: string;

  // The identifier of the final snapshot that is to be created immediately before deleting the cluster. If this parameter is provided, `skip_final_snapshot` must be false.
  finalSnapshotIdentifier?: string;

  /*
Password for the master DB user.
Conflicts with `manage_master_password`.
One of `master_password` or `manage_master_password` is required unless `snapshot_identifier` is provided.
Note that this may show up in logs, and it will be stored in the state file.
Password must contain at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number.
*/
  masterPassword?: string;

  /*
The port number on which the cluster accepts incoming connections. Valid values are between `1115` and `65535`.
The cluster is accessible only via the JDBC and ODBC connection strings.
Part of the connection string requires the port on which the cluster will listen for incoming connections.
Default port is `5439`.
*/
  port?: number;

  // The ARN of the snapshot from which to create the new cluster. Conflicts with `snapshot_identifier`.
  snapshotArn?: string;

  // If true , major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. Default is `true`.
  allowVersionUpgrade?: boolean;

  // A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.
  vpcSecurityGroupIds?: Array<string>;

  // The number of compute nodes in the cluster. This parameter is required when the ClusterType parameter is specified as multi-node. Default is 1.
  numberOfNodes?: number;

  // Determines whether a final snapshot of the cluster is created before Amazon Redshift deletes the cluster. If true , a final cluster snapshot is not created. If false , a final cluster snapshot is created before the cluster is deleted. Default is false.
  skipFinalSnapshot?: boolean;

  // Configuration of automatic copy of snapshots from one region to another. Documented below.
  snapshotCopy?: redshift_ClusterSnapshotCopy;

  // ID of the KMS key used to encrypt the cluster admin credentials secret.
  masterPasswordSecretKmsKeyId?: string;

  // The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with create-cluster-snapshot. Default is 1.
  automatedSnapshotRetentionPeriod?: number;

  // The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. For example, if you have several EC2 instances running in a specific Availability Zone, then you might want the cluster to be provisioned in the same zone in order to decrease network latency. Can only be changed if `availability_zone_relocation_enabled` is `true`.
  availabilityZone?: string;

  // The name of the parameter group to be associated with this cluster.
  clusterParameterGroupName?: string;

  // A list of IAM Role ARNs to associate with the cluster. A Maximum of 10 can be associated to the cluster at any time.
  iamRoles?: Array<string>;

  // Logging, documented below.
  logging?: redshift_ClusterLogging;

  // The default number of days to retain a manual snapshot. If the value is -1, the snapshot is retained indefinitely. This setting doesn't change the retention period of existing snapshots. Valid values are between `-1` and `3653`. Default value is `-1`.
  manualSnapshotRetentionPeriod?: number;

  // Username for the master DB user.
  masterUsername?: string;

  /*
The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored.
No longer supported by the AWS API.
Always returns `auto`.
*/
  aquaConfigurationStatus?: string;

  // The name of the snapshot from which to create the new cluster.  Conflicts with `snapshot_arn`.
  snapshotIdentifier?: string;
}
export class Cluster extends Resource {
  // The name of a cluster subnet group to be associated with this cluster. If this parameter is not provided the resulting cluster will be deployed outside virtual private cloud (VPC).
  public clusterSubnetGroupName?: string;

  // The identifier of the final snapshot that is to be created immediately before deleting the cluster. If this parameter is provided, `skip_final_snapshot` must be false.
  public finalSnapshotIdentifier?: string;

  // The name of the maintenance track for the restored cluster. When you take a snapshot, the snapshot inherits the MaintenanceTrack value from the cluster. The snapshot might be on a different track than the cluster that was the source for the snapshot. For example, suppose that you take a snapshot of  a cluster that is on the current track and then change the cluster to be on the trailing track. In this case, the snapshot and the source cluster are on different tracks. Default value is `current`.
  public maintenanceTrackName?: string;

  /*
Whether to use AWS SecretsManager to manage the cluster admin credentials.
Conflicts with `master_password`.
One of `master_password` or `manage_master_password` is required unless `snapshot_identifier` is provided.
*/
  public manageMasterPassword?: boolean;

  // The node type to be provisioned for the cluster.
  public nodeType?: string;

  // A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.
  public vpcSecurityGroupIds?: Array<string>;

  // The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with create-cluster-snapshot. Default is 1.
  public automatedSnapshotRetentionPeriod?: number;

  // The nodes in the cluster. Cluster node blocks are documented below
  public clusterNodes?: Array<redshift_ClusterClusterNode>;

  // The ARN for the KMS encryption key. When specifying `kms_key_id`, `encrypted` needs to be set to true.
  public kmsKeyId?: string;

  // The number of compute nodes in the cluster. This parameter is required when the ClusterType parameter is specified as multi-node. Default is 1.
  public numberOfNodes?: number;

  /*
The weekly time range (in UTC) during which automated cluster maintenance can occur.
Format: ddd:hh24:mi-ddd:hh24:mi
*/
  public preferredMaintenanceWindow?: string;

  // If true, the cluster can be accessed from a public network. Default is `true`.
  public publiclyAccessible?: boolean;

  // Configuration of automatic copy of snapshots from one region to another. Documented below.
  public snapshotCopy?: redshift_ClusterSnapshotCopy;

  // The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. For example, if you have several EC2 instances running in a specific Availability Zone, then you might want the cluster to be provisioned in the same zone in order to decrease network latency. Can only be changed if `availability_zone_relocation_enabled` is `true`.
  public availabilityZone?: string;

  // The Cluster Identifier. Must be a lower case string.
  public clusterIdentifier?: string;

  // The Elastic IP (EIP) address for the cluster.
  public elasticIp?: string;

  // A list of IAM Role ARNs to associate with the cluster. A Maximum of 10 can be associated to the cluster at any time.
  public iamRoles?: Array<string>;

  // The name of the cluster the source snapshot was created from.
  public snapshotClusterIdentifier?: string;

  // The name of the snapshot from which to create the new cluster.  Conflicts with `snapshot_arn`.
  public snapshotIdentifier?: string;

  /*
The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored.
No longer supported by the AWS API.
Always returns `auto`.
*/
  public aquaConfigurationStatus?: string;

  /*
Password for the master DB user.
Conflicts with `manage_master_password`.
One of `master_password` or `manage_master_password` is required unless `snapshot_identifier` is provided.
Note that this may show up in logs, and it will be stored in the state file.
Password must contain at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number.
*/
  public masterPassword?: string;

  // The AWS customer account used to create or copy the snapshot. Required if you are restoring a snapshot you do not own, optional if you own the snapshot.
  public ownerAccount?: string;

  // Determines whether a final snapshot of the cluster is created before Amazon Redshift deletes the cluster. If true , a final cluster snapshot is not created. If false , a final cluster snapshot is created before the cluster is deleted. Default is false.
  public skipFinalSnapshot?: boolean;

  // The ARN of the snapshot from which to create the new cluster. Conflicts with `snapshot_identifier`.
  public snapshotArn?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Amazon Resource Name (ARN) of cluster
  public arn?: string;

  // The public key for the cluster
  public clusterPublicKey?: string;

  /*
The version of the Amazon Redshift engine software that you want to deploy on the cluster.
The version selected runs on all the nodes in the cluster.
*/
  public clusterVersion?: string;

  // If true , enhanced VPC routing is enabled.
  public enhancedVpcRouting?: boolean;

  // Username for the master DB user.
  public masterUsername?: string;

  // Specifies if the Redshift cluster is multi-AZ.
  public multiAz?: boolean;

  // The name of the parameter group to be associated with this cluster.
  public clusterParameterGroupName?: string;

  // The specific revision number of the database in the cluster
  public clusterRevisionNumber?: string;

  // The cluster type to use. Either `single-node` or `multi-node`.
  public clusterType?: string;

  // The connection endpoint
  public endpoint?: string;

  // The default number of days to retain a manual snapshot. If the value is -1, the snapshot is retained indefinitely. This setting doesn't change the retention period of existing snapshots. Valid values are between `-1` and `3653`. Default value is `-1`.
  public manualSnapshotRetentionPeriod?: number;

  /*
The port number on which the cluster accepts incoming connections. Valid values are between `1115` and `65535`.
The cluster is accessible only via the JDBC and ODBC connection strings.
Part of the connection string requires the port on which the cluster will listen for incoming connections.
Default port is `5439`.
*/
  public port?: number;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The namespace Amazon Resource Name (ARN) of the cluster
  public clusterNamespaceArn?: string;

  /*
The name of the first database to be created when the cluster is created.
If you do not provide a name, Amazon Redshift will create a default database called `dev`.
*/
  public databaseName?: string;

  // The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was created.
  public defaultIamRoleArn?: string;

  // The DNS name of the cluster
  public dnsName?: string;

  // If true , the data in the cluster is encrypted at rest.
  public encrypted?: boolean;

  // Logging, documented below.
  public logging?: redshift_ClusterLogging;

  // ARN of the cluster admin credentials secret
  public masterPasswordSecretArn?: string;

  // If true , major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. Default is `true`.
  public allowVersionUpgrade?: boolean;

  // Specifies whether any cluster modifications are applied immediately, or during the next maintenance window. Default is `false`.
  public applyImmediately?: boolean;

  // If true, the cluster can be relocated to another availabity zone, either automatically by AWS or when requested. Default is `false`. Available for use on clusters from the RA3 instance family.
  public availabilityZoneRelocationEnabled?: boolean;

  // ID of the KMS key used to encrypt the cluster admin credentials secret.
  public masterPasswordSecretKmsKeyId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "elasticIp",
        "The Elastic IP (EIP) address for the cluster.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enhancedVpcRouting",
        "If true , enhanced VPC routing is enabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "skipFinalSnapshot",
        "Determines whether a final snapshot of the cluster is created before Amazon Redshift deletes the cluster. If true , a final cluster snapshot is not created. If false , a final cluster snapshot is created before the cluster is deleted. Default is false.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. For example, if you have several EC2 instances running in a specific Availability Zone, then you might want the cluster to be provisioned in the same zone in order to decrease network latency. Can only be changed if `availability_zone_relocation_enabled` is `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterParameterGroupName",
        "The name of the parameter group to be associated with this cluster.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "manualSnapshotRetentionPeriod",
        "The default number of days to retain a manual snapshot. If the value is -1, the snapshot is retained indefinitely. This setting doesn't change the retention period of existing snapshots. Valid values are between `-1` and `3653`. Default value is `-1`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "masterUsername",
        "Username for the master DB user.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "endpoint",
        "The connection endpoint",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "masterPassword",
        "Password for the master DB user.\nConflicts with `manage_master_password`.\nOne of `master_password` or `manage_master_password` is required unless `snapshot_identifier` is provided.\nNote that this may show up in logs, and it will be stored in the state file.\nPassword must contain at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "numberOfNodes",
        "The number of compute nodes in the cluster. This parameter is required when the ClusterType parameter is specified as multi-node. Default is 1.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "snapshotIdentifier",
        "The name of the snapshot from which to create the new cluster.  Conflicts with `snapshot_arn`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterRevisionNumber",
        "The specific revision number of the database in the cluster",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "encrypted",
        "If true , the data in the cluster is encrypted at rest.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterPublicKey",
        "The public key for the cluster",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "aquaConfigurationStatus",
        "The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored.\nNo longer supported by the AWS API.\nAlways returns `auto`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterVersion",
        "The version of the Amazon Redshift engine software that you want to deploy on the cluster.\nThe version selected runs on all the nodes in the cluster.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ownerAccount",
        "The AWS customer account used to create or copy the snapshot. Required if you are restoring a snapshot you do not own, optional if you own the snapshot.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "publiclyAccessible",
        "If true, the cluster can be accessed from a public network. Default is `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterIdentifier",
        "The Cluster Identifier. Must be a lower case string.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "vpcSecurityGroupIds",
        "A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "masterPasswordSecretKmsKeyId",
        "ID of the KMS key used to encrypt the cluster admin credentials secret.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "multiAz",
        "Specifies if the Redshift cluster is multi-AZ.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "nodeType",
        "The node type to be provisioned for the cluster.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "applyImmediately",
        "Specifies whether any cluster modifications are applied immediately, or during the next maintenance window. Default is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "iamRoles",
        "A list of IAM Role ARNs to associate with the cluster. A Maximum of 10 can be associated to the cluster at any time.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "availabilityZoneRelocationEnabled",
        "If true, the cluster can be relocated to another availabity zone, either automatically by AWS or when requested. Default is `false`. Available for use on clusters from the RA3 instance family.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "maintenanceTrackName",
        "The name of the maintenance track for the restored cluster. When you take a snapshot, the snapshot inherits the MaintenanceTrack value from the cluster. The snapshot might be on a different track than the cluster that was the source for the snapshot. For example, suppose that you take a snapshot of  a cluster that is on the current track and then change the cluster to be on the trailing track. In this case, the snapshot and the source cluster are on different tracks. Default value is `current`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "The ARN for the KMS encryption key. When specifying `kms_key_id`, `encrypted` needs to be set to true.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterType",
        "The cluster type to use. Either `single-node` or `multi-node`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "databaseName",
        "The name of the first database to be created when the cluster is created.\nIf you do not provide a name, Amazon Redshift will create a default database called `dev`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "The port number on which the cluster accepts incoming connections. Valid values are between `1115` and `65535`.\nThe cluster is accessible only via the JDBC and ODBC connection strings.\nPart of the connection string requires the port on which the cluster will listen for incoming connections.\nDefault port is `5439`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "logging",
        "Logging, documented below.",
        redshift_ClusterLogging_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterSubnetGroupName",
        "The name of a cluster subnet group to be associated with this cluster. If this parameter is not provided the resulting cluster will be deployed outside virtual private cloud (VPC).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "manageMasterPassword",
        "Whether to use AWS SecretsManager to manage the cluster admin credentials.\nConflicts with `master_password`.\nOne of `master_password` or `manage_master_password` is required unless `snapshot_identifier` is provided.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultIamRoleArn",
        "The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was created.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "snapshotArn",
        "The ARN of the snapshot from which to create the new cluster. Conflicts with `snapshot_identifier`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "allowVersionUpgrade",
        "If true , major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. Default is `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "snapshotCopy",
        "Configuration of automatic copy of snapshots from one region to another. Documented below.",
        redshift_ClusterSnapshotCopy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "preferredMaintenanceWindow",
        "The weekly time range (in UTC) during which automated cluster maintenance can occur.\nFormat: ddd:hh24:mi-ddd:hh24:mi",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "snapshotClusterIdentifier",
        "The name of the cluster the source snapshot was created from.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "finalSnapshotIdentifier",
        "The identifier of the final snapshot that is to be created immediately before deleting the cluster. If this parameter is provided, `skip_final_snapshot` must be false.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "automatedSnapshotRetentionPeriod",
        "The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with create-cluster-snapshot. Default is 1.",
        [],
        false,
        false,
      ),
    ];
  }
}
