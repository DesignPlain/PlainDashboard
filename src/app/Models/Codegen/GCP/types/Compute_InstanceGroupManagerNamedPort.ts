import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_InstanceGroupManagerNamedPort {
  // The name of the port.
  Name?: string;

  /*
The port number.
- - -
*/
  Port?: number;
}

export function Compute_InstanceGroupManagerNamedPort_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the port.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "The port number.\n- - -",
      [],
      true,
      false,
    ),
  ];
}
