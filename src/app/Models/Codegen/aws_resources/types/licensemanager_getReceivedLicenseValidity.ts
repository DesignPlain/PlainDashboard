import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface licensemanager_getReceivedLicenseValidity {
  // Start of the validity time range.
  begin?: string;

  // End of the validity time range.
  end?: string;
}

export function licensemanager_getReceivedLicenseValidity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "begin",
      "Start of the validity time range.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "end",
      "End of the validity time range.",
      [],
      true,
      false,
    ),
  ];
}
