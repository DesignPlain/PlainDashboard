import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface bigquery_ConnectionAwsAccessRole {
  // The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.
  iamRoleId?: string;

  /*
(Output)
A unique Google-owned and Google-generated identity for the Connection. This identity will be used to access the user's AWS IAM Role.
*/
  identity?: string;
}

export function bigquery_ConnectionAwsAccessRole_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "iamRoleId",
      "The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "identity",
      "(Output)\nA unique Google-owned and Google-generated identity for the Connection. This identity will be used to access the user's AWS IAM Role.",
      [],
      false,
      false,
    ),
  ];
}
