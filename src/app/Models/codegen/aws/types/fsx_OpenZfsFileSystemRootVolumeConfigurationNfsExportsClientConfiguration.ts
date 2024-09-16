import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExportsClientConfiguration {
  // A value that specifies who can mount the file system. You can provide a wildcard character (-), an IP address (0.0.0.0), or a CIDR address (192.0.2.0/24. By default, Amazon FSx uses the wildcard character when specifying the client.
  clients?: string;

  // The options to use when mounting the file system. Maximum of 20 items. See the [Linix NFS exports man page](https://linux.die.net/man/5/exports) for more information. `crossmount` and `sync` are used by default.
  options?: Array<string>;
}

export function fsx_OpenZfsFileSystemRootVolumeConfigurationNfsExportsClientConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'clients',
      'A value that specifies who can mount the file system. You can provide a wildcard character (*), an IP address (0.0.0.0), or a CIDR address (192.0.2.0/24. By default, Amazon FSx uses the wildcard character when specifying the client.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'options',
      'The options to use when mounting the file system. Maximum of 20 items. See the [Linix NFS exports man page](https://linux.die.net/man/5/exports) for more information. `crossmount` and `sync` are used by default.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
