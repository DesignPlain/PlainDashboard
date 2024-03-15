export interface BucketObjectRetention {
  // The retention policy mode. Either `Locked` or `Unlocked`.
  Mode?: string;

  /*
The time to retain the object until in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.

<a name>
*/
  RetainUntilTime?: string;
}
