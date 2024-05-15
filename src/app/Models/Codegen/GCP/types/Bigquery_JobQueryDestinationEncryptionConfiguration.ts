import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_JobQueryDestinationEncryptionConfiguration {
  /*
Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.
The BigQuery Service Account associated with your project requires access to this encryption key.
*/
  KmsKeyName?: string;

  /*
(Output)
Describes the Cloud KMS encryption key version used to protect destination BigQuery table.
*/
  KmsKeyVersion?: string;
}

export function Bigquery_JobQueryDestinationEncryptionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KmsKeyName",
      "Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table.\nThe BigQuery Service Account associated with your project requires access to this encryption key.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "KmsKeyVersion",
      "(Output)\nDescribes the Cloud KMS encryption key version used to protect destination BigQuery table.",
      [],
      false,
      false,
    ),
  ];
}
