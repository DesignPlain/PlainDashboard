import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface CertificateMapEntryArgs {
  // A predefined matcher for particular cases, other than SNI selection
  Matcher?: string;

  /*
A user-defined name of the Certificate Map Entry. Certificate Map Entry
names must be unique globally and match pattern
'projects/-/locations/-/certificateMaps/-/certificateMapEntries/-'
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
A set of Certificates defines for the given hostname.
There can be defined up to fifteen certificates in each Certificate Map Entry.
Each certificate must match pattern projects/-/locations/-/certificates/-.
*/
  Certificates?: Array<string>;

  // A human-readable description of the resource.
  Description?: string;

  /*
A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (-.example.com)
for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for
selecting a proper certificate.
*/
  Hostname?: string;

  /*
Set of labels associated with a Certificate Map Entry.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
A map entry that is inputted into the cetrificate map


- - -
*/
  Map?: string;
}
export class CertificateMapEntry extends Resource {
  /*
A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (-.example.com)
for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for
selecting a proper certificate.
*/
  public Hostname?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // A serving state of this Certificate Map Entry.
  public State?: string;

  /*
Update timestamp of a Certificate Map Entry. Timestamp in RFC3339 UTC "Zulu" format,
with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  /*
Creation timestamp of a Certificate Map Entry. Timestamp in RFC3339 UTC "Zulu" format,
with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  // A human-readable description of the resource.
  public Description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // A predefined matcher for particular cases, other than SNI selection
  public Matcher?: string;

  /*
A user-defined name of the Certificate Map Entry. Certificate Map Entry
names must be unique globally and match pattern
'projects/-/locations/-/certificateMaps/-/certificateMapEntries/-'
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
A set of Certificates defines for the given hostname.
There can be defined up to fifteen certificates in each Certificate Map Entry.
Each certificate must match pattern projects/-/locations/-/certificates/-.
*/
  public Certificates?: Array<string>;

  /*
Set of labels associated with a Certificate Map Entry.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
A map entry that is inputted into the cetrificate map


- - -
*/
  public Map?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Hostname",
        "A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com)\nfor a set of hostnames with common suffix. Used as Server Name Indication (SNI) for\nselecting a proper certificate.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        'Set of labels associated with a Certificate Map Entry.\nAn object containing a list of "key": value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Map",
        "A map entry that is inputted into the cetrificate map\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Matcher",
        "A predefined matcher for particular cases, other than SNI selection",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "A user-defined name of the Certificate Map Entry. Certificate Map Entry\nnames must be unique globally and match pattern\n'projects/*/locations/*/certificateMaps/*/certificateMapEntries/*'",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Certificates",
        "A set of Certificates defines for the given hostname.\nThere can be defined up to fifteen certificates in each Certificate Map Entry.\nEach certificate must match pattern projects/*/locations/*/certificates/*.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human-readable description of the resource.",
      ),
    ];
  }
}
