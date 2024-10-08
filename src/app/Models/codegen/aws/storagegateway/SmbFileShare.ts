import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  storagegateway_SmbFileShareCacheAttributes,
  storagegateway_SmbFileShareCacheAttributes_GetTypes,
} from '../types/storagegateway_SmbFileShareCacheAttributes';

export interface SmbFileShareArgs {
  // The Amazon Resource Name (ARN) of the CloudWatch Log Group used for the audit logs.
  auditDestinationArn?: string;

  // The authentication method that users use to access the file share. Defaults to `ActiveDirectory`. Valid values: `ActiveDirectory`, `GuestAccess`.
  authentication?: string;

  /*
Refresh cache information. see `cache_attributes` Block for more details.

--Note:-- If you have previously included a `cache_attributes` block in your configuration, removing it will not reset the refresh cache value and the previous value will remain. You must explicitly set a new value to change it.
*/
  cacheAttributes?: storagegateway_SmbFileShareCacheAttributes;

  // The notification policy of the file share. For more information see the [AWS Documentation](https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html#StorageGateway-CreateNFSFileShare-request-NotificationPolicy). Default value is `{}`.
  notificationPolicy?: string;

  // The files and folders on this share will only be visible to users with read access. Default value is `false`.
  accessBasedEnumeration?: boolean;

  // Amazon Resource Name (ARN) of the file gateway.
  gatewayArn?: string;

  // A list of users in the Active Directory that are not allowed to access the file share. Only valid if `authentication` is set to `ActiveDirectory`.
  invalidUserLists?: Array<string>;

  // Boolean value if `true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3. Defaults to `false`.
  kmsEncrypted?: boolean;

  // Access Control List permission for S3 objects. Defaults to `private`.
  objectAcl?: string;

  // Boolean to indicate Opportunistic lock (oplock) status. Defaults to `true`.
  oplocksEnabled?: boolean;

  // The region of the S3 buck used by the file share. Required when specifying a `vpc_endpoint_dns_name`.
  bucketRegion?: string;

  // Amazon Resource Name (ARN) for KMS key used for Amazon S3 server side encryption. This value can only be set when `kms_encrypted` is true.
  kmsKeyArn?: string;

  // Boolean to indicate write status of file share. File share does not accept writes if `true`. Defaults to `false`.
  readOnly?: boolean;

  // Set this value to `true` to enable ACL (access control list) on the SMB fileshare. Set it to `false` to map file and directory permissions to the POSIX permissions. This setting applies only to `ActiveDirectory` authentication type.
  smbAclEnabled?: boolean;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The DNS name of the VPC endpoint for S3 private link.
  vpcEndpointDnsName?: string;

  // A list of users in the Active Directory that have admin access to the file share. Only valid if `authentication` is set to `ActiveDirectory`.
  adminUserLists?: Array<string>;

  // The case of an object name in an Amazon S3 bucket. For `ClientSpecified`, the client determines the case sensitivity. For `CaseSensitive`, the gateway determines the case sensitivity. The default value is `ClientSpecified`.
  caseSensitivity?: string;

  // The default [storage class](https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html#StorageGateway-CreateNFSFileShare-request-DefaultStorageClass) for objects put into an Amazon S3 bucket by the file gateway. Defaults to `S3_STANDARD`.
  defaultStorageClass?: string;

  // The name of the file share. Must be set if an S3 prefix name is set in `location_arn`.
  fileShareName?: string;

  // Boolean value that enables guessing of the MIME type for uploaded objects based on file extensions. Defaults to `true`.
  guessMimeTypeEnabled?: boolean;

  // The ARN of the backed storage used for storing file data.
  locationArn?: string;

  // Boolean who pays the cost of the request and the data download from the Amazon S3 bucket. Set this value to `true` if you want the requester to pay instead of the bucket owner. Defaults to `false`.
  requesterPays?: boolean;

  // The ARN of the AWS Identity and Access Management (IAM) role that a file gateway assumes when it accesses the underlying storage.
  roleArn?: string;

