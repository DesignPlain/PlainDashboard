import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataplex_AssetResourceStatus {
  // Additional information about the current state.
  Message?: string;

  // Output only. Current state of the asset. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED
  State?: string;

  // Output only. The time when the asset was last updated.
  UpdateTime?: string;
}

export function Dataplex_AssetResourceStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "UpdateTime",
      "Output only. The time when the asset was last updated.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Message",
      "Additional information about the current state.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "Output only. Current state of the asset. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED",
      [],
      false,
      false,
    ),
  ];
}
