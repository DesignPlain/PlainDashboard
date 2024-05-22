import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface msk_ClusterClientAuthenticationSasl {
  // Enables IAM client authentication. Defaults to `false`.
  iam?: boolean;

  // Enables SCRAM client authentication via AWS Secrets Manager. Defaults to `false`.
  scram?: boolean;
}

export function msk_ClusterClientAuthenticationSasl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "iam",
      "Enables IAM client authentication. Defaults to `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "scram",
      "Enables SCRAM client authentication via AWS Secrets Manager. Defaults to `false`.",
      [],
      false,
      false,
    ),
  ];
}
