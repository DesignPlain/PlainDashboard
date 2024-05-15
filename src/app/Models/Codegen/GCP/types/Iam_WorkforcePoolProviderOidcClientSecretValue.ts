import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Iam_WorkforcePoolProviderOidcClientSecretValue {
  /*
The plain text of the client secret value.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  PlainText?: string;

  /*
(Output)
A thumbprint to represent the current client secret value.
*/
  Thumbprint?: string;
}

export function Iam_WorkforcePoolProviderOidcClientSecretValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PlainText",
      "The plain text of the client secret value.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Thumbprint",
      "(Output)\nA thumbprint to represent the current client secret value.",
      [],
      false,
      false,
    ),
  ];
}
