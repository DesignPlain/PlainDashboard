import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  fsx_FileCacheDataRepositoryAssociation,
  fsx_FileCacheDataRepositoryAssociation_GetTypes,
} from "../types/fsx_FileCacheDataRepositoryAssociation";
import {
  fsx_FileCacheLustreConfiguration,
  fsx_FileCacheLustreConfiguration_GetTypes,
} from "../types/fsx_FileCacheLustreConfiguration";

export interface FileCacheArgs {
  /*
See the `data_repository_association` configuration block. Max of 8.
A list of up to 8 configurations for data repository associations (DRAs) to be created during the cache creation. The DRAs link the cache to either an Amazon S3 data repository or a Network File System (NFS) data repository that supports the NFSv3 protocol. The DRA configurations must meet the following requirements: 1) All configurations on the list must be of the same data repository type, either all S3 or all NFS. A cache can't link to different data repository types at the same time. 2) An NFS DRA must link to an NFS file system that supports the NFSv3 protocol. DRA automatic import and automatic export is not supported.
*/
  dataRepositoryAssociations?: Array<fsx_FileCacheDataRepositoryAssociation>;

  // The version for the type of cache that you're creating. The only supported value is `2.12`.
  fileCacheTypeVersion?: string;

  // The storage capacity of the cache in gibibytes (GiB). Valid values are `1200` GiB, `2400` GiB, and increments of `2400` GiB.
  storageCapacity?: number;

  /*
A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID.

The following arguments are optional:
*/
  subnetIds?: Array<string>;

  // A boolean flag indicating whether tags for the cache should be copied to data repository associations. This value defaults to false.
  copyTagsToDataRepositoryAssociations?: boolean;

  // The type of cache that you're creating. The only supported value is `LUSTRE`.
  fileCacheType?: string;

  // Specifies the ID of the AWS Key Management Service (AWS KMS) key to use for encrypting data on an Amazon File Cache. If a KmsKeyId isn't specified, the Amazon FSx-managed AWS KMS key for your account is used.
  kmsKeyId?: string;

  // See the `lustre_configuration` block. Required when `file_cache_type` is `LUSTRE`.
  lustreConfigurations?: Array<fsx_FileCacheLustreConfiguration>;

  // A list of IDs specifying the security groups to apply to all network interfaces created for Amazon File Cache access.
  securityGroupIds?: Array<string>;

  // A map of tags to assign to the file cache. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class FileCache extends DS_Resource {
  // The type of cache that you're creating. The only supported value is `LUSTRE`.
  public fileCacheType?: string;

  // See the `lustre_configuration` block. Required when `file_cache_type` is `LUSTRE`.
  public lustreConfigurations?: Array<fsx_FileCacheLustreConfiguration>;

  // A list of network interface IDs.
  public networkInterfaceIds?: Array<string>;

  // The ID of your virtual private cloud (VPC).
  public vpcId?: string;

  // The Amazon Resource Name (ARN) for the resource.
  public arn?: string;

  // A list of IDs of data repository associations that are associated with this cache.
  public dataRepositoryAssociationIds?: Array<string>;

  /*
See the `data_repository_association` configuration block. Max of 8.
A list of up to 8 configurations for data repository associations (DRAs) to be created during the cache creation. The DRAs link the cache to either an Amazon S3 data repository or a Network File System (NFS) data repository that supports the NFSv3 protocol. The DRA configurations must meet the following requirements: 1) All configurations on the list must be of the same data repository type, either all S3 or all NFS. A cache can't link to different data repository types at the same time. 2) An NFS DRA must link to an NFS file system that supports the NFSv3 protocol. DRA automatic import and automatic export is not supported.
*/
  public dataRepositoryAssociations?: Array<fsx_FileCacheDataRepositoryAssociation>;

  // The Domain Name System (DNS) name for the cache.
  public dnsName?: string;

  // A list of IDs specifying the security groups to apply to all network interfaces created for Amazon File Cache access.
  public securityGroupIds?: Array<string>;

  //
  public tagsAll?: Map<string, string>;

  // The version for the type of cache that you're creating. The only supported value is `2.12`.
  public fileCacheTypeVersion?: string;

  //
  public ownerId?: string;

  // The storage capacity of the cache in gibibytes (GiB). Valid values are `1200` GiB, `2400` GiB, and increments of `2400` GiB.
  public storageCapacity?: number;

  // A map of tags to assign to the file cache. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A boolean flag indicating whether tags for the cache should be copied to data repository associations. This value defaults to false.
  public copyTagsToDataRepositoryAssociations?: boolean;

  // The system-generated, unique ID of the cache.
  public fileCacheId?: string;

  // Specifies the ID of the AWS Key Management Service (AWS KMS) key to use for encrypting data on an Amazon File Cache. If a KmsKeyId isn't specified, the Amazon FSx-managed AWS KMS key for your account is used.
  public kmsKeyId?: string;

  /*
A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID.

The following arguments are optional:
*/
  public subnetIds?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "dataRepositoryAssociations",
        "See the `data_repository_association` configuration block. Max of 8.\nA list of up to 8 configurations for data repository associations (DRAs) to be created during the cache creation. The DRAs link the cache to either an Amazon S3 data repository or a Network File System (NFS) data repository that supports the NFSv3 protocol. The DRA configurations must meet the following requirements: 1) All configurations on the list must be of the same data repository type, either all S3 or all NFS. A cache can't link to different data repository types at the same time. 2) An NFS DRA must link to an NFS file system that supports the NFSv3 protocol. DRA automatic import and automatic export is not supported.",
        () => fsx_FileCacheDataRepositoryAssociation_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID.\n\nThe following arguments are optional:",
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "Specifies the ID of the AWS Key Management Service (AWS KMS) key to use for encrypting data on an Amazon File Cache. If a KmsKeyId isn't specified, the Amazon FSx-managed AWS KMS key for your account is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "lustreConfigurations",
        "See the `lustre_configuration` block. Required when `file_cache_type` is `LUSTRE`.",
        () => fsx_FileCacheLustreConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupIds",
        "A list of IDs specifying the security groups to apply to all network interfaces created for Amazon File Cache access.",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the file cache. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "fileCacheTypeVersion",
        "The version for the type of cache that you're creating. The only supported value is `2.12`.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "storageCapacity",
        "The storage capacity of the cache in gibibytes (GiB). Valid values are `1200` GiB, `2400` GiB, and increments of `2400` GiB.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "copyTagsToDataRepositoryAssociations",
        "A boolean flag indicating whether tags for the cache should be copied to data repository associations. This value defaults to false.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "fileCacheType",
        "The type of cache that you're creating. The only supported value is `LUSTRE`.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
