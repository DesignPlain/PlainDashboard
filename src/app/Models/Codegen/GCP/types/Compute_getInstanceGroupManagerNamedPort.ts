import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getInstanceGroupManagerNamedPort {
  // The name of the instance group. Either `name` or `self_link` must be provided.
  Name?: string;

  // The port number.
  Port?: number;
}

export function Compute_getInstanceGroupManagerNamedPort_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the instance group. Either `name` or `self_link` must be provided.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "The port number.",
      [],
      true,
      false,
    ),
  ];
}
