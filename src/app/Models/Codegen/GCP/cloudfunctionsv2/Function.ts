import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudfunctionsv2_FunctionEventTrigger,
  Cloudfunctionsv2_FunctionEventTrigger_GetTypes,
} from "../types/Cloudfunctionsv2_FunctionEventTrigger";
import {
  Cloudfunctionsv2_FunctionBuildConfig,
  Cloudfunctionsv2_FunctionBuildConfig_GetTypes,
} from "../types/Cloudfunctionsv2_FunctionBuildConfig";
import {
  Cloudfunctionsv2_FunctionServiceConfig,
  Cloudfunctionsv2_FunctionServiceConfig_GetTypes,
} from "../types/Cloudfunctionsv2_FunctionServiceConfig";

export interface FunctionArgs {
  // User-provided description of a function.
  Description?: string;

  /*
An Eventarc trigger managed by Google Cloud Functions that fires events in
response to a condition in another service.
Structure is documented below.
*/
  EventTrigger?: Cloudfunctionsv2_FunctionEventTrigger;

  /*
Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.
It must match the pattern projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}.
*/
  KmsKeyName?: string;

  /*
A set of key/value label pairs associated with this Cloud Function.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The location of this cloud function.


- - -
*/
  Location?: string;

  /*
A user-defined name of the function. Function names must
be unique globally and match pattern `projects/-/locations/-/functions/-`.
*/
  Name?: string;

  /*
Describes the Build step of the function that builds a container
from the given source.
Structure is documented below.
*/
  BuildConfig?: Cloudfunctionsv2_FunctionBuildConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Describes the Service being deployed.
Structure is documented below.
*/
  ServiceConfig?: Cloudfunctionsv2_FunctionServiceConfig;
}
export class Function extends Resource {
  /*
Describes the Service being deployed.
Structure is documented below.
*/
  public ServiceConfig?: Cloudfunctionsv2_FunctionServiceConfig;

  // Describes the current state of the function.
  public State?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The environment the function is hosted on.
  public Environment?: string;

  /*
An Eventarc trigger managed by Google Cloud Functions that fires events in
response to a condition in another service.
Structure is documented below.
*/
  public EventTrigger?: Cloudfunctionsv2_FunctionEventTrigger;

  /*
Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.
It must match the pattern projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}.
*/
  public KmsKeyName?: string;

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

  // The last update timestamp of a Cloud Function.
  public UpdateTime?: string;

  /*
Describes the Build step of the function that builds a container
from the given source.
Structure is documented below.
*/
  public BuildConfig?: Cloudfunctionsv2_FunctionBuildConfig;

  /*
A user-defined name of the function. Function names must
be unique globally and match pattern `projects/-/locations/-/functions/-`.
*/
  public Name?: string;

  /*
A set of key/value label pairs associated with this Cloud Function.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The location of this cloud function.


- - -
*/
  public Location?: string;

  // User-provided description of a function.
  public Description?: string;

  // Output only. The deployed url for the function.
  public Url?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "KmsKeyName",
        "Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.\nIt must match the pattern projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "A set of key/value label pairs associated with this Cloud Function.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User-provided description of a function.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "EventTrigger",
        "An Eventarc trigger managed by Google Cloud Functions that fires events in\nresponse to a condition in another service.\nStructure is documented below.",
        Cloudfunctionsv2_FunctionEventTrigger_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BuildConfig",
        "Describes the Build step of the function that builds a container\nfrom the given source.\nStructure is documented below.",
        Cloudfunctionsv2_FunctionBuildConfig_GetTypes(),
        false,
        false,
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
        InputType.Object,
        "ServiceConfig",
        "Describes the Service being deployed.\nStructure is documented below.",
        Cloudfunctionsv2_FunctionServiceConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of this cloud function.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "A user-defined name of the function. Function names must\nbe unique globally and match pattern `projects/*/locations/*/functions/*`.",
        [],
        false,
        true,
      ),
    ];
  }
}
