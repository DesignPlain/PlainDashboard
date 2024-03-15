import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { FunctionServiceConfig } from "../types/FunctionServiceConfig";
import { FunctionBuildConfig } from "../types/FunctionBuildConfig";
import { FunctionEventTrigger } from "../types/FunctionEventTrigger";

export interface FunctionArgs {
  // User-provided description of a function.
  Description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Describes the Service being deployed.
Structure is documented below.
*/
  ServiceConfig?: FunctionServiceConfig;

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
  BuildConfig?: FunctionBuildConfig;

  /*
An Eventarc trigger managed by Google Cloud Functions that fires events in
response to a condition in another service.
Structure is documented below.
*/
  EventTrigger?: FunctionEventTrigger;

  /*
Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.
It must match the pattern projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}.
*/
  KmsKeyName?: string;
}
export class Function extends Resource {
  /*
The location of this cloud function.


- - -
*/
  public Location?: string;

  // The last update timestamp of a Cloud Function.
  public UpdateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
An Eventarc trigger managed by Google Cloud Functions that fires events in
response to a condition in another service.
Structure is documented below.
*/
  public EventTrigger?: FunctionEventTrigger;

  /*
A set of key/value label pairs associated with this Cloud Function.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // User-provided description of a function.
  public Description?: string;

  /*
A user-defined name of the function. Function names must
be unique globally and match pattern `projects/-/locations/-/functions/-`.
*/
  public Name?: string;

  /*
Describes the Service being deployed.
Structure is documented below.
*/
  public ServiceConfig?: FunctionServiceConfig;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Describes the current state of the function.
  public State?: string;

  /*
Describes the Build step of the function that builds a container
from the given source.
Structure is documented below.
*/
  public BuildConfig?: FunctionBuildConfig;

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

  // The environment the function is hosted on.
  public Environment?: string;

  // Output only. The deployed url for the function.
  public Url?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ServiceConfig",
        "Describes the Service being deployed.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BuildConfig",
        "Describes the Build step of the function that builds a container\nfrom the given source.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EventTrigger",
        "An Eventarc trigger managed by Google Cloud Functions that fires events in\nresponse to a condition in another service.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User-provided description of a function.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "A set of key/value label pairs associated with this Cloud Function.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of this cloud function.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "A user-defined name of the function. Function names must\nbe unique globally and match pattern `projects/*/locations/*/functions/*`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "KmsKeyName",
        "Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.\nIt must match the pattern projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}.",
      ),
    ];
  }
}
