import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface codebuild_ProjectEnvironmentRegistryCredential {
  // ARN or name of credentials created using AWS Secrets Manager.
  credential?: string;

  // Service that created the credentials to access a private Docker registry. Valid value: `SECRETS_MANAGER` (AWS Secrets Manager).
  credentialProvider?: string;
}

export function codebuild_ProjectEnvironmentRegistryCredential_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "credential",
      "ARN or name of credentials created using AWS Secrets Manager.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "credentialProvider",
      "Service that created the credentials to access a private Docker registry. Valid value: `SECRETS_MANAGER` (AWS Secrets Manager).",
      [],
      true,
      false,
    ),
  ];
}
