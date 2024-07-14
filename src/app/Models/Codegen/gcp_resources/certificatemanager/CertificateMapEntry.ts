import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface CertificateMapEntryArgs {
  /*
A map entry that is inputted into the cetrificate map


- - -
*/
  map?: string;

  // A predefined matcher for particular cases, other than SNI selection
  matcher?: string;

  /*
A user-defined name of the Certificate Map Entry. Certificate Map Entry
names must be unique globally and match pattern
'projects/-/locations/-/certificateMaps/-/certificateMapEntries/-'
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
A set of Certificates defines for the given hostname.
There can be defined up to fifteen certificates in each Certificate Map Entry.
Each certificate must match pattern projects/-/locations/-/certificates/-.
*/
  certificates?: Array<string>;

  // A human-readable description of the resource.
  description?: string;

  /*
A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (-.example.com)
for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for
selecting a proper certificate.
*/
  hostname?: string;

  /*
Set of labels associated with a Certificate Map Entry.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;
}
export class CertificateMapEntry extends Resource {
  /*
Creation timestamp of a Certificate Map Entry. Timestamp in RFC3339 UTC "Zulu" format,
with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public createTime?: string;

  /*
A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (-.example.com)
for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for
selecting a proper certificate.
*/
  public hostname?: string;

  /*
Set of labels associated with a Certificate Map Entry.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
A map entry that is inputted into the cetrificate map


- - -
*/
  public map?: string;

  /*
A user-defined name of the Certificate Map Entry. Certificate Map Entry
names must be unique globally and match pattern
'projects/-/locations/-/certificateMaps/-/certificateMapEntries/-'
*/
  public name?: string;

  // A serving state of this Certificate Map Entry.
  public state?: string;

  /*
A set of Certificates defines for the given hostname.
There can be defined up to fifteen certificates in each Certificate Map Entry.
Each certificate must match pattern projects/-/locations/-/certificates/-.
*/
  public certificates?: Array<string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // A predefined matcher for particular cases, other than SNI selection
  public matcher?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
Update timestamp of a Certificate Map Entry. Timestamp in RFC3339 UTC "Zulu" format,
with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public updateTime?: string;

  // A human-readable description of the resource.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "map",
        "A map entry that is inputted into the cetrificate map\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "matcher",
        "A predefined matcher for particular cases, other than SNI selection",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A user-defined name of the Certificate Map Entry. Certificate Map Entry\nnames must be unique globally and match pattern\n'projects/*/locations/*/certificateMaps/*/certificateMapEntries/*'",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "certificates",
        "A set of Certificates defines for the given hostname.\nThere can be defined up to fifteen certificates in each Certificate Map Entry.\nEach certificate must match pattern projects/*/locations/*/certificates/*.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A human-readable description of the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "hostname",
        "A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com)\nfor a set of hostnames with common suffix. Used as Server Name Indication (SNI) for\nselecting a proper certificate.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        'Set of labels associated with a Certificate Map Entry.\nAn object containing a list of "key": value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
