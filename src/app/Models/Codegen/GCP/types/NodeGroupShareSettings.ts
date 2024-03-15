import { NodeGroupShareSettingsProjectMap } from "./NodeGroupShareSettingsProjectMap";

export interface NodeGroupShareSettings {
  /*
A map of project id and project config. This is only valid when shareType's value is SPECIFIC_PROJECTS.
Structure is documented below.
*/
  ProjectMaps?: Array<NodeGroupShareSettingsProjectMap>;

  /*
Node group sharing type.
Possible values are: `ORGANIZATION`, `SPECIFIC_PROJECTS`, `LOCAL`.
*/
  ShareType?: string;
}
