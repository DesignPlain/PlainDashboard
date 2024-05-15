import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariableSecretValue {
  // Secret version of Secret Value for Config variable.
  SecretVersion?: string;
}

export function Integrationconnectors_ConnectionEventingConfigAuthConfigAdditionalVariableSecretValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SecretVersion",
      "Secret version of Secret Value for Config variable.",
      [],
      true,
      false,
    ),
  ];
}
