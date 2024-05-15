import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudscheduler_JobHttpTargetOauthToken {
  /*
OAuth scope to be used for generating OAuth access token. If not specified,
"https://www.googleapis.com/auth/cloud-platform" will be used.
*/
  Scope?: string;

  /*
Service account email to be used for generating OAuth token.
The service account must be within the same project as the job.
*/
  ServiceAccountEmail?: string;
}

export function Cloudscheduler_JobHttpTargetOauthToken_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Scope",
      'OAuth scope to be used for generating OAuth access token. If not specified,\n"https://www.googleapis.com/auth/cloud-platform" will be used.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccountEmail",
      "Service account email to be used for generating OAuth token.\nThe service account must be within the same project as the job.",
      [],
      true,
      false,
    ),
  ];
}
