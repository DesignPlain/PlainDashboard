import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface iam_WorkforcePoolProviderOidcClientSecretValue {
  /*
The plain text of the client secret value.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  plainText?: string;

  /*
(Output)
A thumbprint to represent the current client secret value.
*/
  thumbprint?: string;
}

export function iam_WorkforcePoolProviderOidcClientSecretValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "plainText",
      "The plain text of the client secret value.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "thumbprint",
      "(Output)\nA thumbprint to represent the current client secret value.",
      [],
      false,
      false,
    ),
  ];
}
