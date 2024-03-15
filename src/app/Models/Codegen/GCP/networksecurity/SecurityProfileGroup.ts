import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SecurityProfileGroupArgs {
  // An optional description of the profile. The Max length is 512 characters.
  Description?: string;

  /*
A map of key/value label pairs to assign to the resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The location of the security profile group.
The default value is `global`.
*/
  Location?: string;

  /*
The name of the security profile group resource.


- - -
*/
  Name?: string;

  /*
The name of the parent this security profile group belongs to.
Format: organizations/{organization_id}.
*/
  Parent?: string;

  // Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup.
  ThreatPreventionProfile?: string;
}
export class SecurityProfileGroup extends Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
This checksum is computed by the server based on the value of other fields,
and may be sent on update and delete requests to ensure the client has an up-to-date
value before proceeding.
*/
  public Etag?: string;

  /*
The location of the security profile group.
The default value is `global`.
*/
  public Location?: string;

  /*
The name of the parent this security profile group belongs to.
Format: organizations/{organization_id}.
*/
  public Parent?: string;

  // Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup.
  public ThreatPreventionProfile?: string;

  // Time the security profile group was updated in UTC.
  public UpdateTime?: string;

  // Time the security profile group was created in UTC.
  public CreateTime?: string;

  // An optional description of the profile. The Max length is 512 characters.
  public Description?: string;

  /*
A map of key/value label pairs to assign to the resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The name of the security profile group resource.


- - -
*/
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the security profile group.\nThe default value is `global`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the security profile group resource.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The name of the parent this security profile group belongs to.\nFormat: organizations/{organization_id}.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ThreatPreventionProfile",
        "Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of the profile. The Max length is 512 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "A map of key/value label pairs to assign to the resource.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
    ];
  }
}
