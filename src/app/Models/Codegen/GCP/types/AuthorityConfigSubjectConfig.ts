import { AuthorityConfigSubjectConfigSubject } from "./AuthorityConfigSubjectConfigSubject";
import { AuthorityConfigSubjectConfigSubjectAltName } from "./AuthorityConfigSubjectConfigSubjectAltName";

export interface AuthorityConfigSubjectConfig {
  /*
Contains distinguished name fields such as the location and organization.
Structure is documented below.
*/
  Subject?: AuthorityConfigSubjectConfigSubject;

  /*
The subject alternative name fields.
Structure is documented below.
*/
  SubjectAltName?: AuthorityConfigSubjectConfigSubjectAltName;
}
