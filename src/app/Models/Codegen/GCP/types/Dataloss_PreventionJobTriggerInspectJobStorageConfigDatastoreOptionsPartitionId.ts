import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId {
  // If not empty, the ID of the namespace to which the entities belong.
  namespaceId?: string;

  // The ID of the project to which the entities belong.
  projectId?: string;
}

export function dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "namespaceId",
      "If not empty, the ID of the namespace to which the entities belong.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "projectId",
      "The ID of the project to which the entities belong.",
      [],
      true,
      false,
    ),
  ];
}
