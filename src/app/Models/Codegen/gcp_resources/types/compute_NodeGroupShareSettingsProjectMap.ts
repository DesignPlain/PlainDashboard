import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_NodeGroupShareSettingsProjectMap {
  // The identifier for this object. Format specified above.
  id?: string;

  // The project id/number should be the same as the key of this project config in the project map.
  projectId?: string;
}

export function compute_NodeGroupShareSettingsProjectMap_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "The identifier for this object. Format specified above.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "projectId",
      "The project id/number should be the same as the key of this project config in the project map.",
      [],
      true,
      false,
    ),
  ];
}
