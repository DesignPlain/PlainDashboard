import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface vpclattice_ServiceNetworkServiceAssociationDnsEntry {
  // The domain name of the service.
  domainName?: string;

  // The ID of the hosted zone.
  hostedZoneId?: string;
}

export function vpclattice_ServiceNetworkServiceAssociationDnsEntry_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "domainName",
      "The domain name of the service.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hostedZoneId",
      "The ID of the hosted zone.",
      [],
      false,
      false,
    ),
  ];
}
