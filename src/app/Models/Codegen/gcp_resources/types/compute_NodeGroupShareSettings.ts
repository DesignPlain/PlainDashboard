import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_NodeGroupShareSettingsProjectMap,
  compute_NodeGroupShareSettingsProjectMap_GetTypes,
} from "./compute_NodeGroupShareSettingsProjectMap";

export interface compute_NodeGroupShareSettings {
  /*
A map of project id and project config. This is only valid when shareType's value is SPECIFIC_PROJECTS.
Structure is documented below.
*/
  projectMaps?: Array<compute_NodeGroupShareSettingsProjectMap>;

  /*
Node group sharing type.
Possible values are: `ORGANIZATION`, `SPECIFIC_PROJECTS`, `LOCAL`.
*/
  shareType?: string;
}

export function compute_NodeGroupShareSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "projectMaps",
      "A map of project id and project config. This is only valid when shareType's value is SPECIFIC_PROJECTS.\nStructure is documented below.",
      compute_NodeGroupShareSettingsProjectMap_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "shareType",
      "Node group sharing type.\nPossible values are: `ORGANIZATION`, `SPECIFIC_PROJECTS`, `LOCAL`.",
      [],
      true,
      false,
    ),
  ];
}
