export interface ConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetwork {
  // The time when this access control entry expires in RFC 3339 format.
  ExpireTime?: string;

  // A label to identify this entry.
  Label?: string;

  // Input only. The time-to-leave of this access control entry.
  Ttl?: string;

  // The allowlisted value for the access control list.
  Value?: string;
}
