import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudwatch_EventConnectionAuthParametersOauthClientParameters {
  // The client ID for the credentials to use for authorization. Created and stored in AWS Secrets Manager.
  clientId?: string;

  // The client secret for the credentials to use for authorization. Created and stored in AWS Secrets Manager.
  clientSecret?: string;
}

export function cloudwatch_EventConnectionAuthParametersOauthClientParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "clientSecret",
      "The client secret for the credentials to use for authorization. Created and stored in AWS Secrets Manager.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientId",
      "The client ID for the credentials to use for authorization. Created and stored in AWS Secrets Manager.",
      [],
      true,
      false,
    ),
  ];
}
