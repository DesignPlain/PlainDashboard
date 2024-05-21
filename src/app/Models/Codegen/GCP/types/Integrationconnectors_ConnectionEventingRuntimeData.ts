import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  integrationconnectors_ConnectionEventingRuntimeDataStatus,
  integrationconnectors_ConnectionEventingRuntimeDataStatus_GetTypes,
} from "./integrationconnectors_ConnectionEventingRuntimeDataStatus";

export interface integrationconnectors_ConnectionEventingRuntimeData {
  /*
(Output)
Current status of eventing.
Structure is documented below.
*/
  statuses?: Array<integrationconnectors_ConnectionEventingRuntimeDataStatus>;

  // Events listener endpoint. The value will populated after provisioning the events listener.
  eventsListenerEndpoint?: string;
}

export function integrationconnectors_ConnectionEventingRuntimeData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "statuses",
      "(Output)\nCurrent status of eventing.\nStructure is documented below.",
      integrationconnectors_ConnectionEventingRuntimeDataStatus_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "eventsListenerEndpoint",
      "Events listener endpoint. The value will populated after provisioning the events listener.",
      [],
      false,
      false,
    ),
  ];
}
