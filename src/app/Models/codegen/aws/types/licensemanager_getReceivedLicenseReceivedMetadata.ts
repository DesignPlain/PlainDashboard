import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface licensemanager_getReceivedLicenseReceivedMetadata {
  // Received status.
  receivedStatus?: string;

  // Received status reason.
  receivedStatusReason?: string;

  // A list of allowed operations.
  allowedOperations?: Array<string>;
}

export function licensemanager_getReceivedLicenseReceivedMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "receivedStatusReason",
      "Received status reason.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowedOperations",
      "A list of allowed operations.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "receivedStatus",
      "Received status.",
      () => [],
      true,
      false,
    ),
  ];
}
