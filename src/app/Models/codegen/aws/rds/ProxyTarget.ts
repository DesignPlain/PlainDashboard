import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ProxyTargetArgs {
  /*
DB cluster identifier.

--NOTE:-- Either `db_instance_identifier` or `db_cluster_identifier` should be specified and both should not be specified together
*/
  dbClusterIdentifier?: string;

  // DB instance identifier.
  dbInstanceIdentifier?: string;

  // The name of the DB proxy.
  dbProxyName?: string;

  // The name of the target group.
  targetGroupName?: string;
}
export class ProxyTarget extends DS_Resource {
  // Hostname for the target RDS DB Instance. Only returned for `RDS_INSTANCE` type.
  public endpoint?: string;

  // Identifier representing the DB Instance or DB Cluster target.
  public rdsResourceId?: string;

  // Amazon Resource Name (ARN) for the DB instance or DB cluster. Currently not returned by the RDS API.
  public targetArn?: string;

  // Type of targetE.g., `RDS_INSTANCE` or `TRACKED_CLUSTER`
  public type?: string;

  /*
DB cluster identifier.

--NOTE:-- Either `db_instance_identifier` or `db_cluster_identifier` should be specified and both should not be specified together
*/
  public dbClusterIdentifier?: string;

  // DB instance identifier.
  public dbInstanceIdentifier?: string;

  // The name of the DB proxy.
  public dbProxyName?: string;

  // Port for the target RDS DB Instance or Aurora DB Cluster.
  public port?: number;

  // The name of the target group.
  public targetGroupName?: string;

  // DB Cluster identifier for the DB Instance target. Not returned unless manually importing an `RDS_INSTANCE` target that is part of a DB Cluster.
  public trackedClusterId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'targetGroupName',
        'The name of the target group.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'dbClusterIdentifier',
        'DB cluster identifier.\n\n**NOTE:** Either `db_instance_identifier` or `db_cluster_identifier` should be specified and both should not be specified together',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'dbInstanceIdentifier',
        'DB instance identifier.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'dbProxyName',
        'The name of the DB proxy.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
