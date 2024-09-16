import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface SnapshotArgs {
  // The name of the snapshot.
  snapshotName?: string;

  // The namespace to create a snapshot for.
  namespaceName?: string;

  // How long to retain the created snapshot. Default value is `-1`.
  retentionPeriod?: number;
}
export class Snapshot extends DS_Resource {
  // The namespace to create a snapshot for.
  public namespaceName?: string;

  // How long to retain the created snapshot. Default value is `-1`.
  public retentionPeriod?: number;

  // The username of the database within a snapshot.
  public adminUsername?: string;

  // The Amazon Resource Name (ARN) of the snapshot.
  public arn?: string;

  // The unique identifier of the KMS key used to encrypt the snapshot.
  public kmsKeyId?: string;

  // The Amazon Resource Name (ARN) of the namespace the snapshot was created from.
  public namespaceArn?: string;

  // The owner Amazon Web Services; account of the snapshot.
  public ownerAccount?: string;

  // The name of the snapshot.
  public snapshotName?: string;

  // All of the Amazon Web Services accounts that have access to restore a snapshot to a provisioned cluster.
  public accountsWithProvisionedRestoreAccesses?: Array<string>;

  // All of the Amazon Web Services accounts that have access to restore a snapshot to a namespace.
  public accountsWithRestoreAccesses?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'namespaceName',
        'The namespace to create a snapshot for.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'retentionPeriod',
        'How long to retain the created snapshot. Default value is `-1`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'snapshotName',
        'The name of the snapshot.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
