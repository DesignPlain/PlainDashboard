import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_ConnectionAwsAccessRole,
  Bigquery_ConnectionAwsAccessRole_GetTypes,
} from "./Bigquery_ConnectionAwsAccessRole";

export interface Bigquery_ConnectionAws {
  /*
Authentication using Google owned service account to assume into customer's AWS IAM Role.
Structure is documented below.
*/
  AccessRole?: Bigquery_ConnectionAwsAccessRole;
}

export function Bigquery_ConnectionAws_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "AccessRole",
      "Authentication using Google owned service account to assume into customer's AWS IAM Role.\nStructure is documented below.",
      Bigquery_ConnectionAwsAccessRole_GetTypes(),
      true,
      false,
    ),
  ];
}
