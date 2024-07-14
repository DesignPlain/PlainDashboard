import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface integrationconnectors_ConnectionStatus {
  /*
(Output)
State of the Eventing
*/
  state?: string;

  /*
(Output)
Current status of eventing.
Structure is documented below.
*/
  status?: string;

  // An arbitrary description for the Conection.
  description?: string;
}

export function integrationconnectors_ConnectionStatus_GetTypes(): DynamicUIProps[] {
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
      "status",
      "(Output)\nCurrent status of eventing.\nStructure is documented below.",
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
