import { getAuthorityConfigSubjectConfigSubject } from "./getAuthorityConfigSubjectConfigSubject";
import { getAuthorityConfigSubjectConfigSubjectAltName } from "./getAuthorityConfigSubjectConfigSubjectAltName";

export interface getAuthorityConfigSubjectConfig {
  // Contains distinguished name fields such as the location and organization.
  Subjects?: Array<getAuthorityConfigSubjectConfigSubject>;

  // The subject alternative name fields.
  SubjectAltNames?: Array<getAuthorityConfigSubjectConfigSubjectAltName>;
}
