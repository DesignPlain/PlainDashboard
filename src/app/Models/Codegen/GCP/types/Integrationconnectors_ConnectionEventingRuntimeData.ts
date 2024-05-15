import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Integrationconnectors_ConnectionEventingRuntimeDataStatus,
  Integrationconnectors_ConnectionEventingRuntimeDataStatus_GetTypes,
} from "./Integrationconnectors_ConnectionEventingRuntimeDataStatus";

export interface Integrationconnectors_ConnectionEventingRuntimeData {
  // Events listener endpoint. The value will populated after provisioning the events listener.
  EventsListenerEndpoint?: string;

  /*
(Output)
Current status of eventing.
Structure is documented below.
*/
  Statuses?: Array<Integrationconnectors_ConnectionEventingRuntimeDataStatus>;
}

export function Integrationconnectors_ConnectionEventingRuntimeData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "EventsListenerEndpoint",
      "Events listener endpoint. The value will populated after provisioning the events listener.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Statuses",
      "(Output)\nCurrent status of eventing.\nStructure is documented below.",
      Integrationconnectors_ConnectionEventingRuntimeDataStatus_GetTypes(),
      false,
      false,
    ),
  ];
}
