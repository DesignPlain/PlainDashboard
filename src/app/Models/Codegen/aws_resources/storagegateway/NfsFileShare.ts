import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  storagegateway_NfsFileShareNfsFileShareDefaults,
  storagegateway_NfsFileShareNfsFileShareDefaults_GetTypes,
} from "../types/storagegateway_NfsFileShareNfsFileShareDefaults";
import {
  storagegateway_NfsFileShareCacheAttributes,
  storagegateway_NfsFileShareCacheAttributes_GetTypes,
} from "../types/storagegateway_NfsFileShareCacheAttributes";

export interface NfsFileShareArgs {
  // Boolean value if `true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3. Defaults to `false`.
  kmsEncrypted?: boolean;

  // The ARN of the AWS Identity and Access Management (IAM) role that a file gateway assumes when it accesses the underlying storage.
  roleArn?: string;

  // Boolean value that enables guessing of the MIME type for uploaded objects based on file extensions. Defaults to `true`.
  guessMimeTypeEnabled?: boolean;

  // The ARN of the backed storage used for storing file data.
  locationArn?: string;

  // Nested argument with file share default values. More information below. see NFS File Share Defaults for more details.
  nfsFileShareDefaults?: storagegateway_NfsFileShareNfsFileShareDefaults;

  // The Amazon Resource Name (ARN) of the storage used for audit logs.
  auditDestinationArn?: string;

  // Refresh cache information. see Cache Attributes for more details.
  cacheAttributes?: storagegateway_NfsFileShareCacheAttributes;

  // The list of clients that are allowed to access the file gateway. The list must contain either valid IP addresses or valid CIDR blocks. Set to `["0.0.0.0/0"]` to not limit access. Minimum 1 item. Maximum 100 items.
  clientLists?: Array<string>;

  // Amazon Resource Name (ARN) of the file gateway.
  gatewayArn?: string;

  // The notification policy of the file share. For more information see the [AWS Documentation](https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html#StorageGateway-CreateNFSFileShare-request-NotificationPolicy). Default value is `{}`.
  notificationPolicy?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The DNS name of the VPC endpoint for S3 PrivateLink.
  vpcEndpointDnsName?: string;

  // The region of the S3 bucket used by the file share. Required when specifying `vpc_endpoint_dns_name`.
  bucketRegion?: string;

  // The default [storage class](https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html#StorageGateway-CreateNFSFileShare-request-DefaultStorageClass) for objects put into an Amazon S3 bucket by the file gateway. Defaults to `S3_STANDARD`.
  defaultStorageClass?: string;

  // The name of the file share. Must be set if an S3 prefix name is set in `location_arn`.
  fileShareName?: string;

  // Amazon Resource Name (ARN) for KMS key used for Amazon S3 server side encryption. This value can only be set when `kms_encrypted` is true.
  kmsKeyArn?: string;

  // Access Control List permission for S3 objects. Defaults to `private`.
  objectAcl?: string;

  // Boolean to indicate write status of file share. File share does not accept writes if `true`. Defaults to `false`.
  readOnly?: boolean;

  // Boolean who pays the cost of the request and the data download from the Amazon S3 bucket. Set this value to `true` if you want the requester to pay instead of the bucket owner. Defaults to `false`.
  requesterPays?: boolean;

  // Maps a user to anonymous user. Defaults to `RootSquash`. Valid values: `RootSquash` (only root is mapped to anonymous user), `NoSquash` (no one is mapped to anonymous user), `AllSquash` (everyone is mapped to anonymous user)
  squash?: string;
}
export class NfsFileShare extends Resource {
  // File share path used by the NFS client to identify the mount point.
  public path?: string;

  // Boolean who pays the cost of the request and the data download from the Amazon S3 bucket. Set this value to `true` if you want the requester to pay instead of the bucket owner. Defaults to `false`.
  public requesterPays?: boolean;

  // The ARN of the AWS Identity and Access Management (IAM) role that a file gateway assumes when it accesses the underlying storage.
  public roleArn?: string;

  // Maps a user to anonymous user. Defaults to `RootSquash`. Valid values: `RootSquash` (only root is mapped to anonymous user), `NoSquash` (no one is mapped to anonymous user), `AllSquash` (everyone is mapped to anonymous user)
  public squash?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the storage used for audit logs.
  public auditDestinationArn?: string;

  // Refresh cache information. see Cache Attributes for more details.
  public cacheAttributes?: storagegateway_NfsFileShareCacheAttributes;

  // Amazon Resource Name (ARN) for KMS key used for Amazon S3 server side encryption. This value can only be set when `kms_encrypted` is true.
  public kmsKeyArn?: string;

