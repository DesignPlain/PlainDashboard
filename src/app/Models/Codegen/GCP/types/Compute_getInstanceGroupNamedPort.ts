import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getInstanceGroupNamedPort {
  // The name of the instance group. Either `name` or `self_link` must be provided.
  Name?: string;

  //
  Port?: number;
}

export function Compute_getInstanceGroupNamedPort_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the instance group. Either `name` or `self_link` must be provided.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "Port", "", [], true, false),
  ];
}
