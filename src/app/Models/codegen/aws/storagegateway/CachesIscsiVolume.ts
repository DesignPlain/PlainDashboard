import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface CachesIscsiVolumeArgs {
  // The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted.
  networkInterfaceId?: string;

  // The ARN for an existing volume. Specifying this ARN makes the new volume into an exact copy of the specified existing volume's latest recovery point. The `volume_size_in_bytes` value for this new volume must be equal to or larger than the size of the existing volume, in bytes.
  sourceVolumeArn?: string;

  // The Amazon Resource Name (ARN) of the gateway.
  gatewayArn?: string;

  // Set to `true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3.
  kmsEncrypted?: boolean;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The name of the iSCSI target used by initiators to connect to the target and as a suffix for the target ARN. The target name must be unique across all volumes of a gateway.
  targetName?: string;

  // The size of the volume in bytes.
  volumeSizeInBytes?: number;

  // The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. Is required when `kms_encrypted` is set.
  kmsKey?: string;

  // The snapshot ID of the snapshot to restore as the new cached volumeE.g., `snap-1122aabb`.
  snapshotId?: string;
}
export class CachesIscsiVolume extends DS_Resource {
  // Volume ID, e.g., `vol-12345678`.
  public volumeId?: string;

  // Volume Amazon Resource Name (ARN), e.g., `arn:aws:storagegateway:us-east-1:123456789012:gateway/sgw-12345678/volume/vol-12345678`.
  public arn?: string;

  // Set to `true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3.
  public kmsEncrypted?: boolean;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The ARN for an existing volume. Specifying this ARN makes the new volume into an exact copy of the specified existing volume's latest recovery point. The `volume_size_in_bytes` value for this new volume must be equal to or larger than the size of the existing volume, in bytes.
  public sourceVolumeArn?: string;

  // Target Amazon Resource Name (ARN), e.g., `arn:aws:storagegateway:us-east-1:123456789012:gateway/sgw-12345678/target/iqn.1997-05.com.amazon:TargetName`.
  public targetArn?: string;

  // The name of the iSCSI target used by initiators to connect to the target and as a suffix for the target ARN. The target name must be unique across all volumes of a gateway.
  public targetName?: string;

  // The size of the volume in bytes.
  public volumeSizeInBytes?: number;

  // The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. Is required when `kms_encrypted` is set.
  public kmsKey?: string;

  // The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted.
  public networkInterfaceId?: string;

  // The port used to communicate with iSCSI targets.
  public networkInterfacePort?: number;

  // The snapshot ID of the snapshot to restore as the new cached volumeE.g., `snap-1122aabb`.
  public snapshotId?: string;

  // Volume Amazon Resource Name (ARN), e.g., `arn:aws:storagegateway:us-east-1:123456789012:gateway/sgw-12345678/volume/vol-12345678`.
  public volumeArn?: string;

  // Whether mutual CHAP is enabled for the iSCSI target.
  public chapEnabled?: boolean;

  // The Amazon Resource Name (ARN) of the gateway.
  public gatewayArn?: string;

  // Logical disk number.
  public lunNumber?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        'sourceVolumeArn',
        "The ARN for an existing volume. Specifying this ARN makes the new volume into an exact copy of the specified existing volume's latest recovery point. The `volume_size_in_bytes` value for this new volume must be equal to or larger than the size of the existing volume, in bytes.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'kmsEncrypted',
        'Set to `true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3.',
        () => [],
        false,
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
        'snapshotId',
        'The snapshot ID of the snapshot to restore as the new cached volumeE.g., `snap-1122aabb`.',
        () => [],
        false,
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
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'volumeSizeInBytes',
        'The size of the volume in bytes.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'kmsKey',
        'The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. Is required when `kms_encrypted` is set.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
