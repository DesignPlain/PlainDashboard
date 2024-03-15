export interface BareMetalNodePoolNodePoolConfigTaint {
  // Value associated with the effect.
  Value?: string;

  /*
Specifies the nodes operating system (default: LINUX).
Possible values are: `EFFECT_UNSPECIFIED`, `PREFER_NO_SCHEDULE`, `NO_EXECUTE`.

- - -
*/
  Effect?: string;

  // Key associated with the effect.
  Key?: string;
}