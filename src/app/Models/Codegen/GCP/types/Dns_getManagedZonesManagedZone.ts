import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dns_getManagedZonesManagedZone {
  // The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.
  Visibility?: string;

  // A textual description field.
  Description?: string;

  // The fully qualified DNS name of this zone.
  DnsName?: string;

  // DNS managed zone identifier
  Id?: string;

  // Unique identifier for the resource; defined by the server.
  ManagedZoneId?: number;

  // A unique name for the resource.
  Name?: string;

  // The list of nameservers that will be authoritative for this domain. Use NS records to redirect from your DNS provider to these names, thus making Google Cloud DNS authoritative for this zone.
  NameServers?: Array<string>;

  // The ID of the project containing Google Cloud DNS zones. If this is not provided the default project will be used.
  Project?: string;
}

export function Dns_getManagedZonesManagedZone_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "NameServers",
      "The list of nameservers that will be authoritative for this domain. Use NS records to redirect from your DNS provider to these names, thus making Google Cloud DNS authoritative for this zone.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Project",
      "The ID of the project containing Google Cloud DNS zones. If this is not provided the default project will be used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Visibility",
      "The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "A textual description field.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DnsName",
      "The fully qualified DNS name of this zone.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Id",
      "DNS managed zone identifier",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ManagedZoneId",
      "Unique identifier for the resource; defined by the server.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "A unique name for the resource.",
      [],
      true,
      false,
    ),
  ];
}
