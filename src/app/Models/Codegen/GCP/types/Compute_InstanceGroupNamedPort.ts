import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_InstanceGroupNamedPort {
  // The port number to map the name to.
  Port?: number;

  // The name which the port will be mapped to.
  Name?: string;
}

export function Compute_InstanceGroupNamedPort_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "The port number to map the name to.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name which the port will be mapped to.",
      [],
      true,
      false,
    ),
  ];
}
