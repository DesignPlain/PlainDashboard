import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataproc_ClusterClusterConfigMetastoreConfig {
  /*
Resource name of an existing Dataproc Metastore service.

Only resource names including projectid and location (region) are valid. Examples:

`projects/[projectId]/locations/[dataproc_region]/services/[service-name]`
*/
  dataprocMetastoreService?: string;
}

export function dataproc_ClusterClusterConfigMetastoreConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dataprocMetastoreService",
      "Resource name of an existing Dataproc Metastore service.\n\nOnly resource names including projectid and location (region) are valid. Examples:\n\n`projects/[projectId]/locations/[dataproc_region]/services/[service-name]`",
      () => [],
      true,
      true,
    ),
  ];
}
