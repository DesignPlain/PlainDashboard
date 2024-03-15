import { CaPoolIssuancePolicyAllowedKeyTypeEllipticCurve } from "./CaPoolIssuancePolicyAllowedKeyTypeEllipticCurve";
import { CaPoolIssuancePolicyAllowedKeyTypeRsa } from "./CaPoolIssuancePolicyAllowedKeyTypeRsa";

export interface CaPoolIssuancePolicyAllowedKeyType {
  /*
Represents an allowed Elliptic Curve key type.
Structure is documented below.
*/
  EllipticCurve?: CaPoolIssuancePolicyAllowedKeyTypeEllipticCurve;

  /*
Describes an RSA key that may be used in a Certificate issued from a CaPool.
Structure is documented below.
*/
  Rsa?: CaPoolIssuancePolicyAllowedKeyTypeRsa;
}
