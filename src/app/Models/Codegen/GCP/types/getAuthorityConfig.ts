import { getAuthorityConfigX509Config } from "./getAuthorityConfigX509Config";
import { getAuthorityConfigSubjectConfig } from "./getAuthorityConfigSubjectConfig";

export interface getAuthorityConfig {
  // Specifies some of the values in a certificate that are related to the subject.
  SubjectConfigs?: Array<getAuthorityConfigSubjectConfig>;

  // Describes how some of the technical X.509 fields in a certificate should be populated.
  X509Configs?: Array<getAuthorityConfigX509Config>;
}
