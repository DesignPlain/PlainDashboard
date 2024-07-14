import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface iam_getWorkloadIdentityPoolProviderAw {
  // The AWS account ID.
  accountId?: string;
}

export function iam_getWorkloadIdentityPoolProviderAw_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accountId",
      "The AWS account ID.",
      [],
      true,
      false,
    ),
  ];
}
