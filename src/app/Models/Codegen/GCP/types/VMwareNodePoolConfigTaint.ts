export interface VMwareNodePoolConfigTaint {
  /*
Available taint effects.
Possible values are: `EFFECT_UNSPECIFIED`, `NO_SCHEDULE`, `PREFER_NO_SCHEDULE`, `NO_EXECUTE`.
*/
  Effect?: string;

  // Key associated with the effect.
  Key?: string;

  // Value associated with the effect.
  Value?: string;
}
