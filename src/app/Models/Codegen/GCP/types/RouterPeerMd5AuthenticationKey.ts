export interface RouterPeerMd5AuthenticationKey {
  // Value of the key.
  Key?: string;

  /*
Name of this BGP peer. The name must be 1-63 characters long,
and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?` which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  Name?: string;
}
