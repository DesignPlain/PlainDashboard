import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sql_getDatabaseInstancesInstanceSettingSqlServerAuditConfig {
  // How often to upload generated audit files. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  uploadInterval?: string;

  // The name of the destination bucket (e.g., gs://mybucket).
  bucket?: string;

  // How long to keep generated audit files. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"..
  retentionInterval?: string;
}

export function sql_getDatabaseInstancesInstanceSettingSqlServerAuditConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'uploadInterval',
      'How often to upload generated audit files. A duration in seconds with up to nine fractional digits, terminated by \'s\'. Example: "3.5s".',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'bucket',
      'The name of the destination bucket (e.g., gs://mybucket).',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'retentionInterval',
      'How long to keep generated audit files. A duration in seconds with up to nine fractional digits, terminated by \'s\'. Example: "3.5s"..',
      () => [],
      true,
      false,
    ),
  ];
}
