import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface redshift_ClusterLogging {
  /*
The name of an existing S3 bucket where the log files are to be stored. Must be in the same region as the cluster and the cluster must have read bucket and put object permissions.
For more information on the permissions required for the bucket, please read the AWS [documentation](http://docs.aws.amazon.com/redshift/latest/mgmt/db-auditing.html#db-auditing-enable-logging)
*/
  bucketName?: string;

  // Enables logging information such as queries and connection attempts, for the specified Amazon Redshift cluster.
  enable?: boolean;

  // The log destination type. An enum with possible values of `s3` and `cloudwatch`.
  logDestinationType?: string;

  // The collection of exported log types. Log types include the connection log, user log and user activity log. Required when `log_destination_type` is `cloudwatch`. Valid log types are `connectionlog`, `userlog`, and `useractivitylog`.
  logExports?: Array<string>;

  // The prefix applied to the log file names.
  s3KeyPrefix?: string;
}

export function redshift_ClusterLogging_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "logExports",
      "The collection of exported log types. Log types include the connection log, user log and user activity log. Required when `log_destination_type` is `cloudwatch`. Valid log types are `connectionlog`, `userlog`, and `useractivitylog`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3KeyPrefix",
      "The prefix applied to the log file names.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "The name of an existing S3 bucket where the log files are to be stored. Must be in the same region as the cluster and the cluster must have read bucket and put object permissions.\nFor more information on the permissions required for the bucket, please read the AWS [documentation](http://docs.aws.amazon.com/redshift/latest/mgmt/db-auditing.html#db-auditing-enable-logging)",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enable",
      "Enables logging information such as queries and connection attempts, for the specified Amazon Redshift cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logDestinationType",
      "The log destination type. An enum with possible values of `s3` and `cloudwatch`.",
      [],
      false,
      false,
    ),
  ];
}
