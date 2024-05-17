import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId {
  // If not empty, the ID of the namespace to which the entities belong.
  NamespaceId?: string;

  // The ID of the project to which the entities belong.
  ProjectId?: string;
}

export function Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ProjectId",
      "The ID of the project to which the entities belong.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NamespaceId",
      "If not empty, the ID of the namespace to which the entities belong.",
      [],
      false,
      false,
    ),
  ];
}
