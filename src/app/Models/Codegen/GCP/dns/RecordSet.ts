import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RecordSetRoutingPolicy } from "../types/RecordSetRoutingPolicy";

export interface RecordSetArgs {
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
  RoutingPolicy?: RecordSetRoutingPolicy;

  /*
The string data for the records in this record set whose meaning depends on the DNS type. For TXT record, if the string
data contains spaces, add surrounding \" if you don't want your string to get split on spaces. To specify a single
record value longer than 255 characters such as a TXT record for DKIM, add \"\" inside the Terraform configuration
string (e.g. "first255characters\"\"morecharacters").
*/
  Rrdatas?: Array<string>;
}
export class RecordSet extends Resource {
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
  public RoutingPolicy?: RecordSetRoutingPolicy;

  /*
The string data for the records in this record set whose meaning depends on the DNS type. For TXT record, if the string
data contains spaces, add surrounding \" if you don't want your string to get split on spaces. To specify a single
record value longer than 255 characters such as a TXT record for DKIM, add \"\" inside the Terraform configuration
string (e.g. "first255characters\"\"morecharacters").
*/
  public Rrdatas?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RoutingPolicy",
        "The configuration for steering traffic based on query.\nNow you can specify either Weighted Round Robin(WRR) type or Geolocation(GEO) type.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Rrdatas",
        'The string data for the records in this record set whose meaning depends on the DNS type. For TXT record, if the string\ndata contains spaces, add surrounding \\" if you don\'t want your string to get split on spaces. To specify a single\nrecord value longer than 255 characters such as a TXT record for DKIM, add \\"\\" inside the Terraform configuration\nstring (e.g. "first255characters\\"\\"morecharacters").',
      ),
      new DynamicUIProps(
        InputType.Number,
        "Ttl",
        "The time-to-live of this record set (seconds).",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The DNS record set type.\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "ManagedZone",
        "The name of the zone in which this record set will\nreside.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The DNS name this record set will apply to.",
      ),
    ];
  }
}
