import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dax_ClusterServerSideEncryption,
  dax_ClusterServerSideEncryption_GetTypes,
} from '../types/dax_ClusterServerSideEncryption';
import {
  dax_ClusterNode,
  dax_ClusterNode_GetTypes,
} from '../types/dax_ClusterNode';

export interface ClusterArgs {
  /*
The compute and memory capacity of the nodes. See
[Nodes](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.cluster.html#DAX.concepts.nodes) for supported node types
*/
  nodeType?: string;

  /*
One or more VPC security groups associated
with the cluster
*/
  securityGroupIds?: Array<string>;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
Specifies the weekly time range for when
maintenance on the cluster is performed. The format is `ddd:hh24:mi-ddd:hh24:mi`
(24H Clock UTC). The minimum maintenance window is a 60 minute period. Example:
`sun:05:00-sun:09:00`
*/
  maintenanceWindow?: string;

  // Encrypt at rest options
  serverSideEncryption?: dax_ClusterServerSideEncryption;

  /*
An Amazon Resource Name (ARN) of an
SNS topic to send DAX notifications to. Example:
`arn:aws:sns:us-east-1:012345678999:my_sns_topic`
*/
  notificationTopicArn?: string;

  /*
The number of nodes in the DAX cluster. A
replication factor of 1 will create a single-node cluster, without any read
replicas
*/
  replicationFactor?: number;

  /*
A valid Amazon Resource Name (ARN) that identifies
an IAM role. At runtime, DAX will assume this role and use the role's
permissions to access DynamoDB on your behalf
*/
  iamRoleArn?: string;

  /*
Name of the parameter group to associate
with this DAX cluster
*/
  parameterGroupName?: string;

  /*
Name of the subnet group to be used for the
cluster
*/
  subnetGroupName?: string;

  /*
List of Availability Zones in which the
nodes will be created
*/
  availabilityZones?: Array<string>;

  /*
The type of encryption the
cluster's endpoint should support. Valid values are: `NONE` and `TLS`.
Default value is `NONE`.
*/
  clusterEndpointEncryptionType?: string;

  /*
Group identifier. DAX converts this name to
lowercase
*/
  clusterName?: string;

  // Description for the cluster
  description?: string;
}
export class Cluster extends DS_Resource {
  /*
The configuration endpoint for this DAX cluster,
consisting of a DNS name and a port number
*/
  public configurationEndpoint?: string;

  /*
The compute and memory capacity of the nodes. See
[Nodes](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.cluster.html#DAX.concepts.nodes) for supported node types
*/
  public nodeType?: string;

  /*
The number of nodes in the DAX cluster. A
replication factor of 1 will create a single-node cluster, without any read
replicas
*/
  public replicationFactor?: number;

  // The ARN of the DAX cluster
  public arn?: string;

  // Description for the cluster
  public description?: string;

  /*
List of node objects including `id`, `address`, `port` and
`availability_zone`. Referenceable e.g., as
`${aws_dax_cluster.test.nodes.0.address}`
*/
  public nodes?: Array<dax_ClusterNode>;

  /*
Name of the parameter group to associate
with this DAX cluster
*/
  public parameterGroupName?: string;

  /*
One or more VPC security groups associated
with the cluster
*/
  public securityGroupIds?: Array<string>;

  /*
Group identifier. DAX converts this name to
lowercase
*/
  public clusterName?: string;

  /*
The type of encryption the
cluster's endpoint should support. Valid values are: `NONE` and `TLS`.
Default value is `NONE`.
*/
  public clusterEndpointEncryptionType?: string;

  /*
Specifies the weekly time range for when
maintenance on the cluster is performed. The format is `ddd:hh24:mi-ddd:hh24:mi`
(24H Clock UTC). The minimum maintenance window is a 60 minute period. Example:
`sun:05:00-sun:09:00`
*/
  public maintenanceWindow?: string;

  // The port used by the configuration endpoint
  public port?: number;

  /*
List of Availability Zones in which the
nodes will be created
*/
  public availabilityZones?: Array<string>;

  /*
A valid Amazon Resource Name (ARN) that identifies
an IAM role. At runtime, DAX will assume this role and use the role's
permissions to access DynamoDB on your behalf
*/
  public iamRoleArn?: string;

  /*
An Amazon Resource Name (ARN) of an
SNS topic to send DAX notifications to. Example:
`arn:aws:sns:us-east-1:012345678999:my_sns_topic`
*/
  public notificationTopicArn?: string;

  // Encrypt at rest options
  public serverSideEncryption?: dax_ClusterServerSideEncryption;

  /*
Name of the subnet group to be used for the
cluster
*/
  public subnetGroupName?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The DNS name of the DAX cluster without the port appended
  public clusterAddress?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'clusterEndpointEncryptionType',
        "The type of encryption the\ncluster's endpoint should support. Valid values are: `NONE` and `TLS`.\nDefault value is `NONE`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'clusterName',
        'Group identifier. DAX converts this name to\nlowercase',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'nodeType',
        'The compute and memory capacity of the nodes. See\n[Nodes](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.cluster.html#DAX.concepts.nodes) for supported node types',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'iamRoleArn',
        "A valid Amazon Resource Name (ARN) that identifies\nan IAM role. At runtime, DAX will assume this role and use the role's\npermissions to access DynamoDB on your behalf",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'availabilityZones',
        'List of Availability Zones in which the\nnodes will be created',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description for the cluster',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'securityGroupIds',
        'One or more VPC security groups associated\nwith the cluster',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'maintenanceWindow',
        'Specifies the weekly time range for when\nmaintenance on the cluster is performed. The format is `ddd:hh24:mi-ddd:hh24:mi`\n(24H Clock UTC). The minimum maintenance window is a 60 minute period. Example:\n`sun:05:00-sun:09:00`',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'notificationTopicArn',
        'An Amazon Resource Name (ARN) of an\nSNS topic to send DAX notifications to. Example:\n`arn:aws:sns:us-east-1:012345678999:my_sns_topic`',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'parameterGroupName',
        'Name of the parameter group to associate\nwith this DAX cluster',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'serverSideEncryption',
        'Encrypt at rest options',
        () => dax_ClusterServerSideEncryption_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'replicationFactor',
        'The number of nodes in the DAX cluster. A\nreplication factor of 1 will create a single-node cluster, without any read\nreplicas',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'subnetGroupName',
        'Name of the subnet group to be used for the\ncluster',
        () => [],
        false,
        true,
      ),
    ];
  }
}