  // A list of users in the Active Directory that are allowed to access the file share. If you need to specify an Active directory group, add '@' before the name of the group. It will be set on Allowed group in AWS console. Only valid if `authentication` is set to `ActiveDirectory`.
  validUserLists?: Array<string>;
}
export class SmbFileShare extends DS_Resource {
  // The default [storage class](https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html#StorageGateway-CreateNFSFileShare-request-DefaultStorageClass) for objects put into an Amazon S3 bucket by the file gateway. Defaults to `S3_STANDARD`.
  public defaultStorageClass?: string;

  // The ARN of the AWS Identity and Access Management (IAM) role that a file gateway assumes when it accesses the underlying storage.
  public roleArn?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A list of users in the Active Directory that are not allowed to access the file share. Only valid if `authentication` is set to `ActiveDirectory`.
  public invalidUserLists?: Array<string>;

  // Amazon Resource Name (ARN) for KMS key used for Amazon S3 server side encryption. This value can only be set when `kms_encrypted` is true.
  public kmsKeyArn?: string;

  // The region of the S3 buck used by the file share. Required when specifying a `vpc_endpoint_dns_name`.
  public bucketRegion?: string;

  /*
Refresh cache information. see `cache_attributes` Block for more details.

--Note:-- If you have previously included a `cache_attributes` block in your configuration, removing it will not reset the refresh cache value and the previous value will remain. You must explicitly set a new value to change it.
*/
  public cacheAttributes?: storagegateway_SmbFileShareCacheAttributes;

  // The notification policy of the file share. For more information see the [AWS Documentation](https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html#StorageGateway-CreateNFSFileShare-request-NotificationPolicy). Default value is `{}`.
  public notificationPolicy?: string;

  // The files and folders on this share will only be visible to users with read access. Default value is `false`.
  public accessBasedEnumeration?: boolean;

  // The Amazon Resource Name (ARN) of the CloudWatch Log Group used for the audit logs.
  public auditDestinationArn?: string;

  // Amazon Resource Name (ARN) of the file gateway.
  public gatewayArn?: string;

  // The ARN of the backed storage used for storing file data.
  public locationArn?: string;

  // File share path used by the NFS client to identify the mount point.
  public path?: string;

  // Set this value to `true` to enable ACL (access control list) on the SMB fileshare. Set it to `false` to map file and directory permissions to the POSIX permissions. This setting applies only to `ActiveDirectory` authentication type.
  public smbAclEnabled?: boolean;

  // Boolean value that enables guessing of the MIME type for uploaded objects based on file extensions. Defaults to `true`.
  public guessMimeTypeEnabled?: boolean;

  // A list of users in the Active Directory that have admin access to the file share. Only valid if `authentication` is set to `ActiveDirectory`.
  public adminUserLists?: Array<string>;

  // Amazon Resource Name (ARN) of the SMB File Share.
  public arn?: string;

  // The authentication method that users use to access the file share. Defaults to `ActiveDirectory`. Valid values: `ActiveDirectory`, `GuestAccess`.
  public authentication?: string;

  // Access Control List permission for S3 objects. Defaults to `private`.
  public objectAcl?: string;

  // Boolean to indicate write status of file share. File share does not accept writes if `true`. Defaults to `false`.
  public readOnly?: boolean;

  // Boolean who pays the cost of the request and the data download from the Amazon S3 bucket. Set this value to `true` if you want the requester to pay instead of the bucket owner. Defaults to `false`.
  public requesterPays?: boolean;

  // The case of an object name in an Amazon S3 bucket. For `ClientSpecified`, the client determines the case sensitivity. For `CaseSensitive`, the gateway determines the case sensitivity. The default value is `ClientSpecified`.
  public caseSensitivity?: string;

  // The name of the file share. Must be set if an S3 prefix name is set in `location_arn`.
  public fileShareName?: string;

  // ID of the SMB File Share.
  public fileshareId?: string;

  // Boolean value if `true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3. Defaults to `false`.
  public kmsEncrypted?: boolean;

  // Boolean to indicate Opportunistic lock (oplock) status. Defaults to `true`.
  public oplocksEnabled?: boolean;

