import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  certificatemanager_DnsAuthorizationDnsResourceRecord,
  certificatemanager_DnsAuthorizationDnsResourceRecord_GetTypes,
} from "../types/certificatemanager_DnsAuthorizationDnsResourceRecord";

export interface DnsAuthorizationArgs {
  // A human-readable description of the resource.
  description?: string;

  /*
A domain which is being authorized. A DnsAuthorization resource covers a
single domain and its wildcard, e.g. authorization for "example.com" can
be used to issue certificates for "example.com" and "-.example.com".
*/
  domain?: string;

  /*
Set of label tags associated with the DNS Authorization resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The Certificate Manager location. If not specified, "global" is used.
  location?: string;

  /*
Name of the resource; provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]- which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class DnsAuthorization extends DS_Resource {
  // The Certificate Manager location. If not specified, "global" is used.
  public location?: string;

  // A human-readable description of the resource.
  public description?: string;

  /*
The structure describing the DNS Resource Record that needs to be added
to DNS configuration for the authorization to be usable by
certificate.
Structure is documented below.
*/
  public dnsResourceRecords?: Array<certificatemanager_DnsAuthorizationDnsResourceRecord>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Set of label tags associated with the DNS Authorization resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
A domain which is being authorized. A DnsAuthorization resource covers a
single domain and its wildcard, e.g. authorization for "example.com" can
be used to issue certificates for "example.com" and "-.example.com".
*/
  public domain?: string;

  /*
Name of the resource; provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]- which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.


- - -
*/
  public name?: string;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "location",
        'The Certificate Manager location. If not specified, "global" is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource; provided by the client when the resource is created.\nThe name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,\nand all following characters must be a dash, underscore, letter or digit.\n\n\n- - -",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A human-readable description of the resource.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domain",
        'A domain which is being authorized. A DnsAuthorization resource covers a\nsingle domain and its wildcard, e.g. authorization for "example.com" can\nbe used to issue certificates for "example.com" and "*.example.com".',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Set of label tags associated with the DNS Authorization resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
