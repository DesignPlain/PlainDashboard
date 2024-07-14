import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface integrationconnectors_ConnectionSslConfigAdditionalVariableSecretValue {
  // Secret version of Secret Value for Config variable.
  secretVersion?: string;
}

export function integrationconnectors_ConnectionSslConfigAdditionalVariableSecretValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "secretVersion",
      "Secret version of Secret Value for Config variable.",
      [],
      true,
      false,
    ),
  ];
}
