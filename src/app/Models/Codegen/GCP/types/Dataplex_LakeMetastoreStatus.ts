import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataplex_LakeMetastoreStatus {
  // Output only. Current state of the lake. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED
  State?: string;

  // Output only. The time when the lake was last updated.
  UpdateTime?: string;

  // The URI of the endpoint used to access the Metastore service.
  Endpoint?: string;

  // Additional information about the current status.
  Message?: string;
}

export function Dataplex_LakeMetastoreStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Endpoint",
      "The URI of the endpoint used to access the Metastore service.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Message",
      "Additional information about the current status.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "Output only. Current state of the lake. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "UpdateTime",
      "Output only. The time when the lake was last updated.",
      [],
      false,
      false,
    ),
  ];
}
