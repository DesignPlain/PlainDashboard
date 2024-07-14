import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  fsx_FileCacheDataRepositoryAssociationNf,
  fsx_FileCacheDataRepositoryAssociationNf_GetTypes,
} from "./fsx_FileCacheDataRepositoryAssociationNf";

export interface fsx_FileCacheDataRepositoryAssociation {
  //
  associationId?: string;

  // The system-generated, unique ID of the cache.
  fileCacheId?: string;

  //
  fileSystemPath?: string;

  //
  importedFileChunkSize?: number;

  // (Optional) See the `nfs` configuration block.
  nfs?: Array<fsx_FileCacheDataRepositoryAssociationNf>;

  // The path to the S3 or NFS data repository that links to the cache.
  dataRepositoryPath?: string;

  // A list of NFS Exports that will be linked with this data repository association. The Export paths are in the format /exportpath1. To use this parameter, you must configure DataRepositoryPath as the domain name of the NFS file system. The NFS file system domain name in effect is the root of the subdirectories. Note that DataRepositorySubdirectories is not supported for S3 data repositories. Max of 500.
  dataRepositorySubdirectories?: Array<string>;

  // A path on the cache that points to a high-level directory (such as /ns1/) or subdirectory (such as /ns1/subdir/) that will be mapped 1-1 with DataRepositoryPath. The leading forward slash in the name is required. Two data repository associations cannot have overlapping cache paths. For example, if a data repository is associated with cache path /ns1/, then you cannot link another data repository with cache path /ns1/ns2. This path specifies where in your cache files will be exported from. This cache directory can be linked to only one data repository, and no data repository other can be linked to the directory. Note: The cache path can only be set to root (/) on an NFS DRA when DataRepositorySubdirectories is specified. If you specify root (/) as the cache path, you can create only one DRA on the cache. The cache path cannot be set to root (/) for an S3 DRA.
  fileCachePath?: string;

  //
  fileSystemId?: string;

  //
  resourceArn?: string;

  // A map of tags to assign to the file cache. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}

export function fsx_FileCacheDataRepositoryAssociation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "fileSystemPath",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dataRepositoryPath",
      "The path to the S3 or NFS data repository that links to the cache.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dataRepositorySubdirectories",
      "A list of NFS Exports that will be linked with this data repository association. The Export paths are in the format /exportpath1. To use this parameter, you must configure DataRepositoryPath as the domain name of the NFS file system. The NFS file system domain name in effect is the root of the subdirectories. Note that DataRepositorySubdirectories is not supported for S3 data repositories. Max of 500.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "fileSystemId", "", [], false, false),
    new DynamicUIProps(InputType.String, "resourceArn", "", [], false, false),
    new DynamicUIProps(
      InputType.Map,
      "tags",
      "A map of tags to assign to the file cache. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "associationId", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "fileCacheId",
      "The system-generated, unique ID of the cache.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fileCachePath",
      "A path on the cache that points to a high-level directory (such as /ns1/) or subdirectory (such as /ns1/subdir/) that will be mapped 1-1 with DataRepositoryPath. The leading forward slash in the name is required. Two data repository associations cannot have overlapping cache paths. For example, if a data repository is associated with cache path /ns1/, then you cannot link another data repository with cache path /ns1/ns2. This path specifies where in your cache files will be exported from. This cache directory can be linked to only one data repository, and no data repository other can be linked to the directory. Note: The cache path can only be set to root (/) on an NFS DRA when DataRepositorySubdirectories is specified. If you specify root (/) as the cache path, you can create only one DRA on the cache. The cache path cannot be set to root (/) for an S3 DRA.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "importedFileChunkSize",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nfs",
      "(Optional) See the `nfs` configuration block.",
      fsx_FileCacheDataRepositoryAssociationNf_GetTypes(),
      false,
      false,
    ),
  ];
}
