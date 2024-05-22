import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface integrationconnectors_ConnectionEventingRuntimeDataStatus {
  /*
(Output)
State of the Eventing
*/
  state?: string;

  // An arbitrary description for the Conection.
  description?: string;
}

export function integrationconnectors_ConnectionEventingRuntimeDataStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "state",
      "(Output)\nState of the Eventing",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "An arbitrary description for the Conection.",
      [],
      false,
      false,
    ),
  ];
}
