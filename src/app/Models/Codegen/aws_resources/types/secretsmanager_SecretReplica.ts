import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface secretsmanager_SecretReplica {
  // Status can be `InProgress`, `Failed`, or `InSync`.
  status?: string;

  // Message such as `Replication succeeded` or `Secret with this name already exists in this region`.
  statusMessage?: string;

  // ARN, Key ID, or Alias of the AWS KMS key within the region secret is replicated to. If one is not specified, then Secrets Manager defaults to using the AWS account's default KMS key (`aws/secretsmanager`) in the region or creates one for use if non-existent.
  kmsKeyId?: string;

  // Date that you last accessed the secret in the Region.
  lastAccessedDate?: string;

  // Region for replicating the secret.
  region?: string;
}

export function secretsmanager_SecretReplica_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      "Status can be `InProgress`, `Failed`, or `InSync`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "statusMessage",
      "Message such as `Replication succeeded` or `Secret with this name already exists in this region`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "ARN, Key ID, or Alias of the AWS KMS key within the region secret is replicated to. If one is not specified, then Secrets Manager defaults to using the AWS account's default KMS key (`aws/secretsmanager`) in the region or creates one for use if non-existent.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastAccessedDate",
      "Date that you last accessed the secret in the Region.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "Region for replicating the secret.",
      [],
      true,
      false,
    ),
  ];
}
