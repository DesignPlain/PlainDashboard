import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_InstanceGroupManagerNamedPort {
  // The name of the port.
  name?: string;

  /*
The port number.
- - -
*/
  port?: number;
}

export function compute_InstanceGroupManagerNamedPort_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the port.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port number.\n- - -",
      [],
      true,
      false,
    ),
  ];
}
