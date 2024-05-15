import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudscheduler_JobHttpTargetOidcToken {
  /*
Audience to be used when generating OIDC token. If not specified,
the URI specified in target will be used.
*/
  Audience?: string;

  /*
Service account email to be used for generating OAuth token.
The service account must be within the same project as the job.
*/
  ServiceAccountEmail?: string;
}

export function Cloudscheduler_JobHttpTargetOidcToken_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Audience",
      "Audience to be used when generating OIDC token. If not specified,\nthe URI specified in target will be used.",
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
