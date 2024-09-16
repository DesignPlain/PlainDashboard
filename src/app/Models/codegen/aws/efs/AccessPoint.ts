import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  efs_AccessPointPosixUser,
  efs_AccessPointPosixUser_GetTypes,
} from '../types/efs_AccessPointPosixUser';
import {
  efs_AccessPointRootDirectory,
  efs_AccessPointRootDirectory_GetTypes,
} from '../types/efs_AccessPointRootDirectory';

export interface AccessPointArgs {
  // ID of the file system for which the access point is intended.
  fileSystemId?: string;

  // Operating system user and group applied to all file system requests made using the access point. Detailed below.
  posixUser?: efs_AccessPointPosixUser;

  // Directory on the Amazon EFS file system that the access point provides access to. Detailed below.
  rootDirectory?: efs_AccessPointRootDirectory;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  tags?: Map<string, string>;
}
export class AccessPoint extends DS_Resource {
  // ARN of the access point.
  public arn?: string;

  // ARN of the file system.
  public fileSystemArn?: string;

  // ID of the file system for which the access point is intended.
  public fileSystemId?: string;

  //
  public ownerId?: string;

  // Operating system user and group applied to all file system requests made using the access point. Detailed below.
  public posixUser?: efs_AccessPointPosixUser;

  // Directory on the Amazon EFS file system that the access point provides access to. Detailed below.
  public rootDirectory?: efs_AccessPointRootDirectory;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'fileSystemId',
        'ID of the file system for which the access point is intended.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'posixUser',
        'Operating system user and group applied to all file system requests made using the access point. Detailed below.',
        () => efs_AccessPointPosixUser_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'rootDirectory',
        'Directory on the Amazon EFS file system that the access point provides access to. Detailed below.',
        () => efs_AccessPointRootDirectory_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
