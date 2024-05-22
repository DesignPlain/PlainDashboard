import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface licensemanager_getReceivedLicenseReceivedMetadata {
  // A list of allowed operations.
  allowedOperations?: Array<string>;

  // Received status.
  receivedStatus?: string;

  // Received status reason.
  receivedStatusReason?: string;
}

export function licensemanager_getReceivedLicenseReceivedMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowedOperations",
      "A list of allowed operations.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "receivedStatus",
      "Received status.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "receivedStatusReason",
      "Received status reason.",
      [],
      true,
      false,
    ),
  ];
}
