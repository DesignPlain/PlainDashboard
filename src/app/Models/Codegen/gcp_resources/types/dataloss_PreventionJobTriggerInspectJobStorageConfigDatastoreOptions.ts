import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind,
  dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind";
import {
  dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId,
  dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId";

export interface dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptions {
  /*
A representation of a Datastore kind.
Structure is documented below.
*/
  kind?: dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind;

  /*
Datastore partition ID. A partition ID identifies a grouping of entities. The grouping
is always by project and namespace, however the namespace ID may be empty.
Structure is documented below.
*/
  partitionId?: dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId;
}

export function dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "kind",
      "A representation of a Datastore kind.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "partitionId",
      "Datastore partition ID. A partition ID identifies a grouping of entities. The grouping\nis always by project and namespace, however the namespace ID may be empty.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId_GetTypes(),
      true,
      false,
    ),
  ];
}
