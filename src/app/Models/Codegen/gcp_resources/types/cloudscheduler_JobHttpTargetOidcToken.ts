import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudscheduler_JobHttpTargetOidcToken {
  /*
Audience to be used when generating OIDC token. If not specified,
the URI specified in target will be used.
*/
  audience?: string;

  /*
Service account email to be used for generating OAuth token.
The service account must be within the same project as the job.
*/
  serviceAccountEmail?: string;
}

export function cloudscheduler_JobHttpTargetOidcToken_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "audience",
      "Audience to be used when generating OIDC token. If not specified,\nthe URI specified in target will be used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccountEmail",
      "Service account email to be used for generating OAuth token.\nThe service account must be within the same project as the job.",
      [],
      true,
      false,
    ),
  ];
}
