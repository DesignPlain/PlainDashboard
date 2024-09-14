import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  rds_IntegrationTimeouts,
  rds_IntegrationTimeouts_GetTypes,
} from "../types/rds_IntegrationTimeouts";

export interface IntegrationArgs {
  // KMS key identifier for the key to use to encrypt the integration. If you don't specify an encryption key, RDS uses a default AWS owned key. If you use the default AWS owned key, you should ignore `kms_key_id` parameter by using `lifecycle` parameter to avoid unintended change after the first creation.
  kmsKeyId?: string;

  // ARN of the database to use as the source for replication.
  sourceArn?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
ARN of the Redshift data warehouse to use as the target for replication.

The following arguments are optional:
*/
  targetArn?: string;

  //
  timeouts?: rds_IntegrationTimeouts;

  // Set of non-secret key–value pairs that contains additional contextual information about the data. For more information, see the [User Guide](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context). You can only include this parameter if you specify the `kms_key_id` parameter.
  additionalEncryptionContext?: Map<string, string>;

  // Name of the integration.
  integrationName?: string;
}
export class Integration extends DS_Resource {
  // ARN of the database to use as the source for replication.
  public sourceArn?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
ARN of the Redshift data warehouse to use as the target for replication.

The following arguments are optional:
*/
  public targetArn?: string;

  //
  public timeouts?: rds_IntegrationTimeouts;

  // Set of non-secret key–value pairs that contains additional contextual information about the data. For more information, see the [User Guide](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context). You can only include this parameter if you specify the `kms_key_id` parameter.
  public additionalEncryptionContext?: Map<string, string>;

  // ARN of the Integration.
  public arn?: string;

  // Name of the integration.
  public integrationName?: string;

  // KMS key identifier for the key to use to encrypt the integration. If you don't specify an encryption key, RDS uses a default AWS owned key. If you use the default AWS owned key, you should ignore `kms_key_id` parameter by using `lifecycle` parameter to avoid unintended change after the first creation.
  public kmsKeyId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => rds_IntegrationTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "additionalEncryptionContext",
        "Set of non-secret key–value pairs that contains additional contextual information about the data. For more information, see the [User Guide](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context). You can only include this parameter if you specify the `kms_key_id` parameter.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "integrationName",
        "Name of the integration.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "KMS key identifier for the key to use to encrypt the integration. If you don't specify an encryption key, RDS uses a default AWS owned key. If you use the default AWS owned key, you should ignore `kms_key_id` parameter by using `lifecycle` parameter to avoid unintended change after the first creation.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceArn",
        "ARN of the database to use as the source for replication.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetArn",
        "ARN of the Redshift data warehouse to use as the target for replication.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
    ];
  }
}
