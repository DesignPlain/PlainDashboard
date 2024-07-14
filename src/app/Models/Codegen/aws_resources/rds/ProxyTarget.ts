import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ProxyTargetArgs {
  // DB instance identifier.
  dbInstanceIdentifier?: string;

  // The name of the DB proxy.
  dbProxyName?: string;

  // The name of the target group.
  targetGroupName?: string;

  /*
DB cluster identifier.

--NOTE:-- Either `db_instance_identifier` or `db_cluster_identifier` should be specified and both should not be specified together
*/
  dbClusterIdentifier?: string;
}
export class ProxyTarget extends Resource {
  // DB instance identifier.
  public dbInstanceIdentifier?: string;

  // Amazon Resource Name (ARN) for the DB instance or DB cluster. Currently not returned by the RDS API.
  public targetArn?: string;

  // DB Cluster identifier for the DB Instance target. Not returned unless manually importing an `RDS_INSTANCE` target that is part of a DB Cluster.
  public trackedClusterId?: string;

  // Type of targetE.g., `RDS_INSTANCE` or `TRACKED_CLUSTER`
  public type?: string;

  // The name of the target group.
  public targetGroupName?: string;

  /*
DB cluster identifier.

--NOTE:-- Either `db_instance_identifier` or `db_cluster_identifier` should be specified and both should not be specified together
*/
  public dbClusterIdentifier?: string;

  // The name of the DB proxy.
  public dbProxyName?: string;

  // Hostname for the target RDS DB Instance. Only returned for `RDS_INSTANCE` type.
  public endpoint?: string;

  // Port for the target RDS DB Instance or Aurora DB Cluster.
  public port?: number;

  // Identifier representing the DB Instance or DB Cluster target.
  public rdsResourceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "dbInstanceIdentifier",
        "DB instance identifier.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dbProxyName",
        "The name of the DB proxy.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetGroupName",
        "The name of the target group.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dbClusterIdentifier",
        "DB cluster identifier.\n\n**NOTE:** Either `db_instance_identifier` or `db_cluster_identifier` should be specified and both should not be specified together",
        [],
        false,
        true,
      ),
    ];
  }
}
