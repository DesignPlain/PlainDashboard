import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  workstations_WorkstationConfigHostGceInstance,
  workstations_WorkstationConfigHostGceInstance_GetTypes,
} from "./workstations_WorkstationConfigHostGceInstance";

export interface workstations_WorkstationConfigHost {
  /*
A runtime using a Compute Engine instance.
Structure is documented below.
*/
  gceInstance?: workstations_WorkstationConfigHostGceInstance;
}

export function workstations_WorkstationConfigHost_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "gceInstance",
      "A runtime using a Compute Engine instance.\nStructure is documented below.",
      workstations_WorkstationConfigHostGceInstance_GetTypes(),
      false,
      false,
    ),
  ];
}
