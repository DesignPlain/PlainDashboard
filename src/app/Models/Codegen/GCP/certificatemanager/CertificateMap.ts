import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificatemanager_CertificateMapGclbTarget,
  Certificatemanager_CertificateMapGclbTarget_GetTypes,
} from "../types/Certificatemanager_CertificateMapGclbTarget";

export interface CertificateMapArgs {
  // A human-readable description of the resource.
  Description?: string;

  /*
Set of labels associated with a Certificate Map resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
A user-defined name of the Certificate Map. Certificate Map names must be unique
globally and match the pattern `projects/-/locations/-/certificateMaps/-`.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class CertificateMap extends Resource {
  /*
A user-defined name of the Certificate Map. Certificate Map names must be unique
globally and match the pattern `projects/-/locations/-/certificateMaps/-`.


- - -
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Update timestamp of a Certificate Map. Timestamp is in RFC3339 UTC "Zulu" format,
accurate to nanoseconds with up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  /*
Creation timestamp of a Certificate Map. Timestamp is in RFC3339 UTC "Zulu" format,
accurate to nanoseconds with up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
A list of target proxies that use this Certificate Map
Structure is documented below.
*/
  public GclbTargets?: Array<Certificatemanager_CertificateMapGclbTarget>;

  /*
Set of labels associated with a Certificate Map resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // A human-readable description of the resource.
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human-readable description of the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Set of labels associated with a Certificate Map resource.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "A user-defined name of the Certificate Map. Certificate Map names must be unique\nglobally and match the pattern `projects/*/locations/*/certificateMaps/*`.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
