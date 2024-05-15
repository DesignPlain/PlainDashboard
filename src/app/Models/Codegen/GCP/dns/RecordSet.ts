import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_RecordSetRoutingPolicy,
  Dns_RecordSetRoutingPolicy_GetTypes,
} from "../types/Dns_RecordSetRoutingPolicy";

export interface RecordSetArgs {
  // The DNS name this record set will apply to.
  Name?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  /*
The configuration for steering traffic based on query.
Now you can specify either Weighted Round Robin(WRR) type or Geolocation(GEO) type.
Structure is documented below.
*/
  RoutingPolicy?: Dns_RecordSetRoutingPolicy;

  /*
The string data for the records in this record set whose meaning depends on the DNS type. For TXT record, if the string
data contains spaces, add surrounding \" if you don't want your string to get split on spaces. To specify a single
record value longer than 255 characters such as a TXT record for DKIM, add \"\" inside the Terraform configuration
string (e.g. "first255characters\"\"morecharacters").
*/
  Rrdatas?: Array<string>;

  // The time-to-live of this record set (seconds).
  Ttl?: number;

  /*
The DNS record set type.

- - -
*/
  Type?: string;

  /*
The name of the zone in which this record set will
reside.
*/
  ManagedZone?: string;
}
export class RecordSet extends Resource {
  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The configuration for steering traffic based on query.
Now you can specify either Weighted Round Robin(WRR) type or Geolocation(GEO) type.
Structure is documented below.
*/
  public RoutingPolicy?: Dns_RecordSetRoutingPolicy;

  /*
The string data for the records in this record set whose meaning depends on the DNS type. For TXT record, if the string
data contains spaces, add surrounding \" if you don't want your string to get split on spaces. To specify a single
record value longer than 255 characters such as a TXT record for DKIM, add \"\" inside the Terraform configuration
string (e.g. "first255characters\"\"morecharacters").
*/
  public Rrdatas?: Array<string>;

  // The time-to-live of this record set (seconds).
  public Ttl?: number;

  /*
The DNS record set type.

- - -
*/
  public Type?: string;

  /*
The name of the zone in which this record set will
reside.
*/
  public ManagedZone?: string;

  // The DNS name this record set will apply to.
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The DNS name this record set will apply to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "RoutingPolicy",
        "The configuration for steering traffic based on query.\nNow you can specify either Weighted Round Robin(WRR) type or Geolocation(GEO) type.\nStructure is documented below.",
        Dns_RecordSetRoutingPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Rrdatas",
        'The string data for the records in this record set whose meaning depends on the DNS type. For TXT record, if the string\ndata contains spaces, add surrounding \\" if you don\'t want your string to get split on spaces. To specify a single\nrecord value longer than 255 characters such as a TXT record for DKIM, add \\"\\" inside the Terraform configuration\nstring (e.g. "first255characters\\"\\"morecharacters").',
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "Ttl",
        "The time-to-live of this record set (seconds).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The DNS record set type.\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ManagedZone",
        "The name of the zone in which this record set will\nreside.",
        [],
        true,
        true,
      ),
    ];
  }
}
