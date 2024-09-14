import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface verifiedaccess_TrustProviderDeviceOptions {
  //
  tenantId?: string;
}

export function verifiedaccess_TrustProviderDeviceOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "tenantId",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
