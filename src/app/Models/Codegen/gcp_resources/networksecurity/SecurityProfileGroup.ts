import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SecurityProfileGroupArgs {
  // An optional description of the profile. The Max length is 512 characters.
  description?: string;

  /*
A map of key/value label pairs to assign to the resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The location of the security profile group.
The default value is `global`.
*/
  location?: string;

  /*
The name of the security profile group resource.


- - -
*/
  name?: string;

  /*
The name of the parent this security profile group belongs to.
Format: organizations/{organization_id}.
*/
  parent?: string;

  // Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup.
  threatPreventionProfile?: string;
}
export class SecurityProfileGroup extends Resource {
  // An optional description of the profile. The Max length is 512 characters.
  public description?: string;

  /*
This checksum is computed by the server based on the value of other fields,
and may be sent on update and delete requests to ensure the client has an up-to-date
value before proceeding.
*/
  public etag?: string;

  /*
The location of the security profile group.
The default value is `global`.
*/
  public location?: string;

  /*
The name of the security profile group resource.


- - -
*/
  public name?: string;

  // Time the security profile group was updated in UTC.
  public updateTime?: string;

  // Time the security profile group was created in UTC.
  public createTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
A map of key/value label pairs to assign to the resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The name of the parent this security profile group belongs to.
Format: organizations/{organization_id}.
*/
  public parent?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup.
  public threatPreventionProfile?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of the profile. The Max length is 512 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "A map of key/value label pairs to assign to the resource.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the security profile group.\nThe default value is `global`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the security profile group resource.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The name of the parent this security profile group belongs to.\nFormat: organizations/{organization_id}.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "threatPreventionProfile",
        "Reference to a SecurityProfile with the threat prevention configuration for the SecurityProfileGroup.",
        [],
        false,
        false,
      ),
    ];
  }
}
