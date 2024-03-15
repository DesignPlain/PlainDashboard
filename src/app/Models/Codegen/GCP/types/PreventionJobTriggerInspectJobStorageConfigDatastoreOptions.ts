import { PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind } from "./PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind";
import { PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId } from "./PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId";

export interface PreventionJobTriggerInspectJobStorageConfigDatastoreOptions {
  /*
A representation of a Datastore kind.
Structure is documented below.
*/
  Kind?: PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind;

  /*
Datastore partition ID. A partition ID identifies a grouping of entities. The grouping
is always by project and namespace, however the namespace ID may be empty.
Structure is documented below.
*/
  PartitionId?: PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId;
}
