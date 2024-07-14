import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface filestore_InstanceFileSharesNfsExportOption {
  /*
Either READ_ONLY, for allowing only read requests on the exported directory,
or READ_WRITE, for allowing both read and write requests. The default is READ_WRITE.
Default value is `READ_WRITE`.
Possible values are: `READ_ONLY`, `READ_WRITE`.
*/
  accessMode?: string;

  /*
An integer representing the anonymous group id with a default value of 65534.
Anon_gid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings.
*/
  anonGid?: number;

  /*
An integer representing the anonymous user id with a default value of 65534.
Anon_uid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings.
*/
  anonUid?: number;

  /*
List of either IPv4 addresses, or ranges in CIDR notation which may mount the file share.
Overlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned.
The limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions.
*/
  ipRanges?: Array<string>;

  /*
Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH,
for not allowing root access. The default is NO_ROOT_SQUASH.
Default value is `NO_ROOT_SQUASH`.
Possible values are: `NO_ROOT_SQUASH`, `ROOT_SQUASH`.
*/
  squashMode?: string;
}

export function filestore_InstanceFileSharesNfsExportOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "anonUid",
      "An integer representing the anonymous user id with a default value of 65534.\nAnon_uid may only be set with squashMode of ROOT_SQUASH. An error will be returned\nif this field is specified for other squashMode settings.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ipRanges",
      "List of either IPv4 addresses, or ranges in CIDR notation which may mount the file share.\nOverlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned.\nThe limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "squashMode",
      "Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH,\nfor not allowing root access. The default is NO_ROOT_SQUASH.\nDefault value is `NO_ROOT_SQUASH`.\nPossible values are: `NO_ROOT_SQUASH`, `ROOT_SQUASH`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "accessMode",
      "Either READ_ONLY, for allowing only read requests on the exported directory,\nor READ_WRITE, for allowing both read and write requests. The default is READ_WRITE.\nDefault value is `READ_WRITE`.\nPossible values are: `READ_ONLY`, `READ_WRITE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "anonGid",
      "An integer representing the anonymous group id with a default value of 65534.\nAnon_gid may only be set with squashMode of ROOT_SQUASH. An error will be returned\nif this field is specified for other squashMode settings.",
      [],
      false,
      false,
    ),
  ];
}
