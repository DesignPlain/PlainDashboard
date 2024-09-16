import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudidentity_GroupMembershipMemberKey {
  /*
The ID of the entity.
For Google-managed entities, the id must be the email address of an existing
group or user.
For external-identity-mapped entities, the id must be a string conforming
to the Identity Source's requirements.
Must be unique within a namespace.
*/
  id?: string;

  /*
The namespace in which the entity exists.
If not specified, the EntityKey represents a Google-managed entity
such as a Google user or a Google Group.
If specified, the EntityKey represents an external-identity-mapped group.
The namespace must correspond to an identity source created in Admin Console
and must be in the form of `identitysources/{identity_source_id}`.
*/
  namespace?: string;
}

export function cloudidentity_GroupMembershipMemberKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'id',
      "The ID of the entity.\nFor Google-managed entities, the id must be the email address of an existing\ngroup or user.\nFor external-identity-mapped entities, the id must be a string conforming\nto the Identity Source's requirements.\nMust be unique within a namespace.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'namespace',
      'The namespace in which the entity exists.\nIf not specified, the EntityKey represents a Google-managed entity\nsuch as a Google user or a Google Group.\nIf specified, the EntityKey represents an external-identity-mapped group.\nThe namespace must correspond to an identity source created in Admin Console\nand must be in the form of `identitysources/{identity_source_id}`.',
      () => [],
      false,
      true,
    ),
  ];
}
