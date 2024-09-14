import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_DataSourceCredentialsCredentialPair,
  quicksight_DataSourceCredentialsCredentialPair_GetTypes,
} from "./quicksight_DataSourceCredentialsCredentialPair";

export interface quicksight_DataSourceCredentials {
  /*
The Amazon Resource Name (ARN) of a data source that has the credential pair that you want to use.
When the value is not null, the `credential_pair` from the data source in the ARN is used.
*/
  copySourceArn?: string;

  // Credential pair. See Credential Pair below for more details.
  credentialPair?: quicksight_DataSourceCredentialsCredentialPair;
}

export function quicksight_DataSourceCredentials_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "copySourceArn",
      "The Amazon Resource Name (ARN) of a data source that has the credential pair that you want to use.\nWhen the value is not null, the `credential_pair` from the data source in the ARN is used.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "credentialPair",
      "Credential pair. See Credential Pair below for more details.",
      () => quicksight_DataSourceCredentialsCredentialPair_GetTypes(),
      false,
      false,
    ),
  ];
}
