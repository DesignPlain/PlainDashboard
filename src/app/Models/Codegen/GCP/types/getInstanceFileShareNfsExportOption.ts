export interface getInstanceFileShareNfsExportOption {
  /*
Either READ_ONLY, for allowing only read requests on the exported directory,
or READ_WRITE, for allowing both read and write requests. The default is READ_WRITE. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]
*/
  AccessMode?: string;

  /*
An integer representing the anonymous group id with a default value of 65534.
Anon_gid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings.
*/
  AnonGid?: number;

  /*
An integer representing the anonymous user id with a default value of 65534.
Anon_uid may only be set with squashMode of ROOT_SQUASH. An error will be returned
if this field is specified for other squashMode settings.
*/
  AnonUid?: number;

  /*
List of either IPv4 addresses, or ranges in CIDR notation which may mount the file share.
Overlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned.
The limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions.
*/
  IpRanges?: Array<string>;

  /*
Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH,
for not allowing root access. The default is NO_ROOT_SQUASH. Default value: "NO_ROOT_SQUASH" Possible values: ["NO_ROOT_SQUASH", "ROOT_SQUASH"]
*/
  SquashMode?: string;
}
