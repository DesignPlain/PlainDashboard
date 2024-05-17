import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_NodeGroupShareSettingsProjectMap,
  Compute_NodeGroupShareSettingsProjectMap_GetTypes,
} from "./Compute_NodeGroupShareSettingsProjectMap";

export interface Compute_NodeGroupShareSettings {
  /*
A map of project id and project config. This is only valid when shareType's value is SPECIFIC_PROJECTS.
Structure is documented below.
*/
  ProjectMaps?: Array<Compute_NodeGroupShareSettingsProjectMap>;

  /*
Node group sharing type.
Possible values are: `ORGANIZATION`, `SPECIFIC_PROJECTS`, `LOCAL`.
*/
  ShareType?: string;
}

export function Compute_NodeGroupShareSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ProjectMaps",
      "A map of project id and project config. This is only valid when shareType's value is SPECIFIC_PROJECTS.\nStructure is documented below.",
      Compute_NodeGroupShareSettingsProjectMap_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ShareType",
      "Node group sharing type.\nPossible values are: `ORGANIZATION`, `SPECIFIC_PROJECTS`, `LOCAL`.",
      [],
      true,
      false,
    ),
  ];
}
