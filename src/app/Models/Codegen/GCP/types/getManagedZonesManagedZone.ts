export interface getManagedZonesManagedZone {
  // A unique name for the resource.
  Name?: string;

  // The list of nameservers that will be authoritative for this domain. Use NS records to redirect from your DNS provider to these names, thus making Google Cloud DNS authoritative for this zone.
  NameServers?: Array<string>;

  // The ID of the project containing Google Cloud DNS zones. If this is not provided the default project will be used.
  Project?: string;

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
}
