import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface KmsconfigArgs {
  // Resource name of the KMS key to use. Only regional keys are supported. Format: `projects/{{project}}/locations/{{location}}/keyRings/{{key_ring}}/cryptoKeys/{{key}}`.
  CryptoKeyName?: string;

  // Description for the CMEK policy.
  Description?: string;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Name of the policy location. CMEK policies apply to the whole region.
  Location?: string;

  /*
Name of the CMEK policy.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Kmsconfig extends Resource {
  /*
Access to the key needs to be granted. The instructions contain gcloud commands to run to grant access.
To make the policy work, a CMEK policy check is required, which verifies key access.
*/
  public Instructions?: string;

  /*
Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The Service account which needs to have access to the  provided KMS key.
  public ServiceAccount?: string;

  // Resource name of the KMS key to use. Only regional keys are supported. Format: `projects/{{project}}/locations/{{location}}/keyRings/{{key_ring}}/cryptoKeys/{{key}}`.
  public CryptoKeyName?: string;

  // Description for the CMEK policy.
  public Description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Name of the policy location. CMEK policies apply to the whole region.
  public Location?: string;

  /*
Name of the CMEK policy.


- - -
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Labels",
        'Labels as key value pairs. Example: `{ "owner": "Bob", "department": "finance", "purpose": "testing" }`.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Name of the policy location. CMEK policies apply to the whole region.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the CMEK policy.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CryptoKeyName",
        "Resource name of the KMS key to use. Only regional keys are supported. Format: `projects/{{project}}/locations/{{location}}/keyRings/{{key_ring}}/cryptoKeys/{{key}}`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description for the CMEK policy.",
      ),
    ];
  }
}
