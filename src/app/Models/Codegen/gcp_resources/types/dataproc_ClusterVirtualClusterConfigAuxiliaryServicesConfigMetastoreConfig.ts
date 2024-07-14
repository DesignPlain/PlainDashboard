import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig {
  /*
Resource name of an existing Dataproc Metastore service.

Only resource names including projectid and location (region) are valid. Examples:

`projects/[projectId]/locations/[dataproc_region]/services/[service-name]`
*/
  dataprocMetastoreService?: string;
}

export function dataproc_ClusterVirtualClusterConfigAuxiliaryServicesConfigMetastoreConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dataprocMetastoreService",
      "Resource name of an existing Dataproc Metastore service.\n\nOnly resource names including projectid and location (region) are valid. Examples:\n\n`projects/[projectId]/locations/[dataproc_region]/services/[service-name]`",
      [],
      false,
      true,
    ),
  ];
}
