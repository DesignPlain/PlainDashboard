import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind {
  // The name of the Datastore kind.
  Name?: string;
}

export function Dataloss_PreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the Datastore kind.",
      [],
      true,
      false,
    ),
  ];
}
