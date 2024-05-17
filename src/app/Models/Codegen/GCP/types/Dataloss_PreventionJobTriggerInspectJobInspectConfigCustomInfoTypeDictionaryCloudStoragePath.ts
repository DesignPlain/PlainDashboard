import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryCloudStoragePath {
  // A url representing a file or path (no wildcards) in Cloud Storage. Example: `gs://[BUCKET_NAME]/dictionary.txt`
  Path?: string;
}

export function Dataloss_PreventionJobTriggerInspectJobInspectConfigCustomInfoTypeDictionaryCloudStoragePath_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Path",
      "A url representing a file or path (no wildcards) in Cloud Storage. Example: `gs://[BUCKET_NAME]/dictionary.txt`",
      [],
      true,
      false,
    ),
  ];
}