  // A list of users in the Active Directory that are allowed to access the file share. If you need to specify an Active directory group, add '@' before the name of the group. It will be set on Allowed group in AWS console. Only valid if `authentication` is set to `ActiveDirectory`.
  public validUserLists?: Array<string>;

  // The DNS name of the VPC endpoint for S3 private link.
  public vpcEndpointDnsName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'auditDestinationArn',
        'The Amazon Resource Name (ARN) of the CloudWatch Log Group used for the audit logs.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'cacheAttributes',
        'Refresh cache information. see `cache_attributes` Block for more details.\n\n**Note:** If you have previously included a `cache_attributes` block in your configuration, removing it will not reset the refresh cache value and the previous value will remain. You must explicitly set a new value to change it.',
        () => storagegateway_SmbFileShareCacheAttributes_GetTypes(),
        false,
        false,
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
        InputType.Bool,
        'guessMimeTypeEnabled',
        'Boolean value that enables guessing of the MIME type for uploaded objects based on file extensions. Defaults to `true`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'locationArn',
        'The ARN of the backed storage used for storing file data.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'requesterPays',
        'Boolean who pays the cost of the request and the data download from the Amazon S3 bucket. Set this value to `true` if you want the requester to pay instead of the bucket owner. Defaults to `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'validUserLists',
        "A list of users in the Active Directory that are allowed to access the file share. If you need to specify an Active directory group, add '@' before the name of the group. It will be set on Allowed group in AWS console. Only valid if `authentication` is set to `ActiveDirectory`.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'objectAcl',
        'Access Control List permission for S3 objects. Defaults to `private`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'oplocksEnabled',
        'Boolean to indicate Opportunistic lock (oplock) status. Defaults to `true`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'smbAclEnabled',
        'Set this value to `true` to enable ACL (access control list) on the SMB fileshare. Set it to `false` to map file and directory permissions to the POSIX permissions. This setting applies only to `ActiveDirectory` authentication type.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'vpcEndpointDnsName',
        'The DNS name of the VPC endpoint for S3 private link.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'adminUserLists',
        'A list of users in the Active Directory that have admin access to the file share. Only valid if `authentication` is set to `ActiveDirectory`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'fileShareName',
        'The name of the file share. Must be set if an S3 prefix name is set in `location_arn`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'accessBasedEnumeration',
        'The files and folders on this share will only be visible to users with read access. Default value is `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'gatewayArn',
        'Amazon Resource Name (ARN) of the file gateway.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'invalidUserLists',
        'A list of users in the Active Directory that are not allowed to access the file share. Only valid if `authentication` is set to `ActiveDirectory`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'caseSensitivity',
        'The case of an object name in an Amazon S3 bucket. For `ClientSpecified`, the client determines the case sensitivity. For `CaseSensitive`, the gateway determines the case sensitivity. The default value is `ClientSpecified`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'roleArn',
        'The ARN of the AWS Identity and Access Management (IAM) role that a file gateway assumes when it accesses the underlying storage.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'authentication',
        'The authentication method that users use to access the file share. Defaults to `ActiveDirectory`. Valid values: `ActiveDirectory`, `GuestAccess`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'notificationPolicy',
        'The notification policy of the file share. For more information see the [AWS Documentation](https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html#StorageGateway-CreateNFSFileShare-request-NotificationPolicy). Default value is `{}`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'kmsEncrypted',
        'Boolean value if `true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3. Defaults to `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'bucketRegion',
        'The region of the S3 buck used by the file share. Required when specifying a `vpc_endpoint_dns_name`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'kmsKeyArn',
        'Amazon Resource Name (ARN) for KMS key used for Amazon S3 server side encryption. This value can only be set when `kms_encrypted` is true.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'readOnly',
        'Boolean to indicate write status of file share. File share does not accept writes if `true`. Defaults to `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'defaultStorageClass',
        'The default [storage class](https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html#StorageGateway-CreateNFSFileShare-request-DefaultStorageClass) for objects put into an Amazon S3 bucket by the file gateway. Defaults to `S3_STANDARD`.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
