import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Workstations_WorkstationConfigHostGceInstance,
  Workstations_WorkstationConfigHostGceInstance_GetTypes,
} from "./Workstations_WorkstationConfigHostGceInstance";

export interface Workstations_WorkstationConfigHost {
  /*
A runtime using a Compute Engine instance.
Structure is documented below.
*/
  GceInstance?: Workstations_WorkstationConfigHostGceInstance;
}

export function Workstations_WorkstationConfigHost_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "GceInstance",
      "A runtime using a Compute Engine instance.\nStructure is documented below.",
      Workstations_WorkstationConfigHostGceInstance_GetTypes(),
      false,
      false,
    ),
  ];
}
