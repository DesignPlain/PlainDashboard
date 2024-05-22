import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface vpclattice_ServiceDnsEntry {
  //
  domainName?: string;

  //
  hostedZoneId?: string;
}

export function vpclattice_ServiceDnsEntry_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "domainName", "", [], false, false),
    new DynamicUIProps(InputType.String, "hostedZoneId", "", [], false, false),
  ];
}
