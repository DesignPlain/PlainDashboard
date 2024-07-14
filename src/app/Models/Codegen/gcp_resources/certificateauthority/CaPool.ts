import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  certificateauthority_CaPoolIssuancePolicy,
  certificateauthority_CaPoolIssuancePolicy_GetTypes,
} from "../types/certificateauthority_CaPoolIssuancePolicy";
import {
  certificateauthority_CaPoolPublishingOptions,
  certificateauthority_CaPoolPublishingOptions_GetTypes,
} from "../types/certificateauthority_CaPoolPublishingOptions";

export interface CaPoolArgs {
  /*
The IssuancePolicy to control how Certificates will be issued from this CaPool.
Structure is documented below.
*/
  issuancePolicy?: certificateauthority_CaPoolIssuancePolicy;

  /*
Labels with user-defined metadata.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Location of the CaPool. A full list of valid locations can be found by
running `gcloud privateca locations list`.


- - -
*/
  location?: string;

  // The name for this CaPool.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The PublishingOptions to follow when issuing Certificates from any CertificateAuthority in this CaPool.
Structure is documented below.
*/
  publishingOptions?: certificateauthority_CaPoolPublishingOptions;

  /*
The Tier of this CaPool.
Possible values are: `ENTERPRISE`, `DEVOPS`.
*/
  tier?: string;
}
export class CaPool extends Resource {
  /*
Labels with user-defined metadata.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The PublishingOptions to follow when issuing Certificates from any CertificateAuthority in this CaPool.
Structure is documented below.
*/
  public publishingOptions?: certificateauthority_CaPoolPublishingOptions;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The IssuancePolicy to control how Certificates will be issued from this CaPool.
Structure is documented below.
*/
  public issuancePolicy?: certificateauthority_CaPoolIssuancePolicy;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
The Tier of this CaPool.
Possible values are: `ENTERPRISE`, `DEVOPS`.
*/
  public tier?: string;

  /*
Location of the CaPool. A full list of valid locations can be found by
running `gcloud privateca locations list`.


- - -
*/
  public location?: string;

  // The name for this CaPool.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "publishingOptions",
        "The PublishingOptions to follow when issuing Certificates from any CertificateAuthority in this CaPool.\nStructure is documented below.",
        certificateauthority_CaPoolPublishingOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tier",
        "The Tier of this CaPool.\nPossible values are: `ENTERPRISE`, `DEVOPS`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "issuancePolicy",
        "The IssuancePolicy to control how Certificates will be issued from this CaPool.\nStructure is documented below.",
        certificateauthority_CaPoolIssuancePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        'Labels with user-defined metadata.\nAn object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":\n"1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "Location of the CaPool. A full list of valid locations can be found by\nrunning `gcloud privateca locations list`.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name for this CaPool.",
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
    ];
  }
}
