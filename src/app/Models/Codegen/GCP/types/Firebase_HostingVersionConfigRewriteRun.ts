import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface firebase_HostingVersionConfigRewriteRun {
  // User-defined ID of the Cloud Run service.
  serviceId?: string;

  // Optional. User-provided region where the Cloud Run service is hosted. Defaults to `us-central1` if not supplied.
  region?: string;
}

export function firebase_HostingVersionConfigRewriteRun_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "serviceId",
      "User-defined ID of the Cloud Run service.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "Optional. User-provided region where the Cloud Run service is hosted. Defaults to `us-central1` if not supplied.",
      [],
      false,
      true,
    ),
  ];
}
