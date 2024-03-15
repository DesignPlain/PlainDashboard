export interface DatabaseInstanceClone {
  // The name of the allocated ip range for the private ip CloudSQL instance. For example: "google-managed-services-default". If set, the cloned instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression a-z?.
  AllocatedIpRange?: string;

  // (SQL Server only, use with `point_in_time`) Clone only the specified databases from the source instance. Clone all databases if empty.
  DatabaseNames?: Array<string>;

  /*
The timestamp of the point in time that should be restored.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  PointInTime?: string;

  // (Point-in-time recovery for PostgreSQL only) Clone to an instance in the specified zone. If no zone is specified, clone to the same zone as the source instance. [clone-unavailable-instance](https://cloud.google.com/sql/docs/postgres/clone-instance#clone-unavailable-instance)
  PreferredZone?: string;

  // Name of the source instance which will be cloned.
  SourceInstanceName?: string;
}
