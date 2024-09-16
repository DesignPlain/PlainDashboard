import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  drs_ReplicationConfigurationTemplateTimeouts,
  drs_ReplicationConfigurationTemplateTimeouts_GetTypes,
} from '../types/drs_ReplicationConfigurationTemplateTimeouts';
import {
  drs_ReplicationConfigurationTemplatePitPolicy,
  drs_ReplicationConfigurationTemplatePitPolicy_GetTypes,
} from '../types/drs_ReplicationConfigurationTemplatePitPolicy';

export interface ReplicationConfigurationTemplateArgs {
  /*
Whether to use a dedicated Replication Server in the replication staging area.

The following arguments are optional:
*/
  useDedicatedReplicationServer?: boolean;

  // Whether to create a Public IP for the Recovery Instance by default.
  createPublicIp?: boolean;

  // Security group IDs that will be used by the replication server.
  replicationServersSecurityGroupsIds?: Array<string>;

  // Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.
  associateDefaultSecurityGroup?: boolean;

  // Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
  bandwidthThrottling?: number;

  // Type of EBS encryption to be used during replication. Valid values are `DEFAULT` and `CUSTOM`.
  ebsEncryption?: string;

  // ARN of the EBS encryption key to be used during replication.
  ebsEncryptionKeyArn?: string;

  // Instance type to be used for the replication server.
  replicationServerInstanceType?: string;

  // Subnet to be used by the replication staging area.
  stagingAreaSubnetId?: string;

  // Whether to allow the AWS replication agent to automatically replicate newly added disks.
  autoReplicateNewDisks?: boolean;

  // Staging Disk EBS volume type to be used during replication. Valid values are `GP2`, `GP3`, `ST1`, or `AUTO`.
  defaultLargeStagingDiskType?: string;

  // Set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.
  stagingAreaTags?: Map<string, string>;

  // Set of tags to be associated with the Replication Configuration Template resource.
  tags?: Map<string, string>;

  //
  timeouts?: drs_ReplicationConfigurationTemplateTimeouts;

  // Data plane routing mechanism that will be used for replication. Valid values are `PUBLIC_IP` and `PRIVATE_IP`.
  dataPlaneRouting?: string;

  // Configuration block for Point in time (PIT) policy to manage snapshots taken during replication. See below.
  pitPolicies?: Array<drs_ReplicationConfigurationTemplatePitPolicy>;
}
export class ReplicationConfigurationTemplate extends DS_Resource {
  // ARN of the EBS encryption key to be used during replication.
  public ebsEncryptionKeyArn?: string;

  // Instance type to be used for the replication server.
  public replicationServerInstanceType?: string;

  // Security group IDs that will be used by the replication server.
  public replicationServersSecurityGroupsIds?: Array<string>;

  // Subnet to be used by the replication staging area.
  public stagingAreaSubnetId?: string;

  // Replication configuration template ARN.
  public arn?: string;

  // Data plane routing mechanism that will be used for replication. Valid values are `PUBLIC_IP` and `PRIVATE_IP`.
  public dataPlaneRouting?: string;

  // Type of EBS encryption to be used during replication. Valid values are `DEFAULT` and `CUSTOM`.
  public ebsEncryption?: string;

  /*
Whether to use a dedicated Replication Server in the replication staging area.

The following arguments are optional:
*/
  public useDedicatedReplicationServer?: boolean;

  // Whether to create a Public IP for the Recovery Instance by default.
  public createPublicIp?: boolean;

  // Set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.
  public stagingAreaTags?: Map<string, string>;

  // Set of tags to be associated with the Replication Configuration Template resource.
  public tags?: Map<string, string>;

  //
  public timeouts?: drs_ReplicationConfigurationTemplateTimeouts;

  // Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.
  public associateDefaultSecurityGroup?: boolean;

  // Whether to allow the AWS replication agent to automatically replicate newly added disks.
  public autoReplicateNewDisks?: boolean;

  // Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
  public bandwidthThrottling?: number;

  // Staging Disk EBS volume type to be used during replication. Valid values are `GP2`, `GP3`, `ST1`, or `AUTO`.
  public defaultLargeStagingDiskType?: string;

  // Configuration block for Point in time (PIT) policy to manage snapshots taken during replication. See below.
  public pitPolicies?: Array<drs_ReplicationConfigurationTemplatePitPolicy>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'createPublicIp',
        'Whether to create a Public IP for the Recovery Instance by default.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'replicationServerInstanceType',
        'Instance type to be used for the replication server.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'useDedicatedReplicationServer',
        'Whether to use a dedicated Replication Server in the replication staging area.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'replicationServersSecurityGroupsIds',
        'Security group IDs that will be used by the replication server.',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'ebsEncryptionKeyArn',
        'ARN of the EBS encryption key to be used during replication.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'autoReplicateNewDisks',
        'Whether to allow the AWS replication agent to automatically replicate newly added disks.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => drs_ReplicationConfigurationTemplateTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'bandwidthThrottling',
        'Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'stagingAreaSubnetId',
        'Subnet to be used by the replication staging area.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'defaultLargeStagingDiskType',
        'Staging Disk EBS volume type to be used during replication. Valid values are `GP2`, `GP3`, `ST1`, or `AUTO`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'stagingAreaTags',
        'Set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.',
        () => InputType_Map_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Set of tags to be associated with the Replication Configuration Template resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'pitPolicies',
        'Configuration block for Point in time (PIT) policy to manage snapshots taken during replication. See below.',
        () => drs_ReplicationConfigurationTemplatePitPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'associateDefaultSecurityGroup',
        'Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'ebsEncryption',
        'Type of EBS encryption to be used during replication. Valid values are `DEFAULT` and `CUSTOM`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'dataPlaneRouting',
        'Data plane routing mechanism that will be used for replication. Valid values are `PUBLIC_IP` and `PRIVATE_IP`.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
