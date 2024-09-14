import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataplex_LakeMetastoreStatus {
  // The URI of the endpoint used to access the Metastore service.
  endpoint?: string;

  // Additional information about the current status.
  message?: string;

  // Output only. Current state of the lake. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED
  state?: string;

  // Output only. The time when the lake was last updated.
  updateTime?: string;
}

export function dataplex_LakeMetastoreStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "updateTime",
      "Output only. The time when the lake was last updated.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "endpoint",
      "The URI of the endpoint used to access the Metastore service.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "message",
      "Additional information about the current status.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "Output only. Current state of the lake. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED",
      () => [],
      false,
      false,
    ),
  ];
}