  // The notification policy of the file share. For more information see the [AWS Documentation](https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html#StorageGateway-CreateNFSFileShare-request-NotificationPolicy). Default value is `{}`.
  public notificationPolicy?: string;

  // Boolean to indicate write status of file share. File share does not accept writes if `true`. Defaults to `false`.
  public readOnly?: boolean;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // ID of the NFS File Share.
  public fileshareId?: string;

  // Amazon Resource Name (ARN) of the file gateway.
  public gatewayArn?: string;

  // Boolean value that enables guessing of the MIME type for uploaded objects based on file extensions. Defaults to `true`.
  public guessMimeTypeEnabled?: boolean;

  // Boolean value if `true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3. Defaults to `false`.
  public kmsEncrypted?: boolean;

  // Nested argument with file share default values. More information below. see NFS File Share Defaults for more details.
  public nfsFileShareDefaults?: storagegateway_NfsFileShareNfsFileShareDefaults;

  // Access Control List permission for S3 objects. Defaults to `private`.
  public objectAcl?: string;

  // The DNS name of the VPC endpoint for S3 PrivateLink.
  public vpcEndpointDnsName?: string;

  // The region of the S3 bucket used by the file share. Required when specifying `vpc_endpoint_dns_name`.
  public bucketRegion?: string;

  // The default [storage class](https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html#StorageGateway-CreateNFSFileShare-request-DefaultStorageClass) for objects put into an Amazon S3 bucket by the file gateway. Defaults to `S3_STANDARD`.
  public defaultStorageClass?: string;

  // The name of the file share. Must be set if an S3 prefix name is set in `location_arn`.
  public fileShareName?: string;

  // Amazon Resource Name (ARN) of the NFS File Share.
  public arn?: string;

  // The list of clients that are allowed to access the file gateway. The list must contain either valid IP addresses or valid CIDR blocks. Set to `["0.0.0.0/0"]` to not limit access. Minimum 1 item. Maximum 100 items.
  public clientLists?: Array<string>;

  // The ARN of the backed storage used for storing file data.
  public locationArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "clientLists",
        'The list of clients that are allowed to access the file gateway. The list must contain either valid IP addresses or valid CIDR blocks. Set to `["0.0.0.0/0"]` to not limit access. Minimum 1 item. Maximum 100 items.',
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultStorageClass",
        "The default [storage class](https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html#StorageGateway-CreateNFSFileShare-request-DefaultStorageClass) for objects put into an Amazon S3 bucket by the file gateway. Defaults to `S3_STANDARD`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "requesterPays",
        "Boolean who pays the cost of the request and the data download from the Amazon S3 bucket. Set this value to `true` if you want the requester to pay instead of the bucket owner. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucketRegion",
        "The region of the S3 bucket used by the file share. Required when specifying `vpc_endpoint_dns_name`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "squash",
        "Maps a user to anonymous user. Defaults to `RootSquash`. Valid values: `RootSquash` (only root is mapped to anonymous user), `NoSquash` (no one is mapped to anonymous user), `AllSquash` (everyone is mapped to anonymous user)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "locationArn",
        "The ARN of the backed storage used for storing file data.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cacheAttributes",
        "Refresh cache information. see Cache Attributes for more details.",
        storagegateway_NfsFileShareCacheAttributes_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcEndpointDnsName",
        "The DNS name of the VPC endpoint for S3 PrivateLink.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "gatewayArn",
        "Amazon Resource Name (ARN) of the file gateway.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "notificationPolicy",
        "The notification policy of the file share. For more information see the [AWS Documentation](https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html#StorageGateway-CreateNFSFileShare-request-NotificationPolicy). Default value is `{}`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "objectAcl",
        "Access Control List permission for S3 objects. Defaults to `private`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "readOnly",
        "Boolean to indicate write status of file share. File share does not accept writes if `true`. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "kmsEncrypted",
        "Boolean value if `true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "nfsFileShareDefaults",
        "Nested argument with file share default values. More information below. see NFS File Share Defaults for more details.",
        storagegateway_NfsFileShareNfsFileShareDefaults_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "auditDestinationArn",
        "The Amazon Resource Name (ARN) of the storage used for audit logs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyArn",
        "Amazon Resource Name (ARN) for KMS key used for Amazon S3 server side encryption. This value can only be set when `kms_encrypted` is true.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The ARN of the AWS Identity and Access Management (IAM) role that a file gateway assumes when it accesses the underlying storage.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "guessMimeTypeEnabled",
        "Boolean value that enables guessing of the MIME type for uploaded objects based on file extensions. Defaults to `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "fileShareName",
        "The name of the file share. Must be set if an S3 prefix name is set in `location_arn`.",
        [],
        false,
        false,
      ),
    ];
  }
}
