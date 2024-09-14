import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface LoggingArgs {
  // Name of an existing S3 bucket where the log files are to be stored. Required when `log_destination_type` is `s3`. Must be in the same region as the cluster and the cluster must have read bucket and put object permissions. For more information on the permissions required for the bucket, please read the AWS [documentation](http://docs.aws.amazon.com/redshift/latest/mgmt/db-auditing.html#db-auditing-enable-logging)
  bucketName?: string;

  /*
Identifier of the source cluster.

The following arguments are optional:
*/
  clusterIdentifier?: string;

  // Log destination type. Valid values are `s3` and `cloudwatch`.
  logDestinationType?: string;

  // Collection of exported log types. Required when `log_destination_type` is `cloudwatch`. Valid values are `connectionlog`, `useractivitylog`, and `userlog`.
  logExports?: Array<string>;

  // Prefix applied to the log file names.
  s3KeyPrefix?: string;
}
export class Logging extends DS_Resource {
  // Name of an existing S3 bucket where the log files are to be stored. Required when `log_destination_type` is `s3`. Must be in the same region as the cluster and the cluster must have read bucket and put object permissions. For more information on the permissions required for the bucket, please read the AWS [documentation](http://docs.aws.amazon.com/redshift/latest/mgmt/db-auditing.html#db-auditing-enable-logging)
  public bucketName?: string;

  /*
Identifier of the source cluster.

The following arguments are optional:
*/
  public clusterIdentifier?: string;

  // Log destination type. Valid values are `s3` and `cloudwatch`.
  public logDestinationType?: string;

  // Collection of exported log types. Required when `log_destination_type` is `cloudwatch`. Valid values are `connectionlog`, `useractivitylog`, and `userlog`.
  public logExports?: Array<string>;

  // Prefix applied to the log file names.
  public s3KeyPrefix?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "bucketName",
        "Name of an existing S3 bucket where the log files are to be stored. Required when `log_destination_type` is `s3`. Must be in the same region as the cluster and the cluster must have read bucket and put object permissions. For more information on the permissions required for the bucket, please read the AWS [documentation](http://docs.aws.amazon.com/redshift/latest/mgmt/db-auditing.html#db-auditing-enable-logging)",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterIdentifier",
        "Identifier of the source cluster.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "logDestinationType",
        "Log destination type. Valid values are `s3` and `cloudwatch`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "logExports",
        "Collection of exported log types. Required when `log_destination_type` is `cloudwatch`. Valid values are `connectionlog`, `useractivitylog`, and `userlog`.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "s3KeyPrefix",
        "Prefix applied to the log file names.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
