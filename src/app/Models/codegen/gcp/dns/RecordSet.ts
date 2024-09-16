import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dns_RecordSetRoutingPolicy,
  dns_RecordSetRoutingPolicy_GetTypes,
} from '../types/dns_RecordSetRoutingPolicy';

export interface RecordSetArgs {
  /*
The configuration for steering traffic based on query.
Now you can specify either Weighted Round Robin(WRR) type or Geolocation(GEO) type.
Structure is documented below.
*/
  routingPolicy?: dns_RecordSetRoutingPolicy;

  /*
The string data for the records in this record set whose meaning depends on the DNS type. For TXT record, if the string
data contains spaces, add surrounding \" if you don't want your string to get split on spaces. To specify a single
record value longer than 255 characters such as a TXT record for DKIM, add \"\" inside the Terraform configuration
string (e.g. "first255characters\"\"morecharacters").
*/
  rrdatas?: Array<string>;

  // The time-to-live of this record set (seconds).
  ttl?: number;

  /*
The DNS record set type.

- - -
*/
  type?: string;

  /*
The name of the zone in which this record set will
reside.
*/
  managedZone?: string;

  // The DNS name this record set will apply to.
  name?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;
}
export class RecordSet extends DS_Resource {
  // The time-to-live of this record set (seconds).
  public ttl?: number;

  /*
The DNS record set type.

- - -
*/
  public type?: string;

  /*
The name of the zone in which this record set will
reside.
*/
  public managedZone?: string;

  // The DNS name this record set will apply to.
  public name?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  /*
The configuration for steering traffic based on query.
Now you can specify either Weighted Round Robin(WRR) type or Geolocation(GEO) type.
Structure is documented below.
*/
  public routingPolicy?: dns_RecordSetRoutingPolicy;

  /*
The string data for the records in this record set whose meaning depends on the DNS type. For TXT record, if the string
data contains spaces, add surrounding \" if you don't want your string to get split on spaces. To specify a single
record value longer than 255 characters such as a TXT record for DKIM, add \"\" inside the Terraform configuration
string (e.g. "first255characters\"\"morecharacters").
*/
  public rrdatas?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'type',
        'The DNS record set type.\n\n- - -',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'managedZone',
        'The name of the zone in which this record set will\nreside.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The DNS name this record set will apply to.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'routingPolicy',
        'The configuration for steering traffic based on query.\nNow you can specify either Weighted Round Robin(WRR) type or Geolocation(GEO) type.\nStructure is documented below.',
        () => dns_RecordSetRoutingPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'rrdatas',
        'The string data for the records in this record set whose meaning depends on the DNS type. For TXT record, if the string\ndata contains spaces, add surrounding \\" if you don\'t want your string to get split on spaces. To specify a single\nrecord value longer than 255 characters such as a TXT record for DKIM, add \\"\\" inside the Terraform configuration\nstring (e.g. "first255characters\\"\\"morecharacters").',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'ttl',
        'The time-to-live of this record set (seconds).',
        () => [],
        false,
        false,
      ),
    ];
  }
}
