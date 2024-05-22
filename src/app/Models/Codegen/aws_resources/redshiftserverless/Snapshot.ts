import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SnapshotArgs {
  // The namespace to create a snapshot for.
  namespaceName?: string;

  // How long to retain the created snapshot. Default value is `-1`.
  retentionPeriod?: number;

  // The name of the snapshot.
  snapshotName?: string;
}
export class Snapshot extends Resource {
  // The namespace to create a snapshot for.
  public namespaceName?: string;

  // The name of the snapshot.
  public snapshotName?: string;

  // The Amazon Resource Name (ARN) of the snapshot.
  public arn?: string;

  // The Amazon Resource Name (ARN) of the namespace the snapshot was created from.
  public namespaceArn?: string;

  // The username of the database within a snapshot.
  public adminUsername?: string;

  // The unique identifier of the KMS key used to encrypt the snapshot.
  public kmsKeyId?: string;

  // The owner Amazon Web Services; account of the snapshot.
  public ownerAccount?: string;

  // How long to retain the created snapshot. Default value is `-1`.
  public retentionPeriod?: number;

  // All of the Amazon Web Services accounts that have access to restore a snapshot to a provisioned cluster.
  public accountsWithProvisionedRestoreAccesses?: Array<string>;

  // All of the Amazon Web Services accounts that have access to restore a snapshot to a namespace.
  public accountsWithRestoreAccesses?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "snapshotName",
        "The name of the snapshot.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namespaceName",
        "The namespace to create a snapshot for.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "retentionPeriod",
        "How long to retain the created snapshot. Default value is `-1`.",
        [],
        false,
        false,
      ),
    ];
  }
}
