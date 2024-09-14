import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface vpclattice_getServiceDnsEntry {
  //
  domainName?: string;

  //
  hostedZoneId?: string;
}

export function vpclattice_getServiceDnsEntry_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "domainName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hostedZoneId",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
