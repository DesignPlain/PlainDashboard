import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Workstations_WorkstationConfigReadinessCheck {
  // Port to which the request should be sent.
  Port?: number;

  // Path to which the request should be sent.
  Path?: string;
}

export function Workstations_WorkstationConfigReadinessCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "Port to which the request should be sent.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Path",
      "Path to which the request should be sent.",
      [],
      true,
      false,
    ),
  ];
}
