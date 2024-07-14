import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataplex_AssetDiscoveryStatusStat,
  dataplex_AssetDiscoveryStatusStat_GetTypes,
} from "./dataplex_AssetDiscoveryStatusStat";

export interface dataplex_AssetDiscoveryStatus {
  // The duration of the last discovery run.
  lastRunDuration?: string;

  // The start time of the last discovery run.
  lastRunTime?: string;

  // Additional information about the current state.
  message?: string;

  // Output only. Current state of the asset. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED
  state?: string;

  // Data Stats of the asset reported by discovery.
  stats?: Array<dataplex_AssetDiscoveryStatusStat>;

  // Output only. The time when the asset was last updated.
  updateTime?: string;
}

export function dataplex_AssetDiscoveryStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "lastRunDuration",
      "The duration of the last discovery run.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastRunTime",
      "The start time of the last discovery run.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "message",
      "Additional information about the current state.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "Output only. Current state of the asset. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "stats",
      "Data Stats of the asset reported by discovery.",
      dataplex_AssetDiscoveryStatusStat_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "updateTime",
      "Output only. The time when the asset was last updated.",
      [],
      false,
      false,
    ),
  ];
}
