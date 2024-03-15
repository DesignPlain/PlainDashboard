export interface getGroupLookupGroupKey {
  /*
(Optional) The namespace in which the entity exists.
If not populated, the EntityKey represents a Google-managed entity
such as a Google user or a Google Group.
If populated, the EntityKey represents an external-identity-mapped group.
The namespace must correspond to an identity source created in Admin Console
and must be in the form of `identitysources/{identity_source_id}`.
*/
  Namespace?: string;

  /*
(Required) The ID of the entity.
For Google-managed entities, the id is the email address of an existing group or user.
For external-identity-mapped entities, the id is a string conforming
to the Identity Source's requirements.
*/
  Id?: string;
}
