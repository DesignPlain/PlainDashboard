import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataplex_AssetDiscoveryStatusStat,
  Dataplex_AssetDiscoveryStatusStat_GetTypes,
} from "./Dataplex_AssetDiscoveryStatusStat";

export interface Dataplex_AssetDiscoveryStatus {
  // The start time of the last discovery run.
  LastRunTime?: string;

  // Additional information about the current state.
  Message?: string;

  // Output only. Current state of the asset. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED
  State?: string;

  // Data Stats of the asset reported by discovery.
  Stats?: Array<Dataplex_AssetDiscoveryStatusStat>;

  // Output only. The time when the asset was last updated.
  UpdateTime?: string;

  // The duration of the last discovery run.
  LastRunDuration?: string;
}

export function Dataplex_AssetDiscoveryStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "LastRunDuration",
      "The duration of the last discovery run.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LastRunTime",
      "The start time of the last discovery run.",
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
    new DynamicUIProps(
      InputType.Array,
      "Stats",
      "Data Stats of the asset reported by discovery.",
      Dataplex_AssetDiscoveryStatusStat_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "UpdateTime",
      "Output only. The time when the asset was last updated.",
      [],
      false,
      false,
    ),
  ];
}
