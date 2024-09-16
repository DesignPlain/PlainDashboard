import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface StoredIscsiVolumeArgs {
  // The unique identifier for the gateway local disk that is configured as a stored volume.
  diskId?: string;

  // The Amazon Resource Name (ARN) of the gateway.
  gatewayArn?: string;

  // Specify this field as `true` if you want to preserve the data on the local disk. Otherwise, specifying this field as false creates an empty volume.
  preserveExistingData?: boolean;

  // The snapshot ID of the snapshot to restore as the new stored volumeE.g., `snap-1122aabb`.
  snapshotId?: string;

  // `true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3. Optional.
  kmsEncrypted?: boolean;

  // The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when `kms_encrypted` is `true`.
  kmsKey?: string;

  // The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted.
  networkInterfaceId?: string;

  // Key-value mapping of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The name of the iSCSI target used by initiators to connect to the target and as a suffix for the target ARN. The target name must be unique across all volumes of a gateway.
  targetName?: string;
}
export class StoredIscsiVolume extends DS_Resource {
  // A value that indicates whether a storage volume is attached to, detached from, or is in the process of detaching from a gateway.
  public volumeAttachmentStatus?: string;

  // Volume ID, e.g., `vol-12345678`.
  public volumeId?: string;

  // The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted.
  public networkInterfaceId?: string;

  // Logical disk number.
  public lunNumber?: number;

  // The port used to communicate with iSCSI targets.
  public networkInterfacePort?: number;

  // indicates the state of the storage volume.
  public volumeStatus?: string;

  // indicates the type of the volume.
  public volumeType?: string;

  // Volume Amazon Resource Name (ARN), e.g., `arn:aws:storagegateway:us-east-1:123456789012:gateway/sgw-12345678/volume/vol-12345678`.
  public arn?: string;

  // The unique identifier for the gateway local disk that is configured as a stored volume.
  public diskId?: string;

  // The Amazon Resource Name (ARN) of the gateway.
  public gatewayArn?: string;

  // `true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3. Optional.
  public kmsEncrypted?: boolean;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Target Amazon Resource Name (ARN), e.g., `arn:aws:storagegateway:us-east-1:123456789012:gateway/sgw-12345678/target/iqn.1997-05.com.amazon:TargetName`.
  public targetArn?: string;

  // Whether mutual CHAP is enabled for the iSCSI target.
  public chapEnabled?: boolean;

  // Specify this field as `true` if you want to preserve the data on the local disk. Otherwise, specifying this field as false creates an empty volume.
  public preserveExistingData?: boolean;

  // The snapshot ID of the snapshot to restore as the new stored volumeE.g., `snap-1122aabb`.
  public snapshotId?: string;

  // Key-value mapping of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The name of the iSCSI target used by initiators to connect to the target and as a suffix for the target ARN. The target name must be unique across all volumes of a gateway.
  public targetName?: string;

  // The size of the data stored on the volume in bytes.
  public volumeSizeInBytes?: number;

  // The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when `kms_encrypted` is `true`.
  public kmsKey?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'snapshotId',
        'The snapshot ID of the snapshot to restore as the new stored volumeE.g., `snap-1122aabb`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value mapping of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'diskId',
        'The unique identifier for the gateway local disk that is configured as a stored volume.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'preserveExistingData',
        'Specify this field as `true` if you want to preserve the data on the local disk. Otherwise, specifying this field as false creates an empty volume.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'kmsEncrypted',
        '`true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3. Optional.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'kmsKey',
        'The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when `kms_encrypted` is `true`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'networkInterfaceId',
        'The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'targetName',
        'The name of the iSCSI target used by initiators to connect to the target and as a suffix for the target ARN. The target name must be unique across all volumes of a gateway.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'gatewayArn',
        'The Amazon Resource Name (ARN) of the gateway.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
