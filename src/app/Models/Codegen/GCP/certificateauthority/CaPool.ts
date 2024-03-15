import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { CaPoolPublishingOptions } from "../types/CaPoolPublishingOptions";
import { CaPoolIssuancePolicy } from "../types/CaPoolIssuancePolicy";

export interface CaPoolArgs {
  /*
The PublishingOptions to follow when issuing Certificates from any CertificateAuthority in this CaPool.
Structure is documented below.
*/
  PublishingOptions?: CaPoolPublishingOptions;

  /*
The Tier of this CaPool.
Possible values are: `ENTERPRISE`, `DEVOPS`.
*/
  Tier?: string;

  /*
The IssuancePolicy to control how Certificates will be issued from this CaPool.
Structure is documented below.
*/
  IssuancePolicy?: CaPoolIssuancePolicy;

  /*
Labels with user-defined metadata.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Location of the CaPool. A full list of valid locations can be found by
running `gcloud privateca locations list`.


- - -
*/
  Location?: string;

  // The name for this CaPool.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class CaPool extends Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The name for this CaPool.
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
The Tier of this CaPool.
Possible values are: `ENTERPRISE`, `DEVOPS`.
*/
  public Tier?: string;

  /*
The IssuancePolicy to control how Certificates will be issued from this CaPool.
Structure is documented below.
*/
  public IssuancePolicy?: CaPoolIssuancePolicy;

  /*
Labels with user-defined metadata.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Location of the CaPool. A full list of valid locations can be found by
running `gcloud privateca locations list`.


- - -
*/
  public Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The PublishingOptions to follow when issuing Certificates from any CertificateAuthority in this CaPool.
Structure is documented below.
*/
  public PublishingOptions?: CaPoolPublishingOptions;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Name", "The name for this CaPool."),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PublishingOptions",
        "The PublishingOptions to follow when issuing Certificates from any CertificateAuthority in this CaPool.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Tier",
        "The Tier of this CaPool.\nPossible values are: `ENTERPRISE`, `DEVOPS`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "IssuancePolicy",
        "The IssuancePolicy to control how Certificates will be issued from this CaPool.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        'Labels with user-defined metadata.\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":\n"1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Location of the CaPool. A full list of valid locations can be found by\nrunning `gcloud privateca locations list`.\n\n\n- - -",
      ),
    ];
  }
}
