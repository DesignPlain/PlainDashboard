import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface eventarc_TriggerDestinationCloudRunService {
  // Optional. The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".
  path?: string;

  // Required. The region the Cloud Run service is deployed in.
  region?: string;

  // Required. The name of the Cloud Run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project of the trigger object can be addressed.
  service?: string;
}

export function eventarc_TriggerDestinationCloudRunService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "path",
      'Optional. The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "Required. The region the Cloud Run service is deployed in.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "service",
      "Required. The name of the Cloud Run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project of the trigger object can be addressed.",
      [],
      true,
      false,
    ),
  ];
}
