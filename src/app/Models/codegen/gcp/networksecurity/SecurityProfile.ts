import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networksecurity_SecurityProfileThreatPreventionProfile,
  networksecurity_SecurityProfileThreatPreventionProfile_GetTypes,
} from '../types/networksecurity_SecurityProfileThreatPreventionProfile';

export interface SecurityProfileArgs {
  /*
The name of the security profile resource.


- - -
*/
  name?: string;

  /*
The name of the parent this security profile belongs to.
Format: organizations/{organization_id}.
*/
  parent?: string;

  /*
The threat prevention configuration for the security profile.
Structure is documented below.
*/
  threatPreventionProfile?: networksecurity_SecurityProfileThreatPreventionProfile;

  /*
The type of security profile.
Possible values are: `THREAT_PREVENTION`.
*/
  type?: string;

  // An optional description of the security profile. The Max length is 512 characters.
  description?: string;

  /*
A map of key/value label pairs to assign to the resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The location of the security profile.
The default value is `global`.
*/
  location?: string;
}
export class SecurityProfile extends DS_Resource {
  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Server-defined URL of this resource.
  public selfLink?: string;

  // Time the security profile was created in UTC.
  public createTime?: string;

  // An optional description of the security profile. The Max length is 512 characters.
  public description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
This checksum is computed by the server based on the value of other fields,
and may be sent on update and delete requests to ensure the client has an up-to-date
value before proceeding.
*/
  public etag?: string;

  /*
The name of the security profile resource.


- - -
*/
  public name?: string;

  /*
The name of the parent this security profile belongs to.
Format: organizations/{organization_id}.
*/
  public parent?: string;

  /*
The type of security profile.
Possible values are: `THREAT_PREVENTION`.
*/
  public type?: string;

  /*
A map of key/value label pairs to assign to the resource.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The location of the security profile.
The default value is `global`.
*/
  public location?: string;

  /*
The threat prevention configuration for the security profile.
Structure is documented below.
*/
  public threatPreventionProfile?: networksecurity_SecurityProfileThreatPreventionProfile;

  // Time the security profile was updated in UTC.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the security profile resource.\n\n\n- - -',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'parent',
        'The name of the parent this security profile belongs to.\nFormat: organizations/{organization_id}.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'threatPreventionProfile',
        'The threat prevention configuration for the security profile.\nStructure is documented below.',
        () => networksecurity_SecurityProfileThreatPreventionProfile_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'The type of security profile.\nPossible values are: `THREAT_PREVENTION`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'An optional description of the security profile. The Max length is 512 characters.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'A map of key/value label pairs to assign to the resource.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The location of the security profile.\nThe default value is `global`.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
