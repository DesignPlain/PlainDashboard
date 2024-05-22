import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lambda_getCodeSigningConfigPolicy {
  // Code signing configuration policy for deployment validation failure.
  untrustedArtifactOnDeployment?: string;
}

export function lambda_getCodeSigningConfigPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "untrustedArtifactOnDeployment",
      "Code signing configuration policy for deployment validation failure.",
      [],
      true,
      false,
    ),
  ];
}
