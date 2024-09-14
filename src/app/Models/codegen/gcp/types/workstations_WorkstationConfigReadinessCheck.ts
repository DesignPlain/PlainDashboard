import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface workstations_WorkstationConfigReadinessCheck {
  // Path to which the request should be sent.
  path?: string;

  // Port to which the request should be sent.
  port?: number;
}

export function workstations_WorkstationConfigReadinessCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port to which the request should be sent.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Path to which the request should be sent.",
      () => [],
      true,
      false,
    ),
  ];
}
