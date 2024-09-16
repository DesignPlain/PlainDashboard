import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataproc_MetastoreServiceHiveMetastoreConfigKerberosConfigKeytab {
  /*
The relative resource name of a Secret Manager secret version, in the following form:
"projects/{projectNumber}/secrets/{secret_id}/versions/{version_id}".
*/
  cloudSecret?: string;
}

export function dataproc_MetastoreServiceHiveMetastoreConfigKerberosConfigKeytab_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'cloudSecret',
      'The relative resource name of a Secret Manager secret version, in the following form:\n"projects/{projectNumber}/secrets/{secret_id}/versions/{version_id}".',
      () => [],
      true,
      false,
    ),
  ];
}
