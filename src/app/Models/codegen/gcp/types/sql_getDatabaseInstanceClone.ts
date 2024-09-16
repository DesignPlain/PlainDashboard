import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sql_getDatabaseInstanceClone {
  // The name of the instance from which the point in time should be restored.
  sourceInstanceName?: string;

  // The name of the allocated ip range for the private ip CloudSQL instance. For example: "google-managed-services-default". If set, the cloned instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression a-z?.
  allocatedIpRange?: string;

  // (SQL Server only, use with point_in_time) clone only the specified databases from the source instance. Clone all databases if empty.
  databaseNames?: Array<string>;

  // The timestamp of the point in time that should be restored.
  pointInTime?: string;

  // (Point-in-time recovery for PostgreSQL only) Clone to an instance in the specified zone. If no zone is specified, clone to the same zone as the source instance.
  preferredZone?: string;
}

export function sql_getDatabaseInstanceClone_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'sourceInstanceName',
      'The name of the instance from which the point in time should be restored.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'allocatedIpRange',
      'The name of the allocated ip range for the private ip CloudSQL instance. For example: "google-managed-services-default". If set, the cloned instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression a-z?.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'databaseNames',
      '(SQL Server only, use with point_in_time) clone only the specified databases from the source instance. Clone all databases if empty.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'pointInTime',
      'The timestamp of the point in time that should be restored.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'preferredZone',
      '(Point-in-time recovery for PostgreSQL only) Clone to an instance in the specified zone. If no zone is specified, clone to the same zone as the source instance.',
      () => [],
      true,
      false,
    ),
  ];
}
