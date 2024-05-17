import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Iam_WorkforcePoolProviderOidcClientSecretValue,
  Iam_WorkforcePoolProviderOidcClientSecretValue_GetTypes,
} from "./Iam_WorkforcePoolProviderOidcClientSecretValue";

export interface Iam_WorkforcePoolProviderOidcClientSecret {
  /*
The value of the client secret.
Structure is documented below.
*/
  Value?: Iam_WorkforcePoolProviderOidcClientSecretValue;
}

export function Iam_WorkforcePoolProviderOidcClientSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Value",
      "The value of the client secret.\nStructure is documented below.",
      Iam_WorkforcePoolProviderOidcClientSecretValue_GetTypes(),
      false,
      false,
    ),
  ];
}
