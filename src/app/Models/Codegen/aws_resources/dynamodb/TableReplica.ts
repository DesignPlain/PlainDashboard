import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TableReplicaArgs {
  /*
ARN of the _main_ or global table which this resource will replicate.

Optional arguments:
*/
  globalTableArn?: string;

  // ARN of the CMK that should be used for the AWS KMS encryption. This argument should only be used if the key is different from the default KMS-managed DynamoDB key, `alias/aws/dynamodb`. --Note:-- This attribute will _not_ be populated with the ARN of _default_ keys.
  kmsKeyArn?: string;

  // Whether to enable Point In Time Recovery for the replica. Default is `false`.
  pointInTimeRecovery?: boolean;

  // Storage class of the table replica. Valid values are `STANDARD` and `STANDARD_INFREQUENT_ACCESS`. If not used, the table replica will use the same class as the global table.
  tableClassOverride?: string;

  // Map of tags to populate on the created table. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class TableReplica extends Resource {
  /*
ARN of the _main_ or global table which this resource will replicate.

Optional arguments:
*/
  public globalTableArn?: string;

  // ARN of the CMK that should be used for the AWS KMS encryption. This argument should only be used if the key is different from the default KMS-managed DynamoDB key, `alias/aws/dynamodb`. --Note:-- This attribute will _not_ be populated with the ARN of _default_ keys.
  public kmsKeyArn?: string;

  // Whether to enable Point In Time Recovery for the replica. Default is `false`.
  public pointInTimeRecovery?: boolean;

  // Storage class of the table replica. Valid values are `STANDARD` and `STANDARD_INFREQUENT_ACCESS`. If not used, the table replica will use the same class as the global table.
  public tableClassOverride?: string;

  // Map of tags to populate on the created table. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the table replica.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "tableClassOverride",
        "Storage class of the table replica. Valid values are `STANDARD` and `STANDARD_INFREQUENT_ACCESS`. If not used, the table replica will use the same class as the global table.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to populate on the created table. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "globalTableArn",
        "ARN of the _main_ or global table which this resource will replicate.\n\nOptional arguments:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyArn",
        "ARN of the CMK that should be used for the AWS KMS encryption. This argument should only be used if the key is different from the default KMS-managed DynamoDB key, `alias/aws/dynamodb`. **Note:** This attribute will _not_ be populated with the ARN of _default_ keys.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "pointInTimeRecovery",
        "Whether to enable Point In Time Recovery for the replica. Default is `false`.",
        [],
        false,
        false,
      ),
    ];
  }
}
