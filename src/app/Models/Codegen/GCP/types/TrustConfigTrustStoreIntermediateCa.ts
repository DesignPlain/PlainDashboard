export interface TrustConfigTrustStoreIntermediateCa {
  /*
PEM intermediate certificate used for building up paths for validation.
Each certificate provided in PEM format may occupy up to 5kB.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  PemCertificate?: string;
}
