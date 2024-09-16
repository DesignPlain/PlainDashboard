import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface OrganizationSecurityPolicyAssociationArgs {
  // The resource that the security policy is attached to.
  attachmentId?: string;

  // The name for an association.
  name?: string;

  /*
The security policy ID of the association.


- - -
*/
  policyId?: string;
}
export class OrganizationSecurityPolicyAssociation extends DS_Resource {
  /*
The security policy ID of the association.


- - -
*/
  public policyId?: string;

  // The resource that the security policy is attached to.
  public attachmentId?: string;

  // The display name of the security policy of the association.
  public displayName?: string;

  // The name for an association.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'attachmentId',
        'The resource that the security policy is attached to.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name for an association.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'policyId',
        'The security policy ID of the association.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
    ];
  }
}
