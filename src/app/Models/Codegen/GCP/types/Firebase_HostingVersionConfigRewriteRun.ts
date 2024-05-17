import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Firebase_HostingVersionConfigRewriteRun {
  // Optional. User-provided region where the Cloud Run service is hosted. Defaults to `us-central1` if not supplied.
  Region?: string;

  // User-defined ID of the Cloud Run service.
  ServiceId?: string;
}

export function Firebase_HostingVersionConfigRewriteRun_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Region",
      "Optional. User-provided region where the Cloud Run service is hosted. Defaults to `us-central1` if not supplied.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceId",
      "User-defined ID of the Cloud Run service.",
      [],
      true,
      true,
    ),
  ];
}
