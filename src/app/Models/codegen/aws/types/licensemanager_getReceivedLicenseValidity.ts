import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface licensemanager_getReceivedLicenseValidity {
  // End of the validity time range.
  end?: string;

  // Start of the validity time range.
  begin?: string;
}

export function licensemanager_getReceivedLicenseValidity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "begin",
      "Start of the validity time range.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "end",
      "End of the validity time range.",
      () => [],
      true,
      false,
    ),
  ];
}
