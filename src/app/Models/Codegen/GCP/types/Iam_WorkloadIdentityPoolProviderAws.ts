import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Iam_WorkloadIdentityPoolProviderAws {
  // The AWS account ID.
  AccountId?: string;
}

export function Iam_WorkloadIdentityPoolProviderAws_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AccountId",
      "The AWS account ID.",
      [],
      true,
      false,
    ),
  ];
}
