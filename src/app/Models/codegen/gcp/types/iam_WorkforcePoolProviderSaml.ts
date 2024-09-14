import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface iam_WorkforcePoolProviderSaml {
  /*
SAML Identity provider configuration metadata xml doc.
The xml document should comply with [SAML 2.0 specification](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf).
The max size of the acceptable xml document will be bounded to 128k characters.
The metadata xml document should satisfy the following constraints:
1) Must contain an Identity Provider Entity ID.
2) Must contain at least one non-expired signing key certificate.
3) For each signing key:
a) Valid from should be no more than 7 days from now.
b) Valid to should be no more than 10 years in the future.
4) Up to 3 IdP signing keys are allowed in the metadata xml.
When updating the provider's metadata xml, at least one non-expired signing key
must overlap with the existing metadata. This requirement is skipped if there are
no non-expired signing keys present in the existing metadata.
*/
  idpMetadataXml?: string;
}

export function iam_WorkforcePoolProviderSaml_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "idpMetadataXml",
      "SAML Identity provider configuration metadata xml doc.\nThe xml document should comply with [SAML 2.0 specification](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf).\nThe max size of the acceptable xml document will be bounded to 128k characters.\nThe metadata xml document should satisfy the following constraints:\n1) Must contain an Identity Provider Entity ID.\n2) Must contain at least one non-expired signing key certificate.\n3) For each signing key:\na) Valid from should be no more than 7 days from now.\nb) Valid to should be no more than 10 years in the future.\n4) Up to 3 IdP signing keys are allowed in the metadata xml.\nWhen updating the provider's metadata xml, at least one non-expired signing key\nmust overlap with the existing metadata. This requirement is skipped if there are\nno non-expired signing keys present in the existing metadata.",
      () => [],
      true,
      false,
    ),
  ];
}
