import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_ConnectionAwsAccessRole {
  // The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.
  IamRoleId?: string;

  /*
(Output)
A unique Google-owned and Google-generated identity for the Connection. This identity will be used to access the user's AWS IAM Role.
*/
  Identity?: string;
}

export function Bigquery_ConnectionAwsAccessRole_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "IamRoleId",
      "The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Identity",
      "(Output)\nA unique Google-owned and Google-generated identity for the Connection. This identity will be used to access the user's AWS IAM Role.",
      [],
      false,
      false,
    ),
  ];
}
