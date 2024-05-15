import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Integrationconnectors_ConnectionEventingRuntimeDataStatus {
  // An arbitrary description for the Conection.
  Description?: string;

  /*
(Output)
State of the Eventing
*/
  State?: string;
}

export function Integrationconnectors_ConnectionEventingRuntimeDataStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Description",
      "An arbitrary description for the Conection.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "(Output)\nState of the Eventing",
      [],
      false,
      false,
    ),
  ];
}
