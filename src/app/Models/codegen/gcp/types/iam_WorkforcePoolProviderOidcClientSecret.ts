import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  iam_WorkforcePoolProviderOidcClientSecretValue,
  iam_WorkforcePoolProviderOidcClientSecretValue_GetTypes,
} from "./iam_WorkforcePoolProviderOidcClientSecretValue";

export interface iam_WorkforcePoolProviderOidcClientSecret {
  /*
The value of the client secret.
Structure is documented below.
*/
  value?: iam_WorkforcePoolProviderOidcClientSecretValue;
}

export function iam_WorkforcePoolProviderOidcClientSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "value",
      "The value of the client secret.\nStructure is documented below.",
      () => iam_WorkforcePoolProviderOidcClientSecretValue_GetTypes(),
      false,
      false,
    ),
  ];
}
