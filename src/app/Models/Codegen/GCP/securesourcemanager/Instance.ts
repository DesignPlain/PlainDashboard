import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstancePrivateConfig } from "../types/InstancePrivateConfig";
import { InstanceHostConfig } from "../types/InstanceHostConfig";

export interface InstanceArgs {
  /*
The name for the Instance.


- - -
*/
  InstanceId?: string;

  // Customer-managed encryption key name, in the format projects/-/locations/-/keyRings/-/cryptoKeys/-.
  KmsKey?: string;

  /*
Labels as key value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The location for the Instance.
  Location?: string;

  /*
Private settings for private instance.
Structure is documented below.
*/
  PrivateConfig?: InstancePrivateConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Instance extends Resource {
  /*
A list of hostnames for this instance.
Structure is documented below.
*/
  public HostConfigs?: Array<InstanceHostConfig>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Time the Instance was created in UTC.
  public CreateTime?: string;

  /*
Private settings for private instance.
Structure is documented below.
*/
  public PrivateConfig?: InstancePrivateConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The location for the Instance.
  public Location?: string;

  // Provides information about the current instance state.
  public StateNote?: string;

  // Time the Instance was updated in UTC.
  public UpdateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The name for the Instance.


- - -
*/
  public InstanceId?: string;

  // Customer-managed encryption key name, in the format projects/-/locations/-/keyRings/-/cryptoKeys/-.
  public KmsKey?: string;

  /*
Labels as key value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The resource name for the Instance.
  public Name?: string;

  // The current state of the Instance.
  public State?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the Instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PrivateConfig",
        "Private settings for private instance.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceId",
        "The name for the Instance.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "KmsKey",
        "Customer-managed encryption key name, in the format projects/*/locations/*/keyRings/*/cryptoKeys/*.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Labels as key value pairs.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
    ];
  }
}
