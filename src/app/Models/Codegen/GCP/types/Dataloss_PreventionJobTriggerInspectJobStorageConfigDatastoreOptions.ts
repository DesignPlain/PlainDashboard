import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind,
  Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind";
import {
  Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId,
  Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId";

export interface Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptions {
  /*
A representation of a Datastore kind.
Structure is documented below.
*/
  Kind?: Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind;

  /*
Datastore partition ID. A partition ID identifies a grouping of entities. The grouping
is always by project and namespace, however the namespace ID may be empty.
Structure is documented below.
*/
  PartitionId?: Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId;
}

export function Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Kind",
      "A representation of a Datastore kind.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PartitionId",
      "Datastore partition ID. A partition ID identifies a grouping of entities. The grouping\nis always by project and namespace, however the namespace ID may be empty.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId_GetTypes(),
      true,
      false,
    ),
  ];
}
