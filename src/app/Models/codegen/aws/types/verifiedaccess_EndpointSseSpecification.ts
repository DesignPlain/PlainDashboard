import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface verifiedaccess_EndpointSseSpecification {
  //
  customerManagedKeyEnabled?: boolean;

  //
  kmsKeyArn?: string;
}

export function verifiedaccess_EndpointSseSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "customerManagedKeyEnabled",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyArn",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
