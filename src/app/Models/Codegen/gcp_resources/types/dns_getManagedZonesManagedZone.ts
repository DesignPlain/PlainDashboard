import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dns_getManagedZonesManagedZone {
  // The fully qualified DNS name of this zone.
  dnsName?: string;

  // DNS managed zone identifier
  id?: string;

  // Unique identifier for the resource; defined by the server.
  managedZoneId?: number;

  // A unique name for the resource.
  name?: string;

  // The list of nameservers that will be authoritative for this domain. Use NS records to redirect from your DNS provider to these names, thus making Google Cloud DNS authoritative for this zone.
  nameServers?: Array<string>;

  // The ID of the project containing Google Cloud DNS zones. If this is not provided the default project will be used.
  project?: string;

  // The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.
  visibility?: string;

  // A textual description field.
  description?: string;
}

export function dns_getManagedZonesManagedZone_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "nameServers",
      "The list of nameservers that will be authoritative for this domain. Use NS records to redirect from your DNS provider to these names, thus making Google Cloud DNS authoritative for this zone.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "project",
      "The ID of the project containing Google Cloud DNS zones. If this is not provided the default project will be used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "visibility",
      "The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "A textual description field.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dnsName",
      "The fully qualified DNS name of this zone.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "DNS managed zone identifier",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "managedZoneId",
      "Unique identifier for the resource; defined by the server.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "A unique name for the resource.",
      [],
      true,
      false,
    ),
  ];
}
