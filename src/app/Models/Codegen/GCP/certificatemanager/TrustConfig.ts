import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificatemanager_TrustConfigTrustStore,
  Certificatemanager_TrustConfigTrustStore_GetTypes,
} from "../types/Certificatemanager_TrustConfigTrustStore";

export interface TrustConfigArgs {
  // One or more paragraphs of text description of a trust config.
  Description?: string;

  /*
Set of label tags associated with the trust config.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The trust config location.


- - -
*/
  Location?: string;

  // A user-defined name of the trust config. Trust config names must be unique globally.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Set of trust stores to perform validation against.
This field is supported when TrustConfig is configured with Load Balancers, currently not supported for SPIFFE certificate validation.
Structure is documented below.
*/
  TrustStores?: Array<Certificatemanager_TrustConfigTrustStore>;
}
export class TrustConfig extends Resource {
  /*
The creation timestamp of a TrustConfig.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  // A user-defined name of the trust config. Trust config names must be unique globally.
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
Set of trust stores to perform validation against.
This field is supported when TrustConfig is configured with Load Balancers, currently not supported for SPIFFE certificate validation.
Structure is documented below.
*/
  public TrustStores?: Array<Certificatemanager_TrustConfigTrustStore>;

  /*
The last update timestamp of a TrustConfig.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  // One or more paragraphs of text description of a trust config.
  public Description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Set of label tags associated with the trust config.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The trust config location.


- - -
*/
  public Location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The trust config location.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "A user-defined name of the trust config. Trust config names must be unique globally.",
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
      new DynamicUIProps(
        InputType.Array,
        "TrustStores",
        "Set of trust stores to perform validation against.\nThis field is supported when TrustConfig is configured with Load Balancers, currently not supported for SPIFFE certificate validation.\nStructure is documented below.",
        Certificatemanager_TrustConfigTrustStore_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "One or more paragraphs of text description of a trust config.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Set of label tags associated with the trust config.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
