import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface iam_WorkloadIdentityPoolProviderAws {
  // The AWS account ID.
  accountId?: string;
}

export function iam_WorkloadIdentityPoolProviderAws_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accountId",
      "The AWS account ID.",
      () => [],
      true,
      false,
    ),
  ];
}
